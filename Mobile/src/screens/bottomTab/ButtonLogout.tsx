import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useLogout from '../../hooks/useLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ButtonLogout = () => {
  const {logout} = useLogout();
  const [token, setToken] = useState('');
  useEffect(() => {
    const getToken = async () => {
      const accessToken: any = await AsyncStorage.getItem('accessToken');
      setToken(accessToken);
    };
    getToken();
  },[]);

  const navigation: any = useNavigation();
  const handleLogout = () => {
    logout(token)
      .then(res => {
        if (res.status === 201) {
          navigation.navigate('SignIn');
        }
      })
      .catch(error => {
        console.log(error);
      });

    };
    return (
            <TouchableOpacity style={styles.iconEdit} onPress={handleLogout}>
                <MaterialCommunityIcons name="logout" size={24} color="#394C6D" />
            </TouchableOpacity>
    );
};

export default ButtonLogout;

const styles = StyleSheet.create({
  iconEdit: {
    marginLeft: 20,
    marginVertical: 5,
  },
});
