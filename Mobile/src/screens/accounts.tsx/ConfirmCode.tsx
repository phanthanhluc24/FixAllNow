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
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {useNavigation, useRoute} from '@react-navigation/native';
import sendVerificationCode from '../../hooks/useSendVerificationCode';
const ConfirmCode = () => {
  const [countdown, setCountdown] = useState(180);
  const [countdownMessage, setCountdownMessage] = useState('');
  const navigation: any = useNavigation();
  const router = useRoute();
  const {code}: any = router.params;
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
      if (countdown === 0) {
        Alert.alert('Mã xác thực hết hiệu lực');
      }
    };
  }, [countdown]);
  const handleSubmit = async (values: {code: string}) => {
    console.log(code);
    await sendVerificationCode({codeToken: code, code: values.code}).then(
      res => {
        if (res.status != 201) {
          Alert.alert(res.message);
        } else {
          navigation.navigate('Home');
        }
      },
    );
  };
  return (
    <Formik initialValues={{code: ''}} onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.confirmContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>NHẬP MÃ XÁC THỰC</Text>
                </View>
                <View style={styles.spaceContainer}>
                  <TextInput
                    style={styles.inputCode}
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                  />
                  <Text style={styles.timeInput}>
                    {countdownMessage ||
                      `Mã sẽ hết hạn trong vòng ${Math.floor(countdown / 60)}:${countdown % 60 < 10 ? '0' : ''}${countdown % 60}  phút`}
                  </Text>
                  <Text style={styles.sentBack}>Gửi lại mã</Text>
                  <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={handleSubmit}>
                    <Text style={styles.textConfirm}>XÁC THỰC</Text>
                  </TouchableOpacity>
                </View>
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
    width: '80%',
  },
  spaceContainer: {
    alignItems: 'center',
    marginTop: 80,
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
