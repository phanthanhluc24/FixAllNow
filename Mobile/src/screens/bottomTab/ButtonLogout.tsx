import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useLogout from '../../hooks/useLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const ButtonLogout = () => {
  const {logout} = useLogout();
  const [token, setToken] = useState('');
  useEffect(() => {
    const getToken = async () => {
      const accessToken: any = await AsyncStorage.getItem('accessToken');
      setToken(accessToken);
    };
    getToken();
  }, []);

  const navigation: any = useNavigation();
  const handleLogout = () => {
    logout(token)
      .then(async res => {
        console.log('logging out');
        await AsyncStorage.setItem('accessToken', '');
        if (res.status === 201) {
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Thành công',
            textBody: 'Đăng xuất thành công!',
          });
          navigation.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          });
          navigation.navigate('SignIn')
        }
      })
      .catch(error => {});
  };
  return (
    <TouchableOpacity style={styles.iconEdit} onPress={handleLogout}>
      <MaterialCommunityIcons name="logout" size={24} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default ButtonLogout;

const styles = StyleSheet.create({
  iconEdit: {
    width: 100,
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#394C6D',
  },
});
