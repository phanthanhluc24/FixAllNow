import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import useGetDetailService from '../hooks/useGetDetailService';
import {useNavigation} from '@react-navigation/native';
import useGetServiceRevolve from '../hooks/useGetServiceRevolve';
import DetailServiceButton from './DetailServiceButton';
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
const DetailInfoService = () => {
  const route = useRoute();
  const {id}: any = route.params;
  const navigation: any = useNavigation();
  const {serviceRevolve} = useGetServiceRevolve(id);
  const {service, isLoading, isError} = useGetDetailService(id);
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
    return <Text>Error loading info service</Text>;
  }
  return (
    <View>
      <View style={styles.infoServices}>
        <Image source={{uri: service?.image}} style={styles.imageSer}></Image>
        <View style={styles.infoStyle}>
          <Text numberOfLines={2} style={styles.nameStyle}>
            {service?.service_name}
          </Text>
          <Text style={styles.priceStyle}>
            {service?.price.toLocaleString('vi-VN')}
            {' VND'}
          </Text>
          <Text style={styles.description}>{service?.desc}</Text>
        </View>

        <View style={styles.oneLine}></View>
        <View style={styles.infoUser}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailRepairman', {
                id: service?.user_id._id,
                title: service?.user_id.full_name,
              })
            }
            style={styles.containerInfoUser}>
            <Image
              source={{uri: service?.user_id.image}}
              style={styles.imageStyle}></Image>
            <View style={styles.buttonEvent}>
              <Text style={styles.fullName}>{service?.user_id.full_name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.listServiceRevolve}>
          <Text style={styles.serviceRevolve}>Dịch vụ liên quan</Text>
          <View style={{marginHorizontal: 10}}>
            {serviceRevolve.length > 0 ? (
              <FlatList
                data={serviceRevolve as typeService[]}
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
                <Text style={styles.noService}>
                  (Không có dịch vụ liên quan!)
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <DetailServiceButton serviceInfo={service} />
    </View>
  );
};
export default DetailInfoService;
const styles = StyleSheet.create({
  noService: {
    fontSize: 15,
    color: '#FCA234',
  },
  serviceRevolve: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
    marginHorizontal: 10,
  },
  buttonEvent: {},
  detailRepairman: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  buttonView: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#FCA234',
    borderWidth: 2,
    height: 30,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  fullName: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FCA234',
    borderWidth: 2,
  },
  containerInfoUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoUser: {
    width: '100%',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  infoServices: {
    flex: 9,
  },
  belowInfoService: {
    flex: 1,
  },
  imageSer: {
    width: '100%',
    height: 300,
  },
  infoStyle: {
    marginHorizontal: 15,
    marginTop: 13,
  },
  nameStyle: {
    color: '#394C6D',
    fontSize: 25,
    fontWeight: 'bold',
    width: '90%',
  },
  description: {
    color: '#394C6D',
    fontSize: 15,
  },
  priceStyle: {
    color: '#FCA234',
    fontWeight: 'bold',
    fontSize: 20,
    width: '40%',
  },
  oneLine: {
    width: '100%',
    backgroundColor: '#FCA234',
    height: 1,
    marginTop: 15,
  },
  repairman: {
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FCA234',
    width: '100%',
    height: 132,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  listServiceRevolve: {
    flex: 1,
    width: '100%',
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
    borderRadius:10,
    borderWidth:3,
    borderColor:"#FCA234"
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
});
