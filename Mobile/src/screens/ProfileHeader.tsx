import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {useNavigation} from '@react-navigation/native';
import useGetServiceOfRepairman from '../hooks/useGetServiceOfRepairman';
import ButtonLogout from './bottomTab/ButtonLogout';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
const ProfileHeader = () => {
  const navigation: any = useNavigation();
  const {currentUser, isLoading, isError}: any = useGetCurrentUser();
  const {serviceOfRepairman} = useGetServiceOfRepairman(currentUser?._id);
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
  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <Text style={styles.deleteService}>
        <AntDesign name="delete" color="#FFFFFF" size={25} />
      </Text>
      <Text style={styles.editService}>
        <Entypo name="edit" size={25} color="#FFFFFF" />
      </Text>
    </View>
  );
  return (
    <View style={styles.profileHeader}>
      <View style={styles.infoProfile}>
        <View style={styles.avatarPro}>
          <Image
            style={styles.avatarProfile}
            source={{uri: currentUser?.image}}
          />
        </View>
        <View style={styles.contentProfile}>
          <View style={styles.styleProfile}>
            <View style={styles.info}>
              <Text style={styles.nameProfile}>{currentUser?.full_name}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.iconEdit} onPress={()=>navigation.navigate('EditInfoCurrentUser')}>
                <Entypo name="edit" size={24} color="#394C6D" />
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
      <View style={styles.container}>
        <Text style={styles.nameListService}>Danh sách dịch vụ</Text>
        <SwipeListView
          data={serviceOfRepairman}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    </View>
  );
};
export default ProfileHeader;
const styles = StyleSheet.create({
  nameListService: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FCA234',
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
    marginLeft: 20,
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
    flexDirection: 'row',
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
    backgroundColor: '#394C6D',
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
  },
  repairman: {
    backgroundColor: '#FCA234',
    flex: 1,
    height: 132,
    marginHorizontal: 15,
    borderBottomWidth: 1,
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
  },
  image: {
    width: '30%',
  },
  infos: {
    marginHorizontal: 10,
  },
});
