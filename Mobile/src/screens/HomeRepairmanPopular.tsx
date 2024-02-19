import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useGetRepairmansPopular from '../hooks/useGetRepairmansPopular';
import {useNavigation} from '@react-navigation/native';
interface typeRepairman {
  _id: string;
  full_name: string;
  email: string;
  number_phone: number;
  address: string;
  role: string;
  avatar: string;
  password: string;
  averageStar: number;
}
const HomeRepairmanPopular = () => {
  const navigation: any = useNavigation();
  const {repairmans, isLoading, isError, fetchMore} = useGetRepairmansPopular();
  // console.log(data);
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
  if (repairmans.length === 0) {
    return <Text>No repairmen available</Text>;
  }
  return (
    <View style={styles.containerRepairman}>
      <FlatList
        data={repairmans as typeRepairman[]}
        keyExtractor={repairmans => repairmans._id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.repairman}
            onPress={() =>
              navigation.navigate('DetailRepairman', {id: item._id})
            }>
            <View style={styles.content}>
              <Image source={{uri: item.avatar}} style={styles.img} />
              <View style={styles.infoRepairman}>
                <Text style={styles.nameRepairman}>{item.full_name}</Text>
                <Text style={styles.averageStar}>{item.averageStar}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    alignItems:"center",
    padding: 15,
  },
  infoRepairman:{
    marginHorizontal:20,
  },

  img: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: '#394C6D',
    borderRadius: 100,
  },
  nameRepairman: {
    fontSize: 18,
    color: '#394C6D',
    fontWeight: 'bold',
    height:"50%",
    justifyContent:"center"
    
  },
  averageStar:{
    color: '#394C6D',
    fontSize:15,
    height:"50%",
    justifyContent:"center",
   
  },
  distance: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});
