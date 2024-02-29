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
} from 'react-native';
import React, {useState, Fragment, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import useEditInfoCurrentUser from '../../hooks/useEditInfoCurrentUser';
const EditInfoCurrentUser = ({route}: any) => {
  const {user} = route.params;
  console.log(user);
  const [numberPhone, setNumberPhone] = useState(user?.number_phone.toString());
  const [fullName, setFullName] = useState(user?.full_name);
  const [email, setEmail] = useState(user?.email);
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const handleInputChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'full_name':
        setFullName(value);
        break;
      case 'number_phone':
        setNumberPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (user?.image) {
      setSingleFile({uri: user.image});
    }
  }, [user]);
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('res :', res);

      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);

      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const {
    control,
    handleSubmit,
    // getValues,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {
    const formData = {
      full_name: fullName,
      number_phone: numberPhone,
      email: email,
      singleFile: singleFile, 
    };
    
    useEditInfoCurrentUser(formData);
  };
  const handleCancle = () => {
    console.log('Hủy');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
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
                  defaultValue={fullName}
                />
              )}
              name="full_name"
              rules={{required: 'Tên không được bỏ trống'}}
              defaultValue={fullName}
            />
            {/* {errors.name && (
            <Text style={{color: 'red'}}>{errors.name.message}</Text>
          )} */}
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
                    defaultValue={numberPhone}
                  />
                </View>
              )}
              name="number_phone"
              rules={{required: 'Tên không được bỏ trống'}}
              defaultValue={numberPhone}
            />
            {/* {errors.email && (
            <Text style={{color: 'red'}}>{errors.email.message}</Text>
          )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Email của bạn</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    handleInputChange('email', text); // Cập nhật giá trị email
                  }}
                  value={value}
                  defaultValue={email}
                />
              )}
              name="email"
              rules={{required: 'Email không được bỏ trống'}}
              defaultValue={email} 
            />
            {/* {errors.email && (
            <Text style={{color: 'red'}}>{errors.email.message}</Text>
          )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh của bạn</Text>
            {!!singleFile || (
              <View style={styles.selectedImage}>
                <TouchableOpacity onPress={selectFile} activeOpacity={0.5}>
                  <View style={styles.imageView}>
                    <Entypo name="camera" size={50} color="#FCA234" />
                  </View>
                </TouchableOpacity>

                {/* {errors.email && (
          
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
              </View>
            )}
            {singleFile && (
              <View style={styles.selectedImage}>
                <Image
                  source={{uri: singleFile?.uri}}
                  style={styles.imageStyle}></Image>
                <View style={{position: 'absolute'}}>
                  <TouchableOpacity onPress={selectFile}>
                    <View style={styles.imageViews}>
                      <Entypo name="camera" size={25} color="#394C6D" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
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
                  onPress={
                    handleSubmit(onSubmit)}>
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
    marginTop: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
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
    marginTop: 15,
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
  },
  infoEdit: {
    color: '#FCA234',
    fontSize: 15,
    fontWeight: 'bold',
  },
  eventSubmit: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formEdit: {
    flex: 9,
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
