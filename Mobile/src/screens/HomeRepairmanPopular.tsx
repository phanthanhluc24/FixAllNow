import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import useGetRepairmansPopular from '../hooks/useGetRepairmansPopular';
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
import {Rating} from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
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
  const [currentPage, setCurrentPage] = useState(1);
  const {repairmans, totalRepairman, isLoading, isError, fetchMore} =
    useGetRepairmansPopular(currentPage);
    // console.log(repairmans);
    
  const handleLoadMore = () => {
    if (!isLoading) {
      fetchMore();
    }
  };
  if (isLoading) {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>
          <LoaderKit
            style={styles.loadingText}
            name={'BallPulse'}
            color={'#FCA234'}
          />
        </Text>
      </View>
    );
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  if (repairmans.length === 0) {
    return <Text>No repairmen available</Text>;
  }

  //pagination repairman
  const pageSize = 10;
  const totalPages = Math.ceil(totalRepairman / pageSize);

  const handelChangePage = (page: number) => {
    setCurrentPage(page);
  };
  //show star rating
  const renderStars = (averageStar: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={averageStar >= i ? 'star' : 'star-o'}
          size={20}
          color={averageStar >= i ? '#FFD700' : '#FFFFFF'}
        />,
      );
    }
    return stars;
  };
  return (
    <View style={styles.containerRepairman}>
      <FlatList
        data={repairmans as typeRepairman[]}
        keyExtractor={repairmans => repairmans._id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.repairman}
            onPress={() =>
              navigation.navigate('DetailRepairman', {
                id: item._id,
                title: item.full_name,
              })
            }>
            <View style={styles.content}>
              <Image source={{uri: item.avatar}} style={styles.img} />
              <View style={styles.infoRepairman}>
                <Text style={styles.nameRepairman}>{item.full_name} </Text>
                <View style={styles.divInfo}>
                  {renderStars(item.averageStar)}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />

      <View style={styles.paginationContainer}>
        {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
          <TouchableOpacity
            key={page}
            onPress={() => handelChangePage(page)}
            style={[
              styles.paginationButton,
              currentPage === page && styles.currentPageButton,
            ]}>
            <Text
              style={[
                styles.paginationButtonText,
                currentPage === page && styles.currentPageButtonText,
              ]}>
              {page}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeRepairmanPopular;

const styles = StyleSheet.create({
  address:{
    flexDirection:"row",
    alignItems:"center",
  },
  repairman: {
    marginTop: 10,
    backgroundColor: '#FCA234',
    width: '100%',
    height: 132,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  containerRepairman: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  infoRepairman: {
    marginHorizontal: 20,
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
    height: '40%',
    justifyContent: 'center',
  },
  averageStar: {
    color: '#394C6D',
    fontSize: 15,
    height: '50%',
    justifyContent: 'center',
  },
  distance: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  iconStar: {
    width: 30,
    height: 30,
  },
  divInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    height: 36,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationButton: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  paginationButtonText: {
    fontSize: 16,
  },
  currentPageButton: {
    backgroundColor: 'orange', // Màu cam
  },
  currentPageButtonText: {
    color: 'white', // Màu chữ trắng
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
});
