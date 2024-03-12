import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
  GestureResponderEvent,
  Pressable,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const FormBookSchedule = ({route}: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const {serviceInfo} = route.params;
  const navigation: any = useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const currentDate = new Date();

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({type}: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
    setDate(currentDate);
  };
  const toggleTimepicker = () => {
    setShowTimePicker(!showTimePicker);
  };
  const onChangeTime = ({type}: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
    setTime(currentTime);
  };
  const handleSubmitInfoBooking = async (values: {
    
    selectedDate: Date;
    selectedTime: any;
    address: string;
    demobug: string;
  }
  
  ) => {
    setLoading(true);
    setSubmitted(true);
    if (!selectedDate || !selectedTime || !values.address || !values.demobug) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      setLoading(false);
      return;
    }
    if (
      selectedDate.getFullYear() < currentDate.getFullYear() ||
      (selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() < currentDate.getMonth()) ||
      (selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getDate() < currentDate.getDate())
    ) {
      setError('Vui lòng chọn ngày từ ngày hiện tại trở đi!');
      setLoading(false);
      return;
    }
    if (
      selectedDate.getFullYear() === currentDate.getFullYear() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getDate() === currentDate.getDate() &&
      selectedTime.getTime() < currentDate.getTime()
    ) {
      setError('Vui lòng chọn giờ từ giờ hiện tại trở đi!');
      setLoading(false);
      return;
    }
    if (/^\d+$/.test(values.address)) {
      // Là toàn bộ số
      setError('Địa chỉ không hợp lệ!');
      setLoading(false);
      return;
    }
    if (/^\d+$/.test(values.address)) {
      // Là toàn bộ khoảng trắng
      setError('Địa chỉ không hợp lệ!');
      setLoading(false);
      return;
  }
  if (/^\d+$/.test(values.demobug)) {
    // Là toàn bộ số
    setError('Mô tả tình trạng không hợp lệ!');
    setLoading(false);
    return;
  }
  if (values.demobug.trim().length === 0) {
    setError('Mô tả tình trạng không hợp lệ!');
    setLoading(false);
    return;
  }

    else {
      setError('');
      setLoading(true);
      const infoBooking = {
        infoServiceBooking: serviceInfo,
        date: selectedDate.toLocaleDateString('vi-VN'),
        time: selectedTime.toLocaleTimeString('vi-VN'),
        address: values.address,
        bugService: values.demobug,
      };
      navigation.navigate('ConfirmInforBooking', {infoBooking: infoBooking});
    }
  };
  return (
    <Formik
      initialValues={{
        selectedDate: '',
        selectedTime: '',
        address: '',
        demobug: '',
      }}
      onSubmit={handleSubmitInfoBooking}>
      {({errors, touched, handleChange, handleBlur, values, handleSubmit}) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.editInfoCurrentUserContainer}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={loading}
              onRequestClose={() => {
                setLoading(false);
              }}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={40} color="#FCA234" />
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.form}>
              <View style={styles.styleTitle}>
                <Text style={styles.titleForm}>
                  VUI LÒNG NHẬP THÔNG TIN BÊN DƯỚI
                </Text>
              </View>

              <View style={styles.boxInput}>
                <View style={{height: 25}}>
                  {submitted && error !== '' && (
                    <Text style={styles.messageError}>{error}</Text>
                  )}
                </View>
                <TouchableOpacity
                  style={styles.inputDate}
                  onPress={toggleDatepicker}>
                  <TextInput
                    style={{color: '#000000', width: '80%'}}
                    enterKeyHint={'next'}
                    value={date.toLocaleDateString('vi-VN')}
                    placeholder="Chọn ngày hẹn"
                    placeholderTextColor={'#000000'}
                    editable={false}
                  />
                  {showPicker && (
                    <DateTimePicker
                      mode="date"
                      display="spinner"
                      value={selectedDate}
                      onChange={onChange}
                    />
                  )}
                  <MaterialIcons
                    style={styles.clock}
                    name="date-range"
                    size={30}
                    color="#FCA234"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.inputDate}
                  onPress={toggleTimepicker}>
                  <TextInput
                    style={{color: '#000000', width: '80%'}}
                    enterKeyHint={'next'}
                    value={time.toLocaleTimeString('vi-VN')}
                    placeholder="Chọn giờ hẹn"
                    placeholderTextColor={'#000000'}
                    editable={false}
                  />
                  {showTimePicker && (
                    <DateTimePicker
                      mode="time"
                      display="spinner"
                      value={selectedTime}
                      onChange={onChangeTime}
                    />
                  )}
                  <AntDesign
                    style={styles.clock}
                    name="clockcircle"
                    size={30}
                    color="#FCA234"
                  />
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                    placeholder="* Địa chỉ"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    numberOfLines={4}
                    multiline={true}
                    onChangeText={handleChange('demobug')}
                    onBlur={handleBlur('demobug')}
                    value={values.demobug}
                    placeholder="* Mô tả vấn đề hư hỏng thiết bị"
                  />
                </View>
              </View>
              <View style={styles.footer}>
                <Image
                  style={styles.imgFooter}
                  source={require('../../assets/Form/book.png')}
                />
                <TouchableOpacity
                  style={styles.bgButton}
                  onPress={handleSubmit}>
                  <Text style={styles.nameBook}>Đặt lịch</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};
export default FormBookSchedule;
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
  messageError: {
    color: 'red',
    fontWeight: 'bold',
  },
  clock: {
    marginHorizontal: 20,
  },
  nameBook: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  imgFooter: {
    width: '50%',
    marginTop: 40,
  },
  bgButton: {
    backgroundColor: '#FCA234',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -20,
  },
  boxInput: {
    marginVertical: 10,
    height: 245,
  },
  styleTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleForm: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  form: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  editInfoCurrentUserContainer: {
    flex: 1,
    backgroundColor: '#394C6D',
  },
  inputDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: '#FCA234',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    paddingLeft: 15,
    color: '#000000',
    width: '100%',
  },
});
