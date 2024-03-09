import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {useRoute} from '@react-navigation/native';
import useBookingDetail from '../hooks/useBookingDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useRepairmanChangeStatusBooking from '../hooks/useRepairmanChangeStatusBooking';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface BookingDetail {
  _id: string;
  status: string;
  address: string;
  fee_transport: number;
  fee_service: number;
  payment: string;
  user_id: {
    full_name: string;
    email: string;
  };
  service_id: {
    image: string;
    service_name: string;
    price: number;
  };
  desc: string;
  updatedAt: string;
}
const DetailRepairmanConfirmBooking = () => {
  const route = useRoute();
  const {booking_id}: any = route.params;
  const [token, setToken] = useState<any>('');
  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      setToken(accessToken);
    };
    getAccessToken();
  }, []);
  const detailBookings = useBookingDetail(booking_id);
  const detailBooking: BookingDetail = detailBookings.detailBookings;
  console.log(detailBooking);
  const totalPayment =
    detailBooking?.service_id.price +
    detailBooking?.fee_service +
    detailBooking?.fee_transport;

  const handleChangeStatusBooking = (booking_id: string, option: number) => {
    // console.log(booking_id, option);

    useRepairmanChangeStatusBooking(booking_id, option, token);
    // console.log(changeStatusBooking);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartService}>
        <View style={{borderBottomWidth: 2, borderBottomColor: '#394C6D'}}>
          <View>
            <View style={styles.content}>
              <Image
                source={{uri: detailBooking?.service_id.image}}
                style={styles.img}
              />
            </View>
            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.nameRepairman}>
                {detailBooking?.service_id.service_name}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Mô tả hư hỏng:</Text>
            <Text style={styles.desc} numberOfLines={10}>
              {detailBooking?.desc}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Thông tin khách hàng:</Text>
            <View style={styles.infoUser}>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Họ và tên:</Text>
                <Text numberOfLines={2} style={styles.infoUserss}>
                  {detailBooking?.user_id.full_name}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Email:</Text>
                <Text numberOfLines={2} style={styles.infoUserss}>
                  {detailBooking?.user_id.email}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Địa chỉ:</Text>
                <Text style={styles.infoUserss} numberOfLines={3}>
                  {detailBooking?.address}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.infoPayment}>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Giá dịch vụ:</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBooking?.service_id.price.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Phí dịch vụ:</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBooking?.fee_service.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Phí di chuyển</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBooking?.fee_transport.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalPayment}>
          <View>
            <Text style={styles.dateTime}>
              {moment(detailBooking?.updatedAt).format('DD/MM/YYYY HH:mm')}
            </Text>
          </View>
          <View style={styles.paymentContainer}>
            <View style={styles.payment}>
              <Text style={styles.price}>Tổng:</Text>
              <View style={styles.prices}>
                <Text style={styles.price}>
                  {totalPayment.toLocaleString('vi-VN')}
                </Text>
                <Text style={styles.vnd}> VNĐ</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.totalPayment}>
          <View></View>
          <View style={styles.paymentContainer}>
            <View style={styles.payment}>
              <Text style={styles.pricess}>
                {detailBooking?.payment === 'No' ? (
                  <Text>Chưa thanh toán</Text>
                ) : (
                  <Text>Chưa thanh toán</Text>
                )}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonEven}>
        {detailBooking?.status === 'Chờ xác nhận' && (
          <View style={styles.totalPayment}>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={styles.background}
                onPress={() =>
                  handleChangeStatusBooking(detailBooking?._id, 1)
                }>
                <Text style={styles.nameConfirm}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={styles.backgrounds}
                onPress={() =>
                  handleChangeStatusBooking(detailBooking?._id, 2)
                }>
                <Text style={styles.nameConfirm}>Hủy yêu cầu</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {detailBooking?.status === 'Đã nhận đơn sửa' && (
          <View style={styles.totalPayment}>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={styles.background}
                onPress={() =>
                  handleChangeStatusBooking(detailBooking?._id, 3)
                }>
                <Text style={styles.nameConfirm}>Hoàn thành</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default DetailRepairmanConfirmBooking;

const styles = StyleSheet.create({
  content: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 30,
  },
  titlePrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  stylePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoPayment: {
    marginVertical: 10,
  },
  infoUsers: {
    fontSize: 16,
    color: '#394C6D',
    fontWeight: 'bold',
    width: '30%',
  },
  infoUserss: {
    fontSize: 16,
    color: '#394C6D',
    width: '70%',
  },
  desc: {
    fontSize: 15,
    color: '#394C6D',
    marginVertical: 5,
  },
  styleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoUser: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonEven: {
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: '#394C6D',
    fontWeight: 'bold',
  },

  dateTime: {
    color: 'blue',
  },
  nameConfirm: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#394C6D',
    borderRadius: 5,
    width: '90%',
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgrounds: {
    backgroundColor: '#FCA234',
    borderRadius: 5,
    width: '90%',
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTotal: {
    width: 30,
    height: 30,
  },
  totalPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  img: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    shadowColor: '#394C6D',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  nameRepairman: {
    fontSize: 25,
    color: '#394C6D',
    fontWeight: 'bold',
  },
  vnd: {
    fontSize: 15,
    color: '#FCA234',
    fontWeight: 'bold',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    color: '#FCA234',
    width: 'auto',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  pricess: {
    fontSize: 15,
    color: '#394C6D',
    width: 'auto',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  description: {
    width: '100%',
    color: '#394C6D',
  },

  info: {
    marginVertical: 20,
    width: '70%',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  waitPayment: {
    color: '#394C6D',
  },
  nameService: {
    fontWeight: 'bold',
    color: 'black',
  },
  groundNameApp: {
    // backgroundColor:"#394C6D",
    // borderRadius:5
  },
  nameApp: {
    color: '#FCA234',
    backgroundColor: '#394C6D',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  cartService: {
    flex: 9,
    padding: 10,
    marginBottom: 10,
  },
  headerCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  nameShop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
