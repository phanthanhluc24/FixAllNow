import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
  Image,
} from 'react-native';
import React, {useState, Fragment, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import useUploadAvatarUser from '../../hooks/useUploadAvatarUser';
const EditAvatarCurrentUser = ({route}: any) => {
  const navigation: any = useNavigation();
  const {image} = route.params;
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    image,
  );
  useEffect(() => {
    setSingleFile(image); 
  }, [image]);
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
          navigation.navigate("Profile")
      } else {
        throw err;
      }
    }
  };
  const {sendData} = useUploadAvatarUser();
  const handleSubmit = async (data: any) => {
    try {
      data.image = singleFile;
      const responseData = await sendData(data);
      if (responseData) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Root' }],
        });
      }
    } catch (error) {
    }
  };
  const handleCancle=()=>{
    navigation.navigate('Profile');
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 9}}>
        <View style={styles.part}>
          <View>
            {!!singleFile || (
              <View style={styles.selectedImage}>
                <TouchableOpacity onPress={selectFile} activeOpacity={0.5}>
                  <View style={styles.imageView}>
                    <Entypo name="camera" size={50} color="#FCA234" />
                  </View>
                </TouchableOpacity>
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
      </View>
      <View style={{flex: 1,marginBottom:10}}>
        <View style={styles.buttonChoose}>
          <View style={styles.buttonNow}>
            <View style={styles.button1}>
              <TouchableOpacity style={styles.bookNow} onPress={handleCancle}>
                <Text style={styles.books}>Hủy</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
              <View style={styles.book}>
                <Text style={styles.books}>Cập nhật</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditAvatarCurrentUser;

const styles = StyleSheet.create({
  selectedImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageStyle: {
    width: '90%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#FCA234',
    borderRadius: 10,
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
  },
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
