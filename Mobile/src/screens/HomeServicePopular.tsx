import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useGetServicePopular from '../hooks/useGetServicePopular';
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
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
  const navigation: any = useNavigation();
  const {services, isLoading, isError} = useGetServicePopular();
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
  if (services.length === 0) {
    return <Text>Không có dịch vụ nào!</Text>;
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
          <TouchableOpacity
            style={styles.repairman}
            onPress={() =>
              navigation.navigate('DetailService', {
                id: item._id,
                title: item.service_name,
              })
            }>
            <View style={styles.content}>
              <View style={styles.image}>
                <Image source={{uri: item.image}} style={styles.img} />
              </View>
              <View style={styles.info}>
                <View style={styles.infos}>
                  <Text numberOfLines={1} style={styles.nameRepairman}>
                    {item.service_name}
                  </Text>
                  <View style={styles.prices}>
                    <Text style={styles.price}>
                      {item.price.toLocaleString('vi-VN')}
                    </Text>
                    <Text style={styles.vnd}> VND</Text>
                  </View>
                  <Text numberOfLines={2} style={styles.description}>
                    {item.desc}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius:50,
    borderWidth:3,
    borderColor:"#FCA234",
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  description: {
    width: '100%',
    color: '#FFFFFF',
  },
  image: {
    width: '30%',
  },
  info: {
    marginHorizontal: 20,
    width: '70%',
  },
  infos: {
    marginHorizontal: 10,
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
