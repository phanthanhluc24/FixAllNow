import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect ,useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {useNavigation} from '@react-navigation/native';
import useLogout from '../hooks/useLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonLogout from './bottomTab/ButtonLogout';
const ProfileHeaderRepairmanFinder =() => {
  const navigation:any= useNavigation();
  const {logout}=useLogout()
  const [token,setToken]=useState("")
  useEffect(()=>{
    const getToken=async()=>{
      const accessToken:any =await AsyncStorage.getItem('accessToken');
      setToken(accessToken)
    }
    getToken()
  }
  )
  const {currentUser, isLoading, isError} = useGetCurrentUser();
  return (
    <View style={styles.profileHeader}>
      <View style={styles.infoProfile}>
        <TouchableOpacity style={styles.avatarPro} onPress={()=>navigation.navigate("EditAvatarCurrentUser")}>
          <Image
            style={styles.avatarProfile}
            source={{uri: currentUser?.image}}
          />
        </TouchableOpacity>
        <View style={styles.contentProfile}>
          <View style={styles.styleProfile}>
            <View style={styles.info}>
              <Text style={styles.nameProfile}>{currentUser?.full_name}</Text>
            </View>
            <View style={styles.buttonEvent}>
              <TouchableOpacity style={styles.iconEdit} onPress={()=>navigation.navigate('EditInfoCurrentUser')}>
                <Entypo name="edit" size={24} color="#FCA234" />
              </TouchableOpacity>
              <ButtonLogout/>
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
            <Text style={styles.detailPhone}>{currentUser?.number_phone}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileHeaderRepairmanFinder;
const styles = StyleSheet.create({
  buttonEvent:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%"
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
    width:100,
    height:40,
    marginVertical: 5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    backgroundColor:"#394C6D",
    
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
    backgroundColor: '#FCA234',
  },
  infoProfile: {
    marginHorizontal: 20,
  },
  avatarProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  avatarPro: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
