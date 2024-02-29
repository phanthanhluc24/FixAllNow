import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import useBookingService from '../hooks/useBookingService';
const ConfirmInforBooking = ({route}: any) => {
  const {infoBooking} = route.params;
  const serviceBooking = infoBooking.infoServiceBooking.service_name;
  const repairman = infoBooking.infoServiceBooking.user_id.full_name;
  const priceRepair = infoBooking.infoServiceBooking.price;
  const addressRepair = infoBooking.address;
  const desc=infoBooking.bugService
  const priceService = (5 / 100) * priceRepair;
  const priceMoves = 10000;
  const totalPrice = priceRepair + priceService + priceMoves;
  const navigation: any = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState<number|null>(null);
  const [errorPayment,setErrorPayment]=useState<string|null>(null)
  const {bookingService}=useBookingService()
  const data={
    dayRepair:infoBooking.date,
    timeRepair:infoBooking.time,
    priceMoves,
    priceService,
    address:addressRepair,
    desc:desc
  }
  const handleMethodSelect = () => {
    setSelectedMethod(1)
    setErrorPayment("OK")
  };
  const handleConfirm = () => {
    if (errorPayment==null) {
      setErrorPayment("Vui lòng chọn phương thức thanh toán")
    }else{
      bookingService(data,infoBooking.infoServiceBooking._id,infoBooking.infoServiceBooking.user_id._id)
    }
  };
  const handleMomoSelect=()=>{
    setSelectedMethod(2)
    setErrorPayment("OK")
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleConfirm}>
        <Text style={styles.title}>XÁC NHẬN THÔNG TIN</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoService}>
          <Text style={styles.titleInfo}>Thông tin dịch vụ</Text>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Đơn sửa:</Text>
            <Text style={styles.infors}>{serviceBooking}</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Thợ:</Text>
            <Text style={styles.infors}>{repairman}</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Giá sửa:</Text>
            <Text style={styles.infors}>
              {priceRepair.toLocaleString('vi-VN')}
            </Text>
            <Text style={styles.inforss}>VNĐ</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Phí dịch vụ:</Text>
            <Text style={styles.infors}>
              {priceService.toLocaleString('vi-VN')}
            </Text>
            <Text style={styles.inforss}>VNĐ</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Phí di chuyển:</Text>
            <Text style={styles.infors}>
              {priceMoves.toLocaleString('vi-VN')}
            </Text>
            <Text style={styles.inforss}>VNĐ</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Địa điểm:</Text>
            <Text style={styles.infors}>{addressRepair}</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Tổng:</Text>
            <Text style={styles.infors}>
              {totalPrice.toLocaleString('vi-VN')}
            </Text>
            <Text style={styles.inforss}>VNĐ</Text>
          </View>
        </View>
        <View style={styles.infoService}>
          <Text style={styles.titleInfo}>Chọn phương thức thanh toán</Text>
          {errorPayment!=="OK" && <Text>{errorPayment}</Text>}
          <View style={styles.method}>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                selectedMethod === 1 && styles.selectedMethod,
              ]}
              onPress={handleMethodSelect}>
              <Image
                source={require('../assets/ConfirmBooking/iconMomo.png')}
              />
              <Text style={styles.titleMethod}>TT tiền mặt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                selectedMethod === 2 && styles.selectedMethod,
              ]}
              onPress={() => handleMomoSelect()}>
              <Image
                source={require('../assets/ConfirmBooking/iconPrice.png')}
              />
              <Text style={styles.titleMethod}>TT qua momo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reConfirm}>
          <Text style={styles.quesConfirm}>Bạn có đồng ý xác thực không?</Text>
        </View>
      </View>
      <View style={styles.event}>
        <View style={styles.buttonChoose}>
          <View style={styles.buttonNow}>
            <View style={styles.button1}>
              <View style={styles.bookNow}>
                <Text style={styles.books}>Hủy</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button1}
              onPress={handleConfirm}>
              <View style={styles.book}>
                <Text style={styles.books}>Đồng ý</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmInforBooking;

const styles = StyleSheet.create({
  buttonMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  selectedMethod: {
    borderColor: 'green',
  },
  titleMethod: {
    marginLeft: 10,
  },
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  button1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookNow: {
    width: '80%',
    height: 50,
    backgroundColor: '#394C6D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  books: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  oneLine: {
    width: '100%',
    backgroundColor: '#FCA234',
    height: 1,
    marginTop: 15,
  },
  quesConfirm: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  reConfirm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // titleMethod: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   color: '#FCA234',
  // },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  // buttonMethod: {
  //   width: 140,
  //   height: 70,
  //   borderWidth: 3,
  //   borderColor: '#394C6D',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 10,
  // },
  infor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
    width: '50%',
  },
  infors: {
    fontSize: 18,
    color: '#FCA234',
    width: '50%',
  },
  inforss: {
    fontSize: 18,
    color: '#FCA234',
    width: '50%',
    fontWeight: 'bold',
  },
  styleInfo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '80%',
  },
  titleInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  container: {
    flex: 1,
  },
  titleConfirm: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
    marginVertical: 20,
  },
  infoContainer: {
    flex: 8,
  },
  event: {
    flex: 1,
  },
  infoService: {
    marginHorizontal: 20,
  },
});
