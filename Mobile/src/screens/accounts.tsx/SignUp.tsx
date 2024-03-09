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
  Alert
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Signup_Schema} from './Validation_Signup';
import useSignup from '../../hooks/useSignup';
interface Register {
  number_phone: number | null;
  full_name: string;
  email: string;
  password: string;
}
const SignUp = () => {
  const [errorServer,setErrorServer]=useState(null);
  const [phoneNumberEntered, setPhoneNumberEntered] = useState(false);
 
  const route = useRoute();
  const {selectedRole, _id, address}: any = route.params || {};
  const navigation: any = useNavigation();
  const [error, setError] = useState('');
  const [register, setRegister] = useState<Register>({
    number_phone: null,
    full_name: '',
    email: '',
    password: '',
  });
  const [inputErrors, setInputErrors] = useState({
    full_name: false,
    email: false,
    number_phone: false,
    password: false,
  });
  const handleInputChange = (field: string, text: string) => () => {
    setRegister({...register, [field]: text});
    setInputErrors({...inputErrors, [field]: false});
    if (field === 'number_phone' && text.length === 10) {
      setPhoneNumberEntered(true);
    } else {
      setPhoneNumberEntered(false);
    }
  };
  const repairmanRegister = {
    full_name: register.full_name,
    email: register.email,
    number_phone: register.number_phone,
    password: register.password,
    address: address,
    role: selectedRole,
    category_id: _id,
  };
  const handleSubmit = async () => {
    let isValid = true;
  const newInputErrors = {...inputErrors};
  if (!register.full_name) {
    newInputErrors.full_name = true;
    isValid = false;
  }
  if (!register.email) {
    newInputErrors.email = true;
    isValid = false;
  }
  if (!register.number_phone) {
    newInputErrors.number_phone = true;
    isValid = false;
  }
  if (!register.password) {
    newInputErrors.password = true;
    isValid = false;
  }

  setInputErrors(newInputErrors);
  if (isValid) {
    try {
      await useSignup(repairmanRegister)
      .then((res:any)=>{
        if(res.status!=201){
          setErrorServer(res.message)
        }else{
          navigation.navigate('ConfirmCode', {code:res.code, refreshCode:res.refreshCode});
        }
      })
    } catch (error) {
    }
  }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.signUpContainer}>
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
          <Text style={styles.error}>{!phoneNumberEntered && errorServer}</Text>
          <View style={styles.fromInput}>
            <View style={styles.space}>
              <Text style={styles.titleEmail}>Họ và tên</Text>
              <TextInput
                style={styles.inputEmail}
                onChangeText={text => handleInputChange('full_name', text)()}
              />
              {inputErrors.full_name && <Text style={styles.errorMessage}>* Họ tên không bỏ trống</Text>}
            </View>
            <View style={styles.space}>
              <Text style={styles.titleEmail}>Email</Text>
              <TextInput
                style={styles.inputEmail}
                onChangeText={text => handleInputChange('email', text)()}
              />
              {inputErrors.email && <Text style={styles.errorMessage}>* Email không bỏ trống</Text>}
            </View>
            <View style={styles.space}>
              <Text style={styles.titleEmail}>Số điện thoại</Text>
              <TextInput
                style={styles.inputEmail}
                onChangeText={text => handleInputChange('number_phone', text)()}
              />
              {inputErrors.number_phone && <Text style={styles.errorMessage}>* Số điện thoại không bỏ trống</Text>}
            </View>
            <View style={styles.space}>
              <Text style={styles.titlePassword}>Mật Khẩu</Text>
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={true}
                onChangeText={text => handleInputChange('password', text)()}
              />
              {inputErrors.password && <Text style={styles.errorMessage}>* Mật khẩu không bỏ trống</Text>}
            </View>
            <View style={styles.confirmInfo}>
              <View style={styles.confirmcreate}>
                <Text style={styles.titlefg}>Bạn đã có tài khoản chưa?</Text>
                <Text
                  style={styles.createAcc}
                  onPress={() => navigation.navigate('SignIn')}>
                  Đăng nhập
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}>
              <Text style={styles.textLgoin}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  errorMessage:{
    color:"red",
    fontWeight:"bold"
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  signupBody: {
    flex: 14,
    justifyContent: 'center',
    width: '100%',
    marginTop: '10%',
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
    paddingLeft: 15,
  },
  space: {
    height:110
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
    paddingLeft: 15,
  },
  confirmInfo: {
    marginTop: 10,
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
    marginTop: 500,
    zIndex: 3,
    height: 60,
  },

  textLgoin: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
  error:{
    fontWeight: 'bold',
    color:"red",
    paddingLeft: 40,
    marginTop:45
  }
});
