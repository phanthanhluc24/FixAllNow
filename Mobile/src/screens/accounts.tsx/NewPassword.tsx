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
  import { useNavigation } from '@react-navigation/native';
  import React from 'react';
  import {Formik} from 'formik';

const NewPassword = () => {
    
  return (
    <Formik initialValues={{password: '',passwords:''}} onSubmit={values => console.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.confirmContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.body}>
          <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>MẬT KHẨU MỚI</Text>
          </View>
          <View style={styles.spaceForm}>
          <Text style={styles.titles}>Mật khẩu mới</Text>
          <View style={styles.spaceContainer}>
              
              <TextInput
                style={styles.inputCode}
                onChangeText={handleChange('passwords')}
                onBlur={handleBlur('passwords')}
                value={values.passwords}
              />
              
              
            </View>
            <Text style={styles.titles}>Xác thực mật khẩu mới</Text>
          <View style={styles.spaceContainer}>
              
              <TextInput
                style={styles.inputCode}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              
              
            </View>
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
                <Image source={require('../../assets/ForgotPassword/footerimg.png')} style={styles.demoImg}/>
          </ImageBackground>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )}
  </Formik>
  )
}

export default NewPassword

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
        fontSize:22,
        color:"#394C6D",
        marginHorizontal:40
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
        marginTop:100
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
        marginRight:"-60%",
      },
      spaceForm:{
        marginTop:50,
      },
      demoImg:{
        marginTop:"130%",
      }
})