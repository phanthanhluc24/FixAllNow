import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useGetListRepairmanOfCategorySpecific from '../hooks/useGetListRepairmanOfCategorySpecific';
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
const ListOfElectrician = ({route}: any) => {
  const {id} = route.params;
  const navigation: any = useNavigation();
  const {listRepairmanOfCategory, isLoading, isError} =
    useGetListRepairmanOfCategorySpecific(id);
  if (isLoading) {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
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
    return <Text>Error loading repairman</Text>;
  }
  if (listRepairmanOfCategory.length <= 0) {
    return <Text>Chưa có danh mục nào!</Text>;
  }
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
    <View style={styles.repairmanPopular}>
      <View style={styles.container}>
        <Text style={styles.title}>Thợ nổi bật</Text>
        <View style={{marginBottom:70}}>
          <FlatList
            data={listRepairmanOfCategory as typeRepairman[]}
            keyExtractor={repairman => repairman._id}
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
                  <View style={styles.imgRepairman}>
                    <Image source={{uri: item.avatar}} style={styles.img} />
                  </View>
                  <View style={styles.infoRepairman}>
                    <Text style={styles.nameRepairman}>{item.full_name} </Text>
                    <View style={styles.divInfo}>
                    {renderStars(item.averageStar)}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ListOfElectrician;

const styles = StyleSheet.create({
  imgRepairman: {
    width: '30%',
  },
  iconStar: {
    width: 30,
    height: 30,
  },
  averageStar: {
    color: '#394C6D',
    fontSize: 15,
    height: '50%',
    justifyContent: 'center',
  },
  divInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    height: 36,
  },
  infoRepairman: {
    marginHorizontal: 20,
    width: '70%',
  },
  repairmanPopular: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    // marginBottom:60,
  },
  title: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal:20
  },
  repairman: {
    
    marginHorizontal:20,
    marginTop: 10,
    backgroundColor: '#FCA234',
    width: '90%',
    height: 132,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
    borderRadius: 50,
    borderWidth:3,
    borderColor:"#394C6D"
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
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
