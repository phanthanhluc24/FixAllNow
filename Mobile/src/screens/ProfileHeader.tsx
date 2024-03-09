import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import DocumentPicker,{
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import useGetServiceOfRepairman from '../hooks/useGetServiceOfRepairman';
import ButtonLogout from './bottomTab/ButtonLogout';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import useDeleteService from '../hooks/useDeleteService';

const ProfileHeader = () => {
  ///render các trạng thái đặt hàng
  
  ////////////////////////////////
  //lấy ảnh đại diện từ file
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
  //////////////////////////////////////////////
  const navigation: any = useNavigation();
  const {currentUser, isLoading, isError}: any = useGetCurrentUser();
  const [hasServices, setHasServices] = useState<boolean>(false);
  const {serviceOfRepairman} = useGetServiceOfRepairman(currentUser?._id);
  useEffect(() => {
    if (serviceOfRepairman.length > 0) {
      setHasServices(true);
    } else {
      setHasServices(false);
    }
  }, [serviceOfRepairman]);
  // xóa dịch vụ
  const {destroyService}=useDeleteService()
  const handleDeleteService=(service_id:string)=>()=>{
    destroyService(service_id)
    navigation.navigate('Profile', { reload: true });
  }///////////////////////////////////
  const renderItem = (data: any) => (
    <TouchableOpacity
      style={styles.repairman}
      onPress={() =>
        navigation.navigate('DetailService', {
          id: data.item._id,
          title: data.item.service_name,
        })
      }>
      <View style={styles.content}>
        <View style={styles.image}>
          <Image source={{uri: data.item.image}} style={styles.img} />
        </View>
        <View style={styles.info}>
          <View style={styles.infos}>
            <Text numberOfLines={1} style={styles.nameRepairman}>
              {data.item.service_name}
            </Text>
            <View style={styles.prices}>
              <Text style={styles.price}>
                {data.item.price.toLocaleString('vi-VN')}
              </Text>
              <Text style={styles.vnd}> VND</Text>
            </View>
            <Text numberOfLines={2} style={styles.description}>
              {data.item.desc}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data: any) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={styles.deleteService} onPress={handleDeleteService(data.item._id)}>
        <AntDesign name="delete" color="#FFFFFF" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.editService}
        onPress={() =>
          navigation.navigate('EditInfoService', {service: data.item})
        }>
        <Entypo name="edit" size={25} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.profileHeader}>
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
                <Entypo name="edit" size={24} color="#ffffff" />
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
     
      <View style={styles.container}>
        <Text style={styles.nameListService}>Danh sách dịch vụ</Text>
        {hasServices ? (
          <SwipeListView
            data={serviceOfRepairman}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        ) : (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.noService}>(Bạn chưa đăng dịch vụ nào!)</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default ProfileHeader;
const styles = StyleSheet.create({
  listHistory: {
    height: 50,
    backgroundColor:"#ffffff",
  },
  eventButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FCA234',
    height: 50,
    width:140,
    borderWidth:0.5
  },
  titleButton: {
    color: '#394C6D',
  },
  selectedButton: {
    backgroundColor: '#394C6D',
  },
  selectedText: {
    color: 'white',
  },
  containers: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#394C6D',
    width: '90%',
    height: 120,
    marginTop: 10,
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  hello: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCA234',
    width: '90%',
  },
  detaildemo: {
    fontSize: 13,
    color: '#FFFFFF',
    width: '90%',
  },
  containerProfileBodyRepairmanFinder: {
    flex: 1,
  },
  profileBodyRepairmanFinder: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  nameAccount: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FCA234',
    paddingVertical: 10,
  },
  nameSecurity: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameAddress: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameBank: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameLanguage: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#394C6D',
  },
  noService: {
    fontSize: 15,
    color: 'white',
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
  nameListService: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
    padding: 15,
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
  buttonEvent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginRight: 20,
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
    marginHorizontal: 20,
    width: '70%',
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  profileHeader: {
    flex: 1,
    backgroundColor: '#fffff0',
  },
  infoProfile: {
    marginHorizontal: 20,
  },
  avatarProfile: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#394C6D',
    
  },
  avatarPro: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    
  },
  deleteService: {
    marginHorizontal: 20,
  },
  editService: {
    marginHorizontal: 20,
  },
  containerListService: {
    flex: 1,
    backgroundColor: '#394C6D',
  },
  container: {
    flex: 1,
    backgroundColor: '#fffff0',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#394C6D',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#394C6D',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FCA234',
    marginTop:3,
    borderRadius:10
  },
  repairman: {
    backgroundColor: '#FCA234',
    flex: 1,
    height: 132,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    marginTop:3,
    borderRadius:10
  },
  containerRepairman: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#394C6D',
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  vnd: {
    fontSize: 18,
    color: '#394C6D',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: '#394C6D',
    fontWeight: 'bold',
    width: 'auto',
    paddingVertical: 5,
  },
  description: {
    width: '100%',
    color: '#FFFFFF',
    maxWidth: '100%',
  },
  image: {
    width: '30%',
  },
  infos: {
    marginHorizontal: 10,
  },
});
