import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import useGetRepairmansPopular from '../hooks/useGetRepairmansPopular';
interface typeRepairman {
  _id: string;
  full_name: string;
  email: string;
  number_phone: number;
  address: string;
  role: string;
  image: string;
  password: string;
  averageStar: number;
}
const HomeRepairmanPopular = () => {
  const {data, isLoading, isError, fetchMore} = useGetRepairmansPopular();
  const handleLoadMore = () => {
    if (!isLoading) {
      fetchMore();
    }
  };
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  if (data.length === 0) {
    return <Text>No repairmen available</Text>;
  }
  return (
    <View style={styles.containerRepairman}>
      <FlatList
        data={data as typeRepairman[]}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.repairman}>
            <View style={styles.content}>
              <Image source={{uri: item.image}} style={styles.img} />
              <View>
                <Text style={styles.nameRepairman}>{item.full_name}</Text>
                <Text style={styles.distance}>{item.number_phone}</Text>
                <Text>{item.averageStar}</Text>
              </View>
            </View>
          </View>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
      
    </View>
  );
};

export default HomeRepairmanPopular;

const styles = StyleSheet.create({
  repairman: {
    marginTop: 10,
    backgroundColor: '#FCA234',
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
  distance: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});
