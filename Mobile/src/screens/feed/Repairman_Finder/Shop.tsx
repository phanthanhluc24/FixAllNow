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
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import { url } from '../../../hooks/apiRequest/url';
interface NewService{
  service_name:string,
  price:number|null,
  desc:string
}
const FormAddNewService = () => {
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const [formData, setFormData] = useState<NewService>({service_name:"",price:null,desc:""});
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
    formState: { errors },
  } = useForm();
  const handleSubmit=()=>{
    
  }
  
  const onSubmit = async () => {
    const body = new FormData();
    body.append("price", formData.price);
    body.append("desc", formData.desc);
    body.append("service_name", formData.service_name);
    body.append("image", singleFile);
    try {
        const response = await fetch(url + "/service", {
            method: "POST",
            body: body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.formEdit}>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Tên dịch vụ </Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    setFormData({ ...formData, service_name: text });
                  }}
                  value={value}
                />
              )}
              name="service_name"
              rules={{ required: 'Tên không được bỏ trống' }}
              defaultValue=""
            />
            {/* {errors.name && (
          <Text style={{color: 'red'}}>{errors.name.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Gía dịch vụ</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    setFormData({ ...formData, price: parseInt(text) });
                  }}
                  value={value}
                />
              )}
              name="price"
              rules={{ required: 'Gía không được bỏ trống ' }}
              defaultValue=""
            />
            {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Mô tả dịch vụ</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    setFormData({ ...formData, desc: text });
                  }}
                  value={value}
                />
              )}
              name="desc"
              rules={{ required: 'Mô tả không được bỏ trống' }}
              defaultValue=""
            />
            {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh bìa dịch vụ</Text>
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
            {singleFile && (
              <Text style={styles.textStyle}>
                File Name: {singleFile.name}
                {'\n'}
                Type: {singleFile.type}
                {'\n'}
                File Size: {singleFile.size}
                {'\n'}
                URI: {singleFile.uri}
                {'\n'}
                {/* Buffer: {singleFile.buffer} */}
              </Text>
            )}
            <View style={styles.selectedImage}>
              <Image
                source={{ uri: singleFile?.uri }}
                style={styles.imageStyle}
              />
            </View>
          </View>
        </View>
        <View style={styles.eventSubmit}>
          <Button color={'#FCA234'} onPress={handleSubmit} title="Hủy" />
          <Button
            color={'#FCA234'}
            onPress={onSubmit}
            title="Thêm mới"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormAddNewService;

const styles = StyleSheet.create({
  selectedImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 20,
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
