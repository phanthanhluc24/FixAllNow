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
  Modal,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import useAddNewService from '../../hooks/useAddNewService';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const FormAddNewService = () => {
  const navigation: any = useNavigation();
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [errorImage, setErrorImage] = useState('');
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
      setErrorImage('');
    } catch (err) {
      setSingleFile(null);
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
    setError,
  } = useForm();
  const {sendData} = useAddNewService();
  const hasLettersAndNoNumbers = (value: string) => {
    return /[a-zA-Z]/.test(value) && !/\d/.test(value);
  };
  const hasNoIcons = (value: string) => {
    return !/[^\p{L}\p{N}\s]/u.test(value);
  };
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const errorFields = [];
      if (!data.service_name.trim()) errorFields.push('service_name');
      if (!data.price) errorFields.push('price');
      if (!data.desc.trim()) errorFields.push('desc');
      if (errorFields.length > 0) {
        setError(errorFields.map(field => ({type: 'manual', name: field})));
        setLoading(false);
        return;
      }
      if (!singleFile) {
        setErrorImage('Ảnh không được để trống');
        setLoading(false);
        return;
      } else {
        data.image = singleFile;
      }
      const responseData = await sendData(data);
      if (responseData) {
        setLoading(false);
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Thành công',
          textBody: 'Dịch vụ đã thêm thành công!',
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'Profile'}],
        });
        navigation.navigate('Profile');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };
  const handleCancle = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Profile'}],
    });
  };
  const isNumeric = (value: any) => {
    return /^\d+$/.test(value);
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
              rules={{
                required: '* Tên không được bỏ trống',
                validate: value =>
                  (hasLettersAndNoNumbers(value) && hasNoIcons(value)) ||
                  '* Tên không được chỉ chứa số và kí hiệu riêng',
              }}
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
                    if (isNumeric(text) || text === '') {
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
              rules={{
                required: '* Mô tả không được bỏ trống',
                validate: value =>
                  hasLettersAndNoNumbers(value) ||
                  '* Mô tả không được chỉ chứa số',
              }}
              defaultValue=""
            />
            {errors.desc && (
              <Text style={{color: 'red'}}>{errors.desc.message}</Text>
            )}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh bìa dịch vụ</Text>
            <View style={styles.messageError}>
              {errorImage ? (
                <Text style={{color: 'red'}}>{errorImage}</Text>
              ) : null}
            </View>

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
  messageError: {
    alignItems: 'center',
    justifyContent: 'center',
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