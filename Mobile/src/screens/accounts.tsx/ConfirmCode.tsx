import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  GestureResponderEvent,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState, useEffect,useRef,RefObject} from 'react';
import {Formik} from 'formik';
import {useNavigation, useRoute} from '@react-navigation/native';
import sendVerificationCode from '../../hooks/useSendVerificationCode';
import sendResendVerificationCode from '../../hooks/useSendResendVerificationCode';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const ConfirmCode = () => {
  const [countdown, setCountdown] = useState(180);
  const [countdownMessage, setCountdownMessage] = useState('');
  const [newCode, setNewCode] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [codeDigits, setCodeDigits] = useState(['', '', '', '']);
  const textInputs = useRef([]);
  const navigation: any = useNavigation();
  const router = useRoute();
  const {code, refreshCode, resetPasswordToken}:any = router.params;
  useEffect(() => {
    let interval: any;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(prevCountdown =>
          prevCountdown > 0 ? prevCountdown - 1 : 0,
        );
      }, 1000);
    } else {
      setCountdownMessage('Mã xác thực hết hiệu lực');
    }
    return () => {
      clearInterval(interval);
    };
  }, [countdown]);
  const handleSubmit = async () => {
    const enteredCode = codeDigits.join('');
    let codeToVerify = newCode || code;
    try {
      const res = await sendVerificationCode({
        codeToken: codeToVerify,
        code: enteredCode,
      });
      if (res.status != 201) {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Lỗi',
          textBody: res.message,
        });
      } else {
        if(resetPasswordToken){
          navigation.navigate('NewPassword',{resetPasswordToken})
        }
        else{
          navigation.navigate('SignIn')
        }
      }
    } catch (error) {
        throw error
    }
  };
  const handleResendCode = async () => {
    if (isResending) {
      return;
    }
    setIsResending(true);
    try {
      const res = await sendResendVerificationCode({refreshCode: refreshCode});
      if (res.status != 201){
        Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Lỗi',
          textBody: res.message,
        });
      } else {
        setNewCode(res.code);
        setCountdown(180);
        setCountdownMessage('');
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: "Vui lòng kiểm tra email để lấy mã!",
        });
      }
    } catch (error) {
      throw error
    } finally {
      setIsResending(false);
    }
  };
  const handleChangeDigit = (index: number, digit: string) => {
    const newCode=[...codeDigits]
    newCode[index]=digit
    setCodeDigits(newCode)

    if (digit && index < codeDigits.length - 1) {
      textInputs.current[index + 1].focus();
    }
    else if (!digit && index > 0) {
      textInputs.current[index-1].focus();
      newCode[index] = '';
      setCodeDigits(newCode);
    }
  };
  return (
    <Formik initialValues={{code: ''}} onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.confirmContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>NHẬP MÃ XÁC THỰC</Text>
                </View>
                <View style={styles.spaceContainer}>
                  <View style={styles.code}>
                  {codeDigits.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={styles.inputCode}
                      enterKeyHint={'next'}
                      onChangeText={text => handleChangeDigit(index, text)}
                      ref={(input) => (textInputs.current[index] = input)}
                      value={digit}
                      keyboardType="numeric"
                      maxLength={1}
                    />
                  ))}
                  </View>
                </View>
                <View style={styles.timeout}>
                  <Text style={styles.timeInput}>
                    {countdownMessage ||
                      `Mã sẽ hết hạn trong vòng ${Math.floor(countdown / 60)}:${
                        countdown % 60 < 10 ? '0' : ''
                      }${countdown % 60}  phút`}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleResendCode(refreshCode)}>
                    <Text style={styles.sentBack}>Gửi lại mã</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.buttonConfirm}
                  onPress={(e:GestureResponderEvent)=>handleSubmit()}>
                  <Text style={styles.textConfirm}>XÁC THỰC</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}>
              <ImageBackground
                source={require('../../assets/Confirm/imgFooter.png')}
                resizeMode="cover"
                style={styles.bgImg}>
                <Image
                  source={require('../../assets/Confirm/imgDemo.png')}></Image>
              </ImageBackground>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ConfirmCode;

const styles = StyleSheet.create({
  confirmContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  body: {
    flex: 2,
  },
  footer: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#394C6D',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleCode: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputCode: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    width:40,
    marginHorizontal:15,
    padding:15
  },
  spaceContainer: {
    alignItems: 'center',
    marginTop: 80,
    flexDirection: 'row',
    width: '100%',
    justifyContent:"center"
  },
  code:{
    alignItems:"center",
    flexDirection:"row",
    
  },
  timeout:{
    alignItems:"center",
    justifyContent:"center"
  },
  timeInput: {
    fontSize: 15,
    marginTop: 10,
  },
  sentBack: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  container: {
    marginTop: 40,
  },
  buttonConfirm: {
    width: '80%',
    backgroundColor: '#394C6D',
    borderRadius: 10,
    height: 60,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  textConfirm: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
