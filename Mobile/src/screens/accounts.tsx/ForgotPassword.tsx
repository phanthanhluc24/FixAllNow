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
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {ForgotPasswordSchema} from './ValidationForgetPassword';
import useVerificationEmail from '../../hooks/useVerificationEmail';
const ForgotPassword = () => {
  const [errorServer, setErrorServer] = useState(null);
  const passwordRef: any = useRef();
  const navigation: any = useNavigation();
  const handleSubmitVerification = async (values: {email: any}) => {
    await useVerificationEmail(values.email).then((res: any) => {
      if (res.status != 201) {
        setErrorServer(res.message);
      } else {
        navigation.navigate('ConfirmCode', {
          code: res.code,
          refreshCode: res.refreshCode,
          resetPasswordToken: res.resetPasswordToken,
        });
      }
    });
  };
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={handleSubmitVerification}
      validationSchema={ForgotPasswordSchema}>
      {({errors, touched, handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.confirmContainer}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <View style={styles.body}>
              <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>XÁC THỰC TÀI KHOẢN</Text>
                </View>
                <View style={styles.spaceContainer}>
                  <Text style={styles.errorText}>{errorServer}</Text>
                  <View style={styles.heightInput}>
                    <TextInput
                      style={styles.inputCode}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      enterKeyHint={'done'}
                      placeholder="Vui lòng nhập email"
                    />
                  </View>
                  {errors.email && touched.email ? (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  ) : null}
                  <TouchableOpacity
                    onPress={(e: GestureResponderEvent) => handleSubmit()}
                    style={styles.buttonConfirm}>
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
                <ImageBackground
                  source={require('../../assets/ForgotPassword/backgrounds.png')}
                  resizeMode="cover"
                  style={styles.bgImgs}>
                  <Image
                    source={require('../../assets/ForgotPassword/demoFg.png')}
                    style={styles.demo}></Image>
                </ImageBackground>
              </ImageBackground>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
    marginHorizontal: 20,
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
  bgImgs: {
    width: '70%',
    height: '70%',
    alignItems: 'center',
    marginTop: '90%',
    marginRight: '35%',
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
    fontSize: 20,
    color: '#394C6D',
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
    width: '100%',
    paddingLeft: 15,
  },
  spaceContainer: {
    marginTop: 40,
  },
  heightInput: {
    flexDirection: 'row',
    height: 70,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
    marginTop: 60,
  },
  buttonConfirm: {
    width:'75%',
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  demo: {
    marginTop: '60%',
    marginRight: '-60%',
  },
});
