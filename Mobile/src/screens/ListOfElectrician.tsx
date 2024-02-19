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
import useGetListRepairmanOfCategorySpecific from '../hooks/useGetListRepairmanOfCategorySpecific';
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
const ListOfElectrician = ({route}: any) => {
  const {id} = route.params;
  const navigation: any = useNavigation();
  const {listRepairmanOfCategory, isLoading, isError} =
    useGetListRepairmanOfCategorySpecific(id);
  // console.log(listRepairmanOfCategory);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error loading repairman</Text>;
  }
  return (
    <View style={styles.repairmanPopular}>
      <View style={styles.container}>
        <Text style={styles.title}>Thợ nổi bật</Text>
        <View>
          <FlatList
            data={listRepairmanOfCategory as typeRepairman[]}
            keyExtractor={repairman => repairman._id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.repairman}
                onPress={() =>
                  navigation.navigate('DetailRepairman', {id: item._id})
                }>
                <View style={styles.content}>
                  <View style={styles.imgRepairman}>
                  <Image source={{uri: item.image}} style={styles.img} />
                  </View>
                  <View style={styles.infoRepairman}>
                    <Text style={styles.nameRepairman}>{item.full_name} </Text>
                    <View style={styles.divInfo}>
                      {item.averageStar < 1 ? (
                        <>
                          <Text style={styles.averageStar}>
                            {item.averageStar}/5
                          </Text>
                          <Image
                            style={styles.iconStar}
                            source={require('../assets/Homes/emptyStar.png')}
                          />
                        </>
                      ) : (
                        <>
                          <Text style={styles.averageStar}>
                            {item.averageStar}/5
                          </Text>
                          <Image
                            style={styles.iconStar}
                            source={require('../assets/Homes/starIcon.png')}
                          />
                        </>
                      )}
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
  imgRepairman:{
    width:"30%"
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
    width:"70%"
  },
  repairmanPopular: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: '#FCA234',
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
    borderRadius:50
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
});
