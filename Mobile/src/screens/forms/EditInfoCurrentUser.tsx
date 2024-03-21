import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal
} from 'react-native';
import React, {useState, Fragment, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import useEditInfoCurrentUser from '../../hooks/useEditInfoCurrentUser';
import RNRestart from 'react-native-restart';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const EditInfoCurrentUser = ({route}: any) => {
  const [loading, setLoading] = useState(false);
  const navigation: any = useNavigation();
  const {user} = route.params;
  const [number_phone, setNumberPhone] = useState(
    user?.number_phone.toString(),
  );
  const [full_name, setFullName] = useState(user?.full_name);

  const handleInputChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'full_name':
        setFullName(value);
        break;
      case 'number_phone':
        setNumberPhone(value);
        break;
      default:
        break;
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const hasLettersAndNoNumbers = (value: string) => {
    return /[a-zA-Z]/.test(value) && !/\d/.test(value);
  };
  const hasNumbersOnly = (value: string) => {
    return /^\d+$/.test(value);
  };
  const onSubmit =async () => {
    const formData = {
      full_name: full_name,
      number_phone: 0+number_phone,
    };

    try {
      setLoading(true);
      const editSuccess = await useEditInfoCurrentUser(formData);
      if (editSuccess) {
        setLoading(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: "Thông tin người dùng thay đổi thành công!",
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'Profile'}],
        });
        navigation.navigate('Profile')
      } else {
        console.error('Lỗi khi edit thông tin người dùng');
      }
    } catch (error) {
      console.error('Lỗi khi edit thông tin người dùng:', error);
      setLoading(false);
    }
  };
  const handleCancle = () => {
    navigation.navigate('Profile');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
           <Modal
          animationType="fade"
          transparent={true}
          visible={loading}
          onRequestClose={() => {
            setLoading(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={40} color="#FCA234" />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.formEdit}>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Tên của bạn </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    handleInputChange('full_name', text);
                  }}
                  value={value}
                  defaultValue={full_name}
                />
              )}
              name="full_name"
              rules={{
                required: 'Tên không được bỏ trống',
                validate: value =>
                  hasLettersAndNoNumbers(value) || 'Tên không hợp lệ',
              }}
              defaultValue={full_name}
            />
            {errors.full_name && (
              <Text style={{color: 'red'}}>{errors.full_name.message}</Text>
            )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Số điện thoại</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <View style={styles.inputInfo}>
                  <Text>(+84)</Text>
                  <TextInput 
                    onBlur={onBlur}
                    onChangeText={text => {
                      onChange(text);
                      handleInputChange('number_phone', text);
                    }}
                    value={value}
                    defaultValue={number_phone}
                  />
                </View>
              )}
              name="number_phone"
              rules={{
                required: 'Số điện thoại không được bỏ trống',
                minLength: {
                  value: 9,
                  message: 'Số điện thoại không được nhỏ hơn 9',
                },
                maxLength:{
                  value: 9,
                  message: 'Số điện thoại không được lớn hơn 9',
                },
                validate: value => hasNumbersOnly(value) || 'Số điện thoại chỉ được chứa số'
              }}
              defaultValue={number_phone}
            />

            {errors.number_phone && (
              <Text style={{color: 'red'}}>{errors.number_phone.message}</Text>
            )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Email của bạn</Text>
            <View style={styles.formEmail}>
            <Text style={styles.email}>{user?.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventSubmit}>
          <View style={styles.buttonChoose}>
            <View style={styles.buttonNow}>
              <View style={styles.button1}>
                <TouchableOpacity style={styles.bookNow} onPress={handleCancle}>
                  <Text style={styles.books}>Hủy</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button1}>
                <TouchableOpacity
                  style={styles.book}
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.books}>Cập nhật</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default EditInfoCurrentUser;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  formEmail:{
    backgroundColor:"white",
    height:50,
    borderColor: '#FCA234',
    borderRadius: 10,
    borderWidth:1,
    marginTop:5,
    justifyContent:"center",

  },
  email: {
    fontSize: 15,
    padding: 10,
    color: 'black',
  },
  imageViews: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#394C6D',
    backgroundColor: '#FCA234',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 140,
    marginTop: 140,
  },
  selectedImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageView: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#FCA234',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookNow: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  books: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  part: {
    marginVertical: 5,
    height: 100,
  },
  infoEdit: {
    color: '#FCA234',
    fontSize: 15,
    fontWeight: 'bold',
  },
  eventSubmit: {
    flex: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formEdit: {
    flex: 3,
    marginVertical: 20,
  },
  container: {
    backgroundColor: '#394C69',
    flex: 1,
    paddingHorizontal: 20,
  },
  inputInfo: {
    backgroundColor: 'white',
    borderColor: '#FCA234',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    paddingLeft: 15,
    color: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
});
