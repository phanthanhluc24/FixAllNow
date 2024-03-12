import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {url} from '../hooks/apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {useNavigation} from '@react-navigation/native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
interface typeProfile {
  _id: string;
  image: string;
}
const HeaderSearch = ({onSearch}: any) => {
  const navigation: any = useNavigation();
  const {currentUser, isLoading, isError} = useGetCurrentUser();
  if (isLoading) {
    <Text>loading...</Text>;
  }
  if (isError) {
    <Text>....</Text>;
  }
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (text: any) => {
    setSearchValue(text);
  };
  const handleSearch = async () => {
    if (searchValue.trim() !== ''){
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(
        `${url}/service/research`,
        {
          search: searchValue,
        },
        {
          headers: {Authorization: `Bearer ${accessToken}`},
        },
      );
      const searchData = response.data.data;
      onSearch(searchData);
    }catch (error: any) {
    }
  };
  }
  useEffect(() => {
    setSearchValue(prevSearchValue => prevSearchValue);
  }, []);
  useEffect(() => {
    if (searchValue.trim() !== '') {
      handleSearch(); 
    }
  }, [searchValue]); 
  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.SearchInputs}>
        <View style={styles.searchInput}>
          <TextInput
          style={{width:"80%"}}
            value={searchValue}
            onChangeText={handleSearchChange}
            placeholder="Tìm kiếm dịch vụ"
          />
          <TouchableOpacity style={styles.messageIcon} onPress={handleSearch}>
            <Feather name="search" color="black" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HeaderSearch;
const styles = StyleSheet.create({
  SearchBarContainer: {},
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderColor: '#FCA234',
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  SearchInputs: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  messageIcon: {
    width: 52,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#FCA234",
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#394C6D',
  },
});
