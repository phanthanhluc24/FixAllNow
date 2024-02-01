import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import useGetServicePopular from '../hooks/useGetServicePopular';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const HomeServicePopular = () => {
  const {services, isLoading, isError} = useGetServicePopular();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (services.length === 0) {
    return <Text>Services not available!</Text>;
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  return (
    <View style={styles.containerRepairman}>
      <FlatList
        data={services as typeService[]}
        keyExtractor={services => services._id}
        renderItem={({item}) => (
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
        )}
      />
    </View>
  );
};

export default HomeServicePopular;

const styles = StyleSheet.create({
  repairman: {
    marginTop: 10,
    backgroundColor: '#394C6D',
    width: '100%',
    height: 132,
    borderRadius: 10,
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
