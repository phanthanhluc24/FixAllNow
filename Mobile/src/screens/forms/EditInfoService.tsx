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
} from 'react-native';
import React, {useState, Fragment} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
const EditInfoService = () => {
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const uploadImage = async () => {
    if (singleFile != null) {
      try {
        const formData = new FormData();
        formData.append('image', {
          uri:
            Platform.OS === 'android'
              ? `file://${singleFile.uri}`
              : singleFile.uri,
          type: singleFile.type || 'image/jpeg', // Provide a default type if not available
          name: singleFile.name || 'image.jpg', // Provide a default name if not available
        });
        const res = await fetch(
          'https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/UploadFile',
          {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            timeout: 5000,
          },
        );
        if (res.status === 201) {
          Alert.alert('Upload Successful');
        } else {
          Alert.alert('Upload Failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        Alert.alert('Error uploading file');
      }
    } else {
      Alert.alert('Please Select File first');
    }
  };
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
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
  const onSubmit = () => {};
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
              rules={{required: 'Tên không được bỏ trống'}}
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
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="price"
              rules={{required: 'Gía không được bỏ trống '}}
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
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.inputInfo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="desc"
              rules={{required: 'Mô tả không được bỏ trống'}}
              defaultValue=""
            />
            {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
          </View>
          <View style={styles.part}>
            <Text style={styles.infoEdit}>Ảnh bìa dịch vụ</Text>
            <View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity onPress={selectFile} activeOpacity={0.5}>
                      <View style={styles.imageView}>
                        <Entypo name="camera" size={50} color="#FCA234" />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                name="email"
                rules={{required: 'Vui lòng ảnh không được bỏ trống'}}
                defaultValue=""
              />

              {/* {errors.email && (
          <Text style={{color: 'red'}}>{errors.email.message}</Text>
        )} */}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={selectFile}>
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={uploadImage}>
          <Text style={styles.buttonTextStyle}>Upload File</Text>
        </TouchableOpacity>
        {singleFile != null ? (
          <Text style={styles.textStyle}>
            File Name: {singleFile.name ? singleFile.name : ''}
            {'\n'}
            Type: {singleFile.type ? singleFile.type : ''}
            {'\n'}
            File Size: {singleFile.size ? singleFile.size : ''}
            {'\n'}
            URI: {singleFile.uri ? singleFile.uri : ''}
            {'\n'}
          </Text>
        ) : null}

        <View style={styles.eventSubmit}>
          <Button
            color={'#FCA234'}
            onPress={handleSubmit(onSubmit)}
            title="Hủy"
          />
          <Button
            color={'#FCA234'}
            onPress={handleSubmit(onSubmit)}
            title="Thêm mới"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditInfoService;

const styles = StyleSheet.create({
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
