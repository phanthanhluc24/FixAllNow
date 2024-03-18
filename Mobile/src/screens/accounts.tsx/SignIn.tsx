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
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import { SignupSchema } from './Validation';
import useSignin from '../../hooks/useSignin';
import { requestUserPermission } from '../../utils/notificationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
const SignIn = ({navigation}: any) => {
  const passwordRef: any = useRef();
  const {handleSignin, errorServer} = useSignin({navigation});
  const [tokenChecked, setTokenChecked] = useState(false);
  const isFocused = useIsFocused();
  const [deviceToken,setDeviceToken]=useState("")
  useEffect(()=>{
    requestUserPermission()
    getFcmToken()
  }, [])
  const getFcmToken = async () => {
    const token = await AsyncStorage.getItem("fcmToken")
    if (token) {
      setDeviceToken(token)
    }
  }
  useEffect(() => {
    const checkLogin = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        navigation.navigate('Root');
      } else {
        setTokenChecked(true);
      }
    };
    checkLogin();
  }, [isFocused]);
  if (!tokenChecked) {
    return null;
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        setTimeout(() => {
          let account = {
            email: values.email,
            password: values.password,
            deviceToken: deviceToken
          };
          handleSignin(account);
        }, 100);
      }}>
      {({ errors, touched, handleChange, handleBlur, values, handleSubmit }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.signInContainer}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.signinHeader}>
                <Image
                  source={require('../../assets/SignIn/header.png')}
                  style={styles.imgHeader}
                />
              </View>
              <View style={styles.signinBody}>
                <View style={styles.titleSignin}>
                  <Text style={styles.title}>Đăng nhập</Text>
                </View>
                <View style={styles.errorMessage}>
                  {errorServer != null && (
                    <Text style={styles.errorText}>* {errorServer}</Text>
                  )}
                </View>
                <View style={styles.fromInput}>
                  <View>
                    <Text style={styles.titleEmail}>Email</Text>
                    <TextInput
                      style={styles.inputEmail}
                      enterKeyHint={'next'}
                      onSubmitEditing={() => passwordRef.current?.focus()}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    ) : null}
                  </View>
                </View>
                <View style={styles.fromInput}>
                  <View style={styles.space}>
                    <Text style={styles.titlePassword}>Mật Khẩu</Text>
                    <TextInput
                      ref={passwordRef}
                      style={styles.inputPassword}
                      enterKeyHint={'done'}
                      secureTextEntry={true}
                      onSubmitEditing={() => passwordRef.current?.clear()}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    ) : null}
                  </View>
                </View>
                <View style={styles.fromInput}>
                  <View style={styles.confirmInfo}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ForgotPassword')}>
                      <Text style={styles.titlefg}>Quên mật khẩu?</Text>
                    </TouchableOpacity>

                    <View style={styles.confirmcreate}>
                      <Text style={styles.titlefgs}>Chưa có tài khoản! </Text>
                      <Text
                        style={styles.createacc}
                        onPress={() => navigation.navigate('SelectRole')}>
                        Đăng ký
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={(e: GestureResponderEvent) => handleSubmit()}>
                    <Text style={styles.textLgoin}>Đăng nhập</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.signinFooter}>
                <Image
                  source={require('../../assets/SignIn/footer.png')}
                  style={styles.Imgfooter}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  signinHeader: {
    marginLeft: 40,
  },
  signinBody: {
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 70,
    marginTop: '40%',
  },
  signinFooter: {},
  imgHeader: {
    marginLeft: 20,
  },
  Imgfooter: {
    marginRight: 20,
    marginTop: 150,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  titleSignin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fromInput: {
    marginHorizontal: 40,
    marginTop: 15,
    height: 110
  },
  fromInputs: {
    marginHorizontal: 40,
    marginTop: 5,
    height: 110
  },
  errorMessage: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  titleEmail: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputEmail: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    paddingLeft: 15,
  },
  space: {
    marginTop: 1,
    height: 70
  },
  titlePassword: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputPassword: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    paddingLeft: 15,
  },
  confirmInfo: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlefg: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  titlefgs: {
    color: '#394C6D',
    fontSize: 15,
  },
  confirmcreate: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  createacc: {
    color: '#0000ff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#394C6D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 60,
  },
  form: {
    position: 'absolute',
  },
  textLgoin: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
});
