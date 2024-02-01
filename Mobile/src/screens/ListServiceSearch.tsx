import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import HeaderSearch from './HeaderSearch';
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
  const renderItemSearch = ({item}: {item: typeService}) => (
    <View style={styles.repairman}>
      <View style={styles.content}>
        <Image source={{uri: item.image}} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.nameRepairman}>{item.service_name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.desc}
          </Text>
        </View>
      </View>
    </View>
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
