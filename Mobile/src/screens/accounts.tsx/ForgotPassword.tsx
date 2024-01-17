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
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
const ForgotPassword = () => {
  return (
    <Formik initialValues={{code: ''}} onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.confirmContainer}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.body}>
            <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>XÁC THỰC TÀI KHOẢN</Text>
            </View>
            <View style={styles.spaceContainer}>
                <Text style={styles.titles}>Vui lòng nhập Email!</Text>
                <TextInput
                  style={styles.inputCode}
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                  value={values.code}
                />
                <TouchableOpacity
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
                <ImageBackground source={require('../../assets/ForgotPassword/backgrounds.png')}
              resizeMode="cover" style={styles.bgImgs}>
                <Image
                source={require('../../assets/ForgotPassword/demoFg.png')} style={styles.demo}></Image>
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
    confirmContainer: {
        flex: 1,
        backgroundColor: '#FCA234',
      },
      body: {
        flex: 1,
        position:"absolute",
        zIndex:100,
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
      },bgImgs: {
        width: '70%',
        height: '70%',
        alignItems: 'center',
        marginTop:"90%",
        marginRight:"35%"
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
      titles:{
        fontSize:15,
        color:"white",
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
        borderWidth:1,
        width:"80%"
      },
      spaceContainer:{
        alignItems:"center",
        marginTop:40,

      },
      timeInput:{
        fontSize:15,
        marginTop:10
      },
      sentBack:{
        fontSize:15,
        fontWeight:"bold",
        color:"#0000ff",
      },
      container:{
        marginTop:60
      },
      buttonConfirm: {
        width: '80%',
        backgroundColor: '#394C6D',
        borderRadius: 10,
        height: 60,
        marginHorizontal:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
      },
      textConfirm: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      },
      demo:{
        marginTop:"60%",
        marginRight:"-60%"
      }
});
