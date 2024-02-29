import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {url} from '../hooks/apiRequest/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import { useNavigation } from '@react-navigation/native';
interface typeProfile{
  _id: string;
  image:string
}
const HeaderSearch = ({onSearch}:any) => {
  const navigation:any= useNavigation();
  const{currentUser, isLoading, isError} = useGetCurrentUser();
  if(isLoading){
    <Text>loading...</Text>
  }
  if(isError){
    <Text>....</Text>
  }
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (text: any) => {
    setSearchValue(text);
  };
  const handleSearch = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.post(`${url}/service/research`, {
        search: searchValue,
      },
      {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      const searchData = response.data.data;
      onSearch(searchData);
    } catch (error: any) {
      console.error('Error searching:',error);
    }
  };
  return(
    <View style={styles.SearchBarContainer}>
      <View style={styles.SearchInputs}>
        <View style={styles.searchInput}>
          <TextInput
            multiline={true}
            value={searchValue}
            onChangeText={handleSearchChange}
            placeholder="Tìm kiếm dịch vụ"
          />
          <TouchableOpacity style={styles.messageIcon} onPress={handleSearch}>
            <Feather name="search" color="black" size={28} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image source={{uri:currentUser?.image}} style={styles.images}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderSearch;
const styles = StyleSheet.create({
  SearchBarContainer: {
    flex: 1,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  SearchInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  messageIcon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images:{
    width:50, height:50,borderRadius:100,
    borderWidth:3,
    borderColor:"#394C6D"
  }
});
