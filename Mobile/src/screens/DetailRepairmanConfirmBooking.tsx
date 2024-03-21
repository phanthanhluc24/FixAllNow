import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Modal
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {useRoute} from '@react-navigation/native';
import useBookingDetail from '../hooks/useBookingDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useRepairmanChangeStatusBooking from '../hooks/useRepairmanChangeStatusBooking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
import RepairmanViewAddressRepair from './RepairmanViewAddressRepair';
interface BookingDetail {
  _id: string;
  status: string;
  address: string;
  fee_transport: number;
  fee_service: number;
  payment: string;
  user_id: {
    _id:string;
    full_name: string;
    email: string;
    number_phone:number;
    image:string
  };
  service_id: {
    image: string;
    service_name: string;
    price: number;
  };
  desc: string;
  updatedAt: string;
  time_repair:any;
  day_repair:any
}
const DetailRepairmanConfirmBooking = () => {
  const [loading, setLoading] = useState(false);
  const navigation:any = useNavigation();
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
  const detailBookings:any = useBookingDetail(booking_id);
  const {isLoading} = useBookingDetail(booking_id);
  const detailBooking: BookingDetail = detailBookings.detailBookings;
  console.log(detailBooking);
  const totalPayment =
    detailBooking?.service_id.price +
    detailBooking?.fee_service +
    detailBooking?.fee_transport;

  const handleChangeStatusBooking = (booking_id: string, option: number) => {
    setLoading(true);
    useRepairmanChangeStatusBooking(booking_id, option, token,
      () => {
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name:'HistoryStore'}],
        });
      });
  };
  if (isLoading) {
    return (
      <View style={{alignItems: 'center', marginTop:0}}>
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
  if (detailBookings.length === 0) {
    return <Text style={{marginTop:50, color:"black"}}>Services not available!</Text>;
  }
  
  const handleViewAddressRepair=(detailBooking: BookingDetail)=>{
    console.log(detailBooking);
    
    navigation.navigate("RepairmanViewAddressRepair",{detailBooking})
  }
  return (
    <View style={styles.container}>
       <Modal
          animationType="fade"
          transparent={true}
          visible={loading}
          onRequestClose={() => {
            setLoading(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={40} color="#FCA234" />
              </View>
            </View>
          </View>
        </Modal>
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
                <Text numberOfLines={2} style={styles.infoUserssss}>
                  {detailBooking?.user_id.full_name}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>SĐT:</Text>
                <Text numberOfLines={2} style={styles.infoUserssss}>
                  {detailBooking?.user_id.number_phone}
                </Text>
              </View>
              <View style={styles.styleInfo}>
                <Text style={styles.infoUsers}>Địa chỉ:</Text>
                <TouchableOpacity   onPress={() =>
                  handleViewAddressRepair(detailBooking)
                }> 
                <Text style={styles.infoUserss} numberOfLines={3}>
                  {detailBooking?.address}
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
            <View style={styles.infoUser}>
                <View style={styles.styleInfo}>
                  <Text style={styles.infoUserssss}>Giờ sửa chữa:</Text>
                  <Text numberOfLines={2} style={styles.infoUserssss}>
                    {detailBooking?.time_repair}
                  </Text>
                </View>
                <View style={styles.styleInfo}>
                  <Text style={styles.infoUserssss}>Ngày sửa chữa:</Text>
                  <Text numberOfLines={2} style={styles.infoUserssss}>
                    {detailBooking?.day_repair}
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
          <View style={{width: '40%'}}>
            <View style={styles.timeBook}>
              <Text style={styles.dateTime}>{detailBookings?.time_repair}</Text>
              <Text style={styles.dateTime}>{detailBookings?.day_repair}</Text>
            </View>
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
                  <Text>Đã thanh toán</Text>
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
                style={styles.backgrounds}
                onPress={() =>
                  handleChangeStatusBooking(detailBooking?._id, 2)
                }>
                <Text style={styles.nameConfirm}>Từ chối</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                style={styles.background}
                onPress={() =>
                  handleChangeStatusBooking(detailBooking?._id, 1)
                }>
                <Text style={styles.nameConfirm}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        )}
        {detailBooking?.status === 'Đã nhận đơn sửa' && (
          <View style={styles.totalPayment}>
             <View style={{width: '40%'}}>
              <TouchableOpacity
                style={styles.background} onPress={()=>navigation.navigate("Conversation",{image:detailBooking.user_id.image,name:detailBooking.user_id.full_name,idReceived:detailBooking.user_id._id})}
               >
                <Text style={styles.nameConfirm}>Nhắn tin</Text>
              </TouchableOpacity>
            </View>
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
  infoUsersss: {
    fontSize: 16,
    color: 'blue',
    width: '60%',
  },
  // infoUserssss: {
  //   fontSize: 16,
  //   color: '#394C6D',
  //   fontWeight: 'bold',
  //   width: '40%',
  // },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
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
    color: 'blue',
    width: '25%',
    textDecorationLine: 'underline'
  },
  infoUserssss: {
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
