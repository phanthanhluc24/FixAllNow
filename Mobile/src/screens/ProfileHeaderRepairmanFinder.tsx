import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {useNavigation} from '@react-navigation/native';
import useLogout from '../hooks/useLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonLogout from './bottomTab/ButtonLogout';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
const ProfileHeaderRepairmanFinder = () => {
  const navigation: any = useNavigation();
  const {logout} = useLogout();
  const [token, setToken] = useState('');
  useEffect(() => {
    const getToken = async () => {
      const accessToken: any = await AsyncStorage.getItem('accessToken');
      setToken(accessToken);
    };
    getToken();
  });
  const {currentUser, isLoading, isError} = useGetCurrentUser();
  const [singleFile, setSingleFile] = useState<DocumentPickerResponse | null>(
    null,
  );
  const selectFile = async () => {
    try {
      const [res] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
      if (res) {
        navigation.navigate('EditAvatarCurrentUser', {image: res});
      }
    } catch (err) {
      setSingleFile(null);

      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  const onNavigation = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  };
  return (
    <View style={styles.profileHeader}>
      <View style={styles.back}>
        <TouchableOpacity style={styles.iconBack} onPress={onNavigation}>
          <AntDesign name="arrowleft" color="#000000" size={25} />
        </TouchableOpacity>
        <View style={styles.spaceRight}></View>
      </View>
      <View style={styles.infoProfile}>
        <TouchableOpacity style={styles.avatarPro}>
          <Image
            style={styles.avatarProfile}
            source={{uri: currentUser?.image}}
          />
          <View style={{position: 'absolute'}}>
            <TouchableOpacity onPress={selectFile}>
              <View style={styles.imageViews}>
                <Entypo name="camera" size={20} color="#394C6D" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.contentProfile}>
          <View style={styles.styleProfile}>
            <View style={styles.info}>
              <Text style={styles.nameProfile}>{currentUser?.full_name}</Text>
            </View>
            <View style={styles.buttonEvent}>
              <TouchableOpacity
                style={styles.iconEdit}
                onPress={() =>
                  navigation.navigate('EditInfoCurrentUser', {
                    user: currentUser,
                  })
                }>
                <Entypo name="edit" size={24} color="white" />
              </TouchableOpacity>
              <ButtonLogout />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.infoQuality}>
        <View style={styles.email}>
          <Text>
            <MaterialIcons name="email" size={24} color="#394C6D" />
          </Text>
          <View style={styles.infoEmail}>
            <Text style={styles.nameEmail}>Email</Text>
            <Text style={styles.detailEmail}>{currentUser?.email}</Text>
          </View>
        </View>
        <View style={styles.phone}>
          <Text>
            <Entypo name="phone" size={24} color="#394C6D" />
          </Text>
          <View style={styles.infoPhone}>
            <Text style={styles.namePhone}>Số điện thoại</Text>
            <Text style={styles.detailPhone}>
              (+84){currentUser?.number_phone}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileHeaderRepairmanFinder;
const styles = StyleSheet.create({
  iconBack: {
    width: '20%',
  },
  spaceRight: {
    width: '80%',
  },
  back: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViews: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#394C6D',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 50,
  },
  buttonEvent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginRight: 25,
  },
  detailEmail: {
    fontSize: 15,
    color: '#394C6D',
  },
  detailPhone: {
    fontSize: 15,
    color: '#394C6D',
  },
  namePhone: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  nameEmail: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  infoPhone: {
    marginHorizontal: 10,
  },
  infoEmail: {
    marginHorizontal: 10,
  },
  phone: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoQuality: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  iconEdit: {
    width: 100,
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#394C6D',
  },
  info: {
    alignItems: 'center',
  },
  jobProfile: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  nameProfile: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  styleProfile: {
    alignItems: 'center',
  },
  contentProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  profileHeader: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  infoProfile: {
    marginHorizontal: 10,
  },
  avatarProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#394C6D',
  },
  avatarPro: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
