import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import HomeCategories from '../../HomeCategories';
import HeaderSearch from '../../HeaderSearch';
import HomeRepairmanPopular from '../../HomeRepairmanPopular';
import HomeServicePopular from '../../HomeServicePopular';
import ListServiceSearch from '../../ListServiceSearch';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const Home = () => {
  const [searchData, setSearchData] = useState<typeService[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = (data: any) => {
    setSearchData(data);
    setIsSearching(true);
  };
  const data = [{key: 'HomeServicePopular'}];

  const renderHeader = () => (
    <View>
      <HeaderSearch onSearch={handleSearch} />
      {!isSearching && (
         <>
      <HomeCategories />
     
      <View style={styles.repairmanPopular}>
        <View style={styles.containers}>
          <Text style={styles.title}>Thợ nổi bật</Text>
          <HomeRepairmanPopular />
        </View>
      </View>
      </>
      )}
    </View>
  );
  const renderService = () => (
    <View>
      <View style={styles.repairmanPopulars}>
        <View style={styles.containerss}>
          <Text style={styles.titles}>Dịch vụ nổi bật</Text>
          <HomeServicePopular />
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      
      {isSearching ? (
        <ListServiceSearch data={searchData} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={renderService}
          ListHeaderComponent={renderHeader}
        />
      )}
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repairmanPopular: {
    flex: 1,
    marginTop: 20,
  },
  containers: {
    marginHorizontal: 20,
  },
  title: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repairmanPopulars: {
    flex: 1,
    marginTop: 20,
  },
  containerss: {
    marginHorizontal: 20,
  },
  titles: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: '#394C6D',
    width: '100%',
    height: 132,
    borderRadius: 10,
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
  price: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: '50%',
    paddingVertical: 5,
  },
  description: {
    width: '60%',
    color: '#FFFFFF',
  },
  info: {
    marginHorizontal: 20,
  },
});
