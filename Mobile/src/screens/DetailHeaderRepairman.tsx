import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import useGetDetailRepairman from '../hooks/useGetDetailRepairman';
import useGetServiceOfRepairman from '../hooks/useGetServiceOfRepairman';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailCommentRepairman from './DetailCommentRepairman';
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
const DetailHeaderRepairman = () => {
  const route = useRoute();
  const {id}: any = route.params;
  const {repairman} = useGetDetailRepairman(id);
  const {serviceOfRepairman, isLoading, isError} = useGetServiceOfRepairman(id);
  const navigation: any = useNavigation();
  if (isLoading) {
    return (
      <View style={{alignItems: 'center', flex:1, justifyContent:"center"}}>
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
  return (
    <View style={styles.containerHeaderRepairman}>
      <View style={styles.info}>
        <Image style={styles.imgRp} source={{uri: repairman?.image}} />
      </View>
      <Text style={styles.title}>Thông tin cá nhân</Text>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>Họ và tên: </Text>
        <Text style={styles.content}>{repairman?.full_name}</Text>
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>Số điện thoại: </Text>
        <Text style={styles.content}>{repairman?.number_phone}</Text>
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>Địa chỉ:</Text>
        <Text numberOfLines={1} style={styles.content}>
          {' '}
          {repairman?.address}
        </Text>
      </View>
      <View style={styles.containerService}>
        <Text style={styles.service}>Dịch vụ</Text>
        <View style={{marginHorizontal: 20}}>
          {serviceOfRepairman.length > 0 ? (
            <FlatList
              data={serviceOfRepairman as typeService[]}
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
                  <View style={styles.contents}>
                    <View style={styles.imgSer}>
                      <Image source={{uri: item.image}} style={styles.img} />
                    </View>
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
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.noService}>(Chưa có dịch vụ nào!)</Text>
            </View>
          )}
        </View>
      </View>
      <DetailCommentRepairman />
    </View>
  );
};

export default DetailHeaderRepairman;

const styles = StyleSheet.create({
  noService: {
    fontSize: 15,
    color: 'black',
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  containerHeaderRepairman: {
    flex: 1,
  },
  info: {
    alignItems: 'center',
    paddingTop: 10,
  },
  imgRp: {
    borderWidth: 4,
    borderColor: '#394C6D',
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  detailInfo: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    paddingTop: 10,
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  titless: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  titlesss: {
    fontSize: 18,
    color: '#FCA234',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FCA234',
    padding: 3,
  },
  content: {
    fontSize: 18,
  },
  containerService: {
    marginTop: 20,
  },
  service: {
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#394C6D',
    width: '100%',
    height: 132,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {
    flexDirection: 'row',
  },
  imgSer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  infos: {
    width: '60%',
    justifyContent: 'center',
  },
  nameRepairman: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  price: {
    color: '#FCA234',
    fontSize: 18,
    paddingVertical: 10,
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
  description: {
    color: '#394C6D',
  },
});
