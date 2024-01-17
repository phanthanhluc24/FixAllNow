import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation: any = useNavigation();
  const handleSubmit = () => {
    console.log('ok');
  };
  return (

    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
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
              <View style={styles.fromInput}>
                <View>
                  <Text style={styles.titleEmail}>Email</Text>
                  <TextInput
                    style={styles.inputEmail}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                <View style={styles.space}>
                  <Text style={styles.titlePassword}>Mật Khẩu</Text>
                  <TextInput
                    style={styles.inputPassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                <View style={styles.confirmInfo}>
                  <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.titlefg}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                  
                  <View style={styles.confirmcreate}>
                    <Text style={styles.titlefgs}>Chưa có tài khoản!</Text>
                    <Text
                      style={styles.createacc}
                      onPress={() => navigation.navigate('SelectRole')}>
                      Đăng ký
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.buttonLogin}>
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
    position:"absolute",
    zIndex:100,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 70,
    marginTop:"40%"
  },
  signinFooter: {
    
  },
  imgHeader: {
    marginLeft: 20,
  },
  Imgfooter: {
    marginRight: 20,
    marginTop:90
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
  },
  space: {
    marginTop: 20,
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
  },
  confirmInfo: {
    marginTop: 20,
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
    position: 'absolute',
    marginTop: '100%',
    zIndex: 3,
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
});
