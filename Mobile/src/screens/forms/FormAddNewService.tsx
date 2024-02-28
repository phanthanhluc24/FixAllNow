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
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import useAddNewService from '../../hooks/useAddNewService';
const FormAddNewService = () => {

  const navigation: any = useNavigation();

  
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
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
    setError,
  } = useForm();
  const {sendData} = useAddNewService();
  const onSubmit = async (data: any) => {
    
    try {
      console.log(data)
      const errorFields = [];
      if (!data.service_name.trim()) errorFields.push('service_name');
      if (!data.price) errorFields.push('price');
      if (!data.desc.trim()) errorFields.push('desc');

      if (errorFields.length > 0) {
        setError(errorFields.map(field => ({type: 'manual', name: field})));
        return;
      }

      data.image = singleFile;
      const responseData = await sendData(data);
      if (responseData) {
        Alert.alert('Dịch vụ thêm thành công!');
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('Error while sending data:', error);
    }
  };
  const isNumeric = (value:any) => {
    return /^\d+$/.test(value);
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
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="service_name"
              rules={{required: '* Tên không được bỏ trống'}}
              defaultValue=""
            />
            {errors.service_name && (
              <Text style={{color: 'red'}}>{errors.service_name.message}</Text>
            )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Giá dịch vụ</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    if (isNumeric(text)) {
                      onChange(text);
                    }
                  }}
                  value={value}
              keyboardType="numeric"
                />
              )}
              name="price"
              rules={{required: '* Giá không được bỏ trống '}}
              defaultValue=""
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
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="desc"
              rules={{required: '* Mô tả không được bỏ trống'}}
              defaultValue=""
            />
            {errors.desc && (
              <Text style={{color: 'red'}}>{errors.desc.message}</Text>
            )}
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
                <TouchableOpacity style={styles.bookNow} onPress={onSubmit}>
                  <Text style={styles.books}>Hủy</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button1}
                onPress={handleSubmit(onSubmit)}>
                <View style={styles.book}>
                  <Text style={styles.books}>Thêm mới</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormAddNewService;

const styles = StyleSheet.create({
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    marginHorizontal: 20,
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
  oneLine: {
    width: '100%',
    backgroundColor: '#FCA234',
    height: 1,
    marginTop: 15,
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
  part: {
    marginVertical: 5,
    height: 110,
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
    paddingHorizontal: 20,
  },
  formEdit: {
    flex: 9,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#394C69',
    flex: 1,
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
