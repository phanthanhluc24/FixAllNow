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
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
import useGetUserChated from '../hooks/useGetUserChated';

import useRepairmanFinderCancelBooking from '../hooks/useRepairmanFinderCancelBooking';
interface BookingDetail {
  _id: string;
  status: string;
  address: string;
  fee_transport: number;
  fee_service: number;
  user_id: {
    _id: string;
    full_name: string;
    email: string;
  };
  service_id: {
    image: string;
    service_name: string;
    price: string;
  };
  desc: string;
  updatedAt: string;
}
const DetailViewBookSchedule = () => {
  const { userChat } = useGetUserChated()
  const route = useRoute();
  const {booking_id}: any = route.params;
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();
  const [token, setToken] = useState<any>('');
  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      setToken(accessToken);
    };
    getAccessToken();
  }, []);
  const {detailBookings, isError, isLoading}: any =
    useBookingDetail(booking_id);
    if (isLoading) {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>
            <LoaderKit
              style={styles.loadingText}
              name={'BallPulse'}
              color={'#FCA234'}
            />
          </Text>
        </View>
      );
    }
  const totalPayment = detailBookings?.service_id.price + detailBookings?.fee_service + detailBookings?.fee_transport;
  const handleCancelBooking =(booking_id:string)=>{
    setLoading(true);
    useRepairmanFinderCancelBooking(booking_id,token,()=>{
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'Root'}],
      });
    })
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartService}>
        <View style={{borderBottomWidth: 2, borderBottomColor: '#394C6D'}}>
          <View>
            <View style={styles.content}>
              <Image
                source={{uri: detailBookings?.service_id.image}}
                style={styles.img}
              />
            </View>
            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.nameRepairman}>
                {detailBookings?.service_id.service_name}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Mô tả hư hỏng:</Text>
            <Text style={styles.desc} numberOfLines={10}>
              {detailBookings?.desc}
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Thông tin khách hàng:</Text>
            <View style={styles.infoUser}>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Họ và tên:</Text>
                <Text numberOfLines={2} style={styles.infoUserss}>
                  {detailBookings?.user_id.full_name}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>SĐT:</Text>
                <Text numberOfLines={2} style={styles.infoUserss}>
                  {detailBookings?.user_id.number_phone}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Địa chỉ:</Text>
                <Text style={styles.infoUserss} numberOfLines={3}>
                  {detailBookings?.address}
                </Text>
              </View>
            </View>
            <View>
            <View style={styles.infoUser}>
                <View style={styles.styleInfo}>
                  <Text style={styles.infoUserssss}>Giờ sửa chữa:</Text>
                  <Text numberOfLines={2} style={styles.infoUsersss}>
                    {detailBookings?.time_repair}
                  </Text>
                </View>
                <View style={styles.styleInfo}>
                  <Text style={styles.infoUserssss}>Ngày sửa chữa:</Text>
                  <Text numberOfLines={2} style={styles.infoUsersss}>
                    {detailBookings?.day_repair}
                  </Text>
                </View>
              
              </View>
                </View>
          </View>
        </View>
        <View style={styles.infoPayment}>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Giá dịch vụ:</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBookings?.service_id.price.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Phí dịch vụ:</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBookings?.fee_service.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
          <View style={styles.stylePrice}>
            <Text style={styles.titlePrice}>Phí di chuyển</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {detailBookings?.fee_transport.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VNĐ</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalPayment}>
          <View style={{width:"50%"}}>
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
      </ScrollView>

      <View style={styles.buttonEven}>
        {detailBookings && detailBookings?.status === 'Chờ xác nhận' && (
          <View style={styles.totalPayment}>
            <TouchableOpacity style={{width: '90%'}} onPress={()=>handleCancelBooking(detailBookings?._id)}>
              <View style={styles.background}>
                <Text style={styles.nameConfirm}>Hủy đơn đặt</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.buttonEven}>
        {detailBookings && detailBookings?.status === 'Đã nhận đơn sửa' && (
          <View style={styles.totalPayment}>
            <TouchableOpacity style={{width: '70%'}} onPress={()=>handleCancelBooking(detailBookings?._id)}>
              <View style={styles.background}>
                <Text style={styles.nameConfirm}>Đã nhận sửa chữa</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconChat} onPress={()=>navigation.navigate("Conversation",{image:detailBookings.user_id.image,name:detailBookings.user_id.full_name,idReceived:detailBookings.user_id._id})}>
              <Ionicons name="chatbox" size={30} color="#394C6D" />
              </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.buttonEven}>
        {detailBookings && detailBookings?.status === 'Đã hủy đơn' && (
          <View style={styles.totalPayment}>
            <TouchableOpacity style={{width: '100%'}} onPress={() =>
                    navigation.navigate('DetailService', {
                      id: detailBookings.service_id._id,
                      title: detailBookings.service_id.service_name,
                    })
                  }>
              <View style={styles.background}>
                <Text style={styles.nameConfirm}>Đặt lại</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.buttonEven}>
        {detailBookings && detailBookings?.status === 'Đã sửa hoàn thành' && (
          <View style={styles.totalPayment}>
            <TouchableOpacity style={{width: '40%'}} onPress={() =>
                    navigation.navigate('DetailService', {
                      id: detailBookings.service_id._id,
                      title: detailBookings.service_id.service_name,
                    })
                  }>
              <View style={styles.background}>
                <Text style={styles.nameConfirm}>Đặt lại</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailViewBookSchedule;

const styles = StyleSheet.create({
  iconChat: {
    alignItems: 'center',
    marginHorizontal:10
  },
  infoUserssss: {
    fontSize: 16,
    color: '#394C6D',
    fontWeight: 'bold',
    width: '40%',
  },
  infoUsersss: {
    fontSize: 16,
    color: 'blue',
    width: '60%',
  },
  timeBook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
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
    width: '100%',
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
    paddingBottom: 20,
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
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
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
