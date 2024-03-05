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
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import useResetNewPassword from '../../hooks/useResetNewPassword';
import {NewPasswordSchema} from './ValidationNewPassword';
const NewPassword = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const passwordRef: any = useRef();
  const navigation: any = useNavigation();
  const route = useRoute();
  const {resetPasswordToken}: any = route.params;
  const handleResetSubmit = async (values: {
    newpassword: string;
    confirmpassword: string;
  }) => {
    const newPassword = {
      tokenPassword: resetPasswordToken,
      newPassword: values.newpassword,
      confirmPassword: values.confirmpassword,
    };
    await useResetNewPassword(newPassword)
      .then((res: any) => {
        if (res.status !== 201) {
          setErrorMessage(res.message);
        } else {
          navigation.navigate('SignIn');
        }
      })
      .catch(error => {
      });
  };
  return (
    <Formik
      initialValues={{newpassword: '', confirmpassword: ''}}
      validationSchema={NewPasswordSchema}
      onSubmit={handleResetSubmit}>
      {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.confirmContainer}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>MẬT KHẨU MỚI</Text>
                </View>
                <View style={styles.spaceForm}>
                  <View style={{height:20}}>
                {errorMessage ? (
                  <Text style={styles.errorMessage}>{errorMessage}</Text>
                ) : null}
                </View>
                  <Text style={styles.titles}>Mật khẩu mới</Text>
                  <View style={styles.spaceContainer}>
                    <TextInput
                      style={styles.inputCode}
                      onChangeText={handleChange('newpassword')}
                      enterKeyHint={'next'}
                      secureTextEntry={true}
                      onSubmitEditing={() => passwordRef.current?.focus()}
                      onBlur={handleBlur('newpassword')}
                      value={values.newpassword}
                    />
                    {errors.newpassword && touched.newpassword ? (
                      <Text style={styles.errorText}>
                        * {errors.newpassword}
                      </Text>
                    ) : null}
                  </View>
                  <Text style={styles.titles}>Xác thực mật khẩu mới</Text>
                  <View style={styles.spaceContainer}>
                    <TextInput
                      style={styles.inputCode}
                      secureTextEntry={true}
                      onChangeText={handleChange('confirmpassword')}
                      onBlur={handleBlur('confirmpassword')}
                      value={values.confirmpassword}
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (
                      <Text style={styles.errorText}>
                        * {errors.confirmpassword}
                      </Text>
                    ) : null}
                  </View>
                  <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={(e: GestureResponderEvent) => handleSubmit()}>
                    <Text style={styles.textConfirm}>XÁC THỰC</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <ImageBackground
                source={require('../../assets/ForgotPassword/background.png')}
                resizeMode="cover"
                style={styles.bgImg}>
                <Image
                  source={require('../../assets/ForgotPassword/footerimg.png')}
                  style={styles.demoImg}
                />
              </ImageBackground>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
export default NewPassword;

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
   fontWeight:"bold",
    marginTop: 8,
    marginHorizontal:40,
    height:40
  },  
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
  confirmContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  body: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    width: '100%',
  },
  footer: {
    flex: 15,
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
  titles: {
    fontSize: 22,
    color: '#394C6D',
    marginHorizontal: 40,
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
    paddingLeft: 15,
  },
  spaceContainer: {
    alignItems: 'center',
    height:90
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
    marginTop: 70,
  },
  buttonConfirm: {
    width: '80%',
    backgroundColor: '#394C6D',
    borderRadius: 10,
    height: 60,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textConfirm: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  demo: {
    marginTop: '60%',
    marginRight: '-60%',
  },
  spaceForm: {
    marginTop: 10,
    height:300
  },
  demoImg: {
    marginTop: '130%',
  },
});
