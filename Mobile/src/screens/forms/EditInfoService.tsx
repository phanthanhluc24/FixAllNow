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
  Image
} from 'react-native';
import React, {useState, Fragment, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import useEditInfoService from '../../hooks/useEditInfoService';
import SignIn from '../accounts.tsx/SignIn';
import { useNavigation } from '@react-navigation/native';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const EditInfoService = ({route}: any) => {
  const {service}:any=route.params;
  const navigation:any= useNavigation();
  const [nameService, setNameService] = useState(service.service_name);
  const [priceService, setPriceService] = useState(service?.price.toString());
  const [descService, setDescService] = useState(service?.desc);
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const [displayDemo,setDisplayDemo]=useState(service.image)
  const handleInputChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'service_name':
        setNameService(value);
        break;
      case 'price':
        setPriceService(value);
        break;
      case 'desc':
        setDescService(value);
        break;
      default:
        break;
    };
  }
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if(res){
        setDisplayDemo(res.uri)
        setSingleFile(res);
      }else{
        setSingleFile(null);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const hasNumbersOnly = (value: string) => {
    return /^\d+$/.test(value);
  };
  const hasLettersAndNoNumbers = (value: string) => {
    return /[a-zA-Z]/.test(value) && !/\d/.test(value);
  };
  const isValidPrice = (value: string) => {
    return /^\d+$/.test(value);
  };
  const onSubmit =async () => {
    const formData = {
      service_id:service._id,
      service_name: nameService,
      price: priceService,
      desc: descService,
      image: singleFile,
    };
    try {
      const editSuccess = await useEditInfoService(formData);
    
    if (editSuccess) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Thành công',
        textBody: 'Thông tin dịch vụ đã được chỉnh sửa!',
      })
      navigation.navigate('Profile', { reload: true });
    } else {
      console.error('Lỗi khi edit thông tin người dùng');
    }
  } catch (error) {
    console.error('Lỗi khi edit thông tin người dùng:', error);
  }
  };
  const handleCancle = () => {
    navigation.navigate("Profile")
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
            <Text style={styles.infoEdit}>Tên dịch vụ </Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    handleInputChange('service_name', text); 
                  }}
                  value={value}
                  defaultValue={nameService}
                />
              )}
              name="service_name"
              rules={{required: '* Tên không được bỏ trống',
              validate: value =>
              hasLettersAndNoNumbers(value) || '* Tên không được chỉ chứa số',
          }}
              defaultValue={nameService}
            />
             {errors.service_name && (
          <Text style={{color: 'red'}}>{errors.service_name.message}</Text>
        )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Gía dịch vụ</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    handleInputChange('price', text); 
                  }}
                  value={value}
                  defaultValue={priceService}
                />
              )}
              name="price"
              rules={{required: '* Giá không được bỏ trống ',
              validate: value => isValidPrice(value) || '* Giá chỉ được chứa số'}}
              defaultValue={priceService}
            />
            {errors.price && (
          <Text style={{color: 'red'}}>{errors.price.message}</Text>
        )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Mô tả dịch vụ</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                multiline={true}
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    handleInputChange('desc', text); 
                  }}
                  value={value}
                  defaultValue={descService}
                />
              )}
              name="desc"
              rules={{required: '* Mô tả không được bỏ trống',
              validate: value =>
              hasLettersAndNoNumbers(value) || '* Mô tả không được chỉ chứa số',
            }}
              defaultValue={descService}
            />
            {errors.desc && (
          <Text style={{color: 'red'}}>{errors.desc.message}</Text>
        )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh bìa dịch vụ</Text>
           
              <View style={styles.selectedImage}>
                <Image
                  source={{uri: displayDemo}}
                  style={styles.imageStyle}></Image>
                <View style={{position: 'absolute'}}>
                  <TouchableOpacity onPress={selectFile}>
                    <View style={styles.imageViews}>
                      <Entypo name="camera" size={25} color="#394C6D" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
           
          </View>
        </View>
        <View style={styles.eventSubmit}>
        <View style={styles.buttonChoose}>
            <View style={styles.buttonNow}>
              <View style={styles.button1}>
                <TouchableOpacity
                  style={styles.bookNow}
                  onPress={handleCancle}>
                  <Text style={styles.books}>Hủy</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button1}
                onPress={handleSubmit(onSubmit)}>
                <View style={styles.book}>
                  <Text style={styles.books}>Cập nhật</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditInfoService;

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
    marginTop: 40,
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
    height:100
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
    height:50
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
