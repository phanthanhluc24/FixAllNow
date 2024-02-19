import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HeaderSearch from './HeaderSearch';
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
interface ListServiceSearchProps {
  data: typeService[];
}
const ListServiceSearch: React.FC<ListServiceSearchProps> = ({data}) => {
  const navigation: any = useNavigation();
  const renderItemSearch = ({item}: {item: typeService}) => (
    <TouchableOpacity
      style={styles.repairman}
      onPress={() => navigation.navigate('DetailService', {id: item._id})}>
      <View style={styles.content}>
        <View style={styles.imageService}>
          <Image source={{uri: item.image}} style={styles.img} />
        </View>
        <View style={styles.infoService}>
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.nameRepairman}>
              {item.service_name}
            </Text>
            <View style={styles.prices}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.vnd}>vnđ</Text>
            </View>
            <Text numberOfLines={2} style={styles.description}>
              {item.desc}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.repairmanPopulars}>
      <View style={styles.containerss}>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={renderItemSearch}
        />
      </View>
    </View>
  );
};

export default ListServiceSearch;

const styles = StyleSheet.create({
  repairmanPopulars: {
    flex: 1,
    marginTop: 10,
  },
  containerss: {
    marginHorizontal: 10,
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
  imageService: {
    width: '30%',
  },
  img: {
    width: 100,
    height: 100,
  },
  infoService: {
    width: '70%',
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    width: '100%',
    color: '#FFFFFF',
  },
  info: {
    marginHorizontal: 20,
  },
  vnd: {
    fontSize: 18,
    color: '#FCA234',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: '#FCA234',
    fontWeight: 'bold',
    width: 'auto',
    paddingVertical: 5,
  },
});
