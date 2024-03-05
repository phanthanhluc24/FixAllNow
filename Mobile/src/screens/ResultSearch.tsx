import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderSearch from './HeaderSearch';
import ListServiceSearch from './ListServiceSearch';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const ResultSearch = () => {
  const navigation: any = useNavigation();
  const [searchData, setSearchData] = useState<typeService[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (data: any) => {
    setSearchData(data);
    setIsSearching(true);
  };
  const handleChangeSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <HeaderSearch
          onSearch={handleSearch}
          onChangeText={handleChangeSearch}
          value={searchQuery}
        />
        <ListServiceSearch data={searchData} />
      </View>
    </View>
  );
};

export default ResultSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
