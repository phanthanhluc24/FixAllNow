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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
const FormBookSchedule = () => {
  const navigation= useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({type}, selectedDate): any => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
    setDate(currentDate);
  };
  const toggleTimepicker = () => {
    setShowTimePicker(!showTimePicker);
  };
  const onChangeTime = ({type}, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
    setTime(currentTime);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={values => {
        setTimeout(() => {
          let account = {
            email: values.email,
            password: values.password,
          };
          handleInfo(account);
          // console.log(account);
        }, 100);
      }}>
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
                <View>
                  {showPicker && (
                    <DateTimePicker
                      mode="date"
                      display="spinner"
                      value={selectedDate}
                      onChange={onChange}
                    />
                  )}
                  {!showPicker && (
                    <Pressable onPress={toggleDatepicker}>
                      <TextInput
                        style={styles.inputDate}
                        enterKeyHint={'next'}
                        onChangeText={setDate}
                        // onBlur={handleBlur('date')}
                        value={date.toLocaleDateString('vi-VN')}
                        placeholder="Chọn ngày hẹn"
                        editable={false}
                      />
                    </Pressable>
                  )}
                </View>
                <View>
                  {showTimePicker && (
                    <DateTimePicker
                      mode="time"
                      display="spinner"
                      value={selectedTime}
                      onChange={onChangeTime}
                    />
                  )}
                  {!showTimePicker && (
                    <Pressable onPress={toggleTimepicker}>
                      <TextInput
                        style={styles.inputDate}
                        enterKeyHint={'next'}
                        onChangeText={setTime}
                        // onBlur={handleBlur('time')}
                        value={time.toLocaleTimeString('vi-VN')}
                        placeholder="Chọn thời gian"
                        editable={false}
                      />
                    </Pressable>
                  )}
                </View>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    onChangeText={handleChange('full_name')}
                    onBlur={handleBlur('full_name')}
                    value={values.full_name}
                    placeholder="Họ và tên"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    onChangeText={handleChange('number_phone')}
                    onBlur={handleBlur('number_phone')}
                    value={values.number_phone}
                    placeholder="Số điện thoại"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                    placeholder="Địa chỉ"
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.inputDate}
                    enterKeyHint={'next'}
                    onChangeText={handleChange('demobug')}
                    onBlur={handleBlur('demobug')}
                    value={values.demobug}
                    placeholder="Mô tả vấn đề hư hỏng thiết bị"
                  />
                </View>
              </View>
              <View style={styles.footer}>
                <Image
                  style={styles.imgFooter}
                  source={require('../../assets/Form/book.png')}
                />
                <TouchableOpacity style={styles.bgButton} onPress={()=>navigation.navigate('ConfirmInforBooking')}>
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
  nameBook: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  imgFooter: {
    width: '50%',
  },
  bgButton: {
    backgroundColor: '#FCA234',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 10,
    borderWidth: 2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -20,
  },
  boxInput: {
    marginVertical: 30,
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
    backgroundColor: 'white',
    borderColor: '#FCA234',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    paddingLeft: 15,
    color: '#000000',
  },
});
