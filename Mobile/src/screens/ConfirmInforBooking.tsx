import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import useBookingService from '../hooks/useBookingService';
import {StripeProvider} from '@stripe/stripe-react-native';
import {useStripe} from '@stripe/stripe-react-native';
import {url} from '../hooks/apiRequest/url';
const ConfirmInforBooking = ({route}: any) => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const STRIPE =
    'pk_test_51Osxt0P3QsmcFffhQjfeuh4vZIeAQFzM7R4Lpk2lGRRZIKcB9J1MOBiGl2UWMb3HAaEqww6p4P8g63LnexqIpEiU00CjHmli5n';

  const [loading, setLoading] = useState(false);
  const {infoBooking} = route.params;
  const serviceBooking = infoBooking.infoServiceBooking.service_name;
  const repairman = infoBooking.infoServiceBooking.user_id.full_name;
  const priceRepair = infoBooking.infoServiceBooking.price;
  const addressRepair = infoBooking.address;
  const desc = infoBooking.bugService;
  let priceService;

  if (priceRepair <= 100000) {
    priceService = 0;
  } else if (priceRepair > 100000 && priceRepair <= 300000) {
    priceService = (5 / 100) * priceRepair;
  } else if (priceRepair > 300000 && priceRepair <= 500000) {
    priceService = (10 / 100) * priceRepair;
  } else if (priceRepair > 500000 && priceRepair <= 1000000) {
    priceService = (15 / 100) * priceRepair;
  } else {
    priceService = (20 / 100) * priceRepair;
  }
  const priceTransport = 10000;
  const totalPrice = priceRepair + priceService + priceTransport;
  const [payment, setPayment] = useState('');
  const navigation: any = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState<number | null>(2);
  const [errorPayment, setErrorPayment] = useState<string | null>(null);
  const {bookingService, isLoading} = useBookingService();
  const data = {
    dayRepair: infoBooking.date,
    timeRepair: infoBooking.time,
    priceTransport,
    priceService,
    address: addressRepair,
    desc: desc,
    payment: payment,
  };
  const handleMethodSelect = () => {
    setSelectedMethod(1);
    setPayment('Thanh toán khi sửa xong');
    setErrorPayment('OK');
  };
  const handleStripeSelect = () => {
    setSelectedMethod(2);
    setPayment('Đã thanh toán online qua Stripe');
    setErrorPayment('OK');
  };
  const handleConfirm = () => {
    if (selectedMethod === null) {
      setErrorPayment('Vui lòng chọn phương thức thanh toán');
      setLoading(false);
    } else {
      bookingService(
        data,
        infoBooking.infoServiceBooking._id,
        infoBooking.infoServiceBooking.user_id._id,
      );
    }
  };
  const handleConfirmStripe = async () => {
    const response = await fetch(`${url}/stripe/intents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount: totalPrice}),
    })
      .then(res => res.json())
      .then(async res => {
        const {error} = await initPaymentSheet({
          merchantDisplayName: `notJust.dev`,
          paymentIntentClientSecret: res.paymentIntent,
        });
        if (error) {
          console.log(error.message);
        }

        await presentPaymentSheet();
        bookingService(
          data,
          infoBooking.infoServiceBooking._id,
          infoBooking.infoServiceBooking.user_id._id,
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleCancel = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  };
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isLoading}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={40} color="#FCA234" />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.infoContainer}>
        <View style={styles.titleConfirm}>
          <Text style={styles.title}>XÁC NHẬN THÔNG TIN</Text>
        </View>
        <View style={styles.infoService}>
          <Text style={styles.titleInfo}>Thông tin dịch vụ</Text>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Đơn sửa:</Text>
            <Text numberOfLines={2} style={styles.infors}>
              {serviceBooking}
            </Text>
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
              {priceTransport.toLocaleString('vi-VN')}
            </Text>
            <Text style={styles.inforss}>VNĐ</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Địa điểm:</Text>
            <Text numberOfLines={3} style={styles.infors}>
              {addressRepair}
            </Text>
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
          <View style={{height: 20}}>
            {errorPayment !== 'OK' && (
              <Text style={{color: 'red', fontWeight: 'bold'}}>
                {errorPayment}
              </Text>
            )}
          </View>

          <View style={styles.method}>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                selectedMethod === 1 && styles.selectedMethod,
              ]}
              onPress={handleMethodSelect}>
              <Image
                style={styles.image1}
                source={require('../assets/ConfirmBooking/iconMomo.png')}
              />
              <Text style={styles.titleMethod}>Tiền mặt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                selectedMethod === 2 && styles.selectedMethod,
              ]}
              onPress={() => handleStripeSelect()}>
              <Image
                style={styles.image2}
                source={require('../assets/ConfirmBooking/stripe.png')}
              />
              <Text style={styles.titleMethod}>Stripe Online</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.reConfirm}>
          <Text style={styles.quesConfirm}>Bạn có đồng ý xác thực không?</Text>
        </View>
      </View>
      {/* {isLoading!=false && <Text><ActivityIndicator size={40} color="#FCA234" /></Text>} */}
      <View style={styles.event}>
        <View style={styles.buttonChoose}>
          <View style={styles.buttonNow}>
            <TouchableOpacity style={styles.button1} onPress={handleCancel}>
              <View style={styles.bookNow}>
                <Text style={styles.books}>Hủy</Text>
              </View>
            </TouchableOpacity>
            {selectedMethod == 1 ? (
              <TouchableOpacity style={styles.button1} onPress={handleConfirm}>
                <View style={styles.book}>
                  <Text style={styles.books}>Đồng ý</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <StripeProvider publishableKey={STRIPE}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={handleConfirmStripe}>
                  <View style={styles.book}>
                    <Text style={styles.books}>Đồng ý</Text>
                  </View>
                </TouchableOpacity>
              </StripeProvider>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmInforBooking;

const styles = StyleSheet.create({
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
  image1: {
    width: 20,
    height: 20,
  },
  image2: {
    width: 20,
    height: 20,
  },
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
    borderWidth: 3,
  },
  titleMethod: {
    marginLeft: 10,
  },
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
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
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '80%',
    height: 50,
    backgroundColor: '#394C6D',
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
    height: 100,
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
    marginVertical: 5,
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
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
    marginVertical: 20,
  },
  infoContainer: {
    flex: 8.8,
  },
  event: {
    flex: 1.2,
  },
  infoService: {
    marginHorizontal: 20,
  },
});
