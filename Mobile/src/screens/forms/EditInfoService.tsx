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
const EditInfoService = ({route}: any) => {
  const {service}=route.params;
  const [nameService, setNameService] = useState(service.service_name);
  const [priceService, setPriceService] = useState(service?.price.toString());
  const [descService, setDescService] = useState(service?.desc);
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
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
    }
  };
  useEffect(() => {
    if (service?.image) {
      setSingleFile({uri: service.image});
    }
  }, [service]);
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
    formState: {errors},
  } = useForm();
  const onSubmit = () => {
    const formData = {
      service_name: nameService,
      price: priceService,
      desc: descService,
      singleFile: singleFile, 
    };
    useEditInfoService(formData);
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
              rules={{required: 'Tên không được bỏ trống'}}
              defaultValue={nameService}
            />
            {/* {errors.name && (
          <Text style={{color: 'red'}}>{errors.name.message}</Text>
        )} */}
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
              rules={{required: 'Gía không được bỏ trống '}}
              defaultValue={priceService}
            />
            {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Mô tả dịch vụ</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
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
              rules={{required: 'Mô tả không được bỏ trống'}}
              defaultValue={descService}
            />
            {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh bìa dịch vụ</Text>
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
