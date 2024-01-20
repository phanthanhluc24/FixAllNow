import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import { Signup_Schema } from './Validation_Signup';
interface Infocus {
  role: string;
  job: string | null;
  full_name: string;
  email: string;
  number_phone: number;
  address: string | null;
  password: string;
}
const SignUp = () => {
  const navigation: any = useNavigation();
  return (
    <Formik
      initialValues={{number_phone: '', full_name: '', email: '', password: ''}}
      validationSchema={Signup_Schema}
      onSubmit={values => {
        setTimeout(() => {
          let data = {
            full_name: values.full_name,
            number_phone: values.number_phone,
            email: values.email,
            password: values.password,
          };
          // handleSinup(data);
        }, 200);
      }}>
      {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.signUpContainer}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}></TouchableWithoutFeedback>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.headerImg}>
              <Image
                source={require('../../assets/SignUp/headers.png')}
                style={styles.imgHeader}
              />
            </View>
            <View style={styles.signupBody}>
              <View style={styles.titleSignup}>
                <Text style={styles.title}>ĐĂNG KÝ</Text>
              </View>
              <View style={styles.fromInput}>
                <View>
                  <Text style={styles.titleEmail}>Họ và tên</Text>
                  <TextInput
                    style={styles.inputEmail}
                    onChangeText={handleChange('full_name')}
                    onBlur={handleBlur('full_name')}
                    value={values.full_name}
                  />
                  {errors.full_name && touched.full_name ? (
                    <Text style={styles.errorText}>* {errors.full_name}</Text>
                  ) : null}
                </View>
                <View style={styles.space}>
                  <Text style={styles.titleEmail}>Email</Text>
                  <TextInput
                    style={styles.inputEmail}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.errorText}>* {errors.email}</Text>
                  ) : null}
                </View>
                <View style={styles.space}>
                  <Text style={styles.titleEmail}>Số điện thoại</Text>
                  <TextInput
                    style={styles.inputEmail}
                    onChangeText={handleChange('number_phone')}
                    onBlur={handleBlur('number_phone')}
                    value={values.number_phone}
                  />
                  {errors.number_phone && touched.number_phone ? (
                    <Text style={styles.errorText}>
                      * {errors.number_phone}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.space}>
                  <Text style={styles.titlePassword}>Mật Khẩu</Text>
                  <TextInput
                    style={styles.inputPassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.errorText}>* {errors.password}</Text>
                  ) : null}
                </View>
                <View style={styles.confirmInfo}>
                  <View style={styles.confirmcreate}>
                    <Text style={styles.titlefg}>
                      Bạn đã có tài khoản chưa?
                    </Text>
                    <Text
                      style={styles.createAcc}
                      onPress={() => navigation.navigate('SignIn')}>
                      Đăng nhập
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.buttonLogin}>
                  <Text
                    style={styles.textLgoin}
                    onPress={() => navigation.navigate('ConfirmCode')}>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <TouchableWithoutFeedback />
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  signupBody: {
    flex: 14,
    justifyContent: 'center',
    width: '100%',
    marginTop: '30%',
    position: 'absolute',
    zIndex: 2,
  },
  headerImg: {
    flex: 1,
  },
  imgHeader: {
    marginRight: 20,
  },
  imgFooter: {
    marginLeft: '40%',
    height: 250,
  },
  title: {
    color: '#394C6D',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleSignup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fromInput: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  titleEmail: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputEmail: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
  },
  space: {
    marginTop: 20,
  },
  titlePassword: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputPassword: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
  },
  confirmInfo: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlefg: {
    color: '#394C6D',
    fontSize: 15,
  },
  confirmcreate: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  createAcc: {
    color: '#0000ff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#394C6D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 440,
    zIndex: 3,
    height: 60,
  },

  textLgoin: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
});
