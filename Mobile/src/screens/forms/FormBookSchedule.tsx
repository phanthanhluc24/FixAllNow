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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const FormBookSchedule = ({route}: any) => {
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
    selectedDate: string;
    selectedTime: string;
    address: string;
    demobug: string;
  }) => {
    setSubmitted(true);
    if (!selectedDate || !selectedTime || !values.address || !values.demobug) {
      setError('Vui lòng nhập đầy đủ thông tin!');
    } else {
      setError('');
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
                <Pressable style={styles.inputDate}>
                  <TextInput
                    style={{color: '#000000'}}
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
                    onPress={toggleDatepicker}
                  />
                </Pressable>
                <Pressable style={styles.inputDate}>
                  <TextInput
                    style={{color: '#000000'}}
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
                    onPress={toggleTimepicker}
                  />
                </Pressable>
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
                  onPress={() => handleSubmit()}>
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
    marginTop:40
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
  },
});
