import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import useGetDetailRepairman from '../hooks/useGetDetailRepairman';
import useGetServiceOfRepairman from '../hooks/useGetServiceOfRepairman';
import {useNavigation} from '@react-navigation/native';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const DetailRepairman = ({route}: any) => {
  const {id} = route.params;
  // console.log(id);
  const {repairman, isLoading, isError} = useGetDetailRepairman(id);
  const {serviceOfRepairman} = useGetServiceOfRepairman(id);
  console.log(serviceOfRepairman);
  const navigation: any = useNavigation();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error loading repairman</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inforRepairman}>
        <View>
          <View style={styles.info}>
            <Image style={styles.imgRp} source={{uri: repairman?.image}} />
          </View>
          <Text style={styles.title}>Thông tin cá nhân</Text>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Họ và tên:</Text>
            <Text style={styles.content}>{repairman?.full_name}</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Nghề nghiệp:</Text>
            <Text style={styles.content}>{repairman?.category_id.name}</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Số điện thoại:</Text>
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
              <FlatList
                data={serviceOfRepairman as typeService[]}
                keyExtractor={services => services._id}
                renderItem={({item}) => (
                  <View style={styles.repairman}>
                    <View style={styles.contents}>
                      <View style={styles.imgSer}>
                        <Image source={{uri: item.image}} style={styles.img} />
                      </View>
                      <View style={styles.infos}>
                        <Text numberOfLines={1} style={styles.nameRepairman}>
                          {item.service_name}
                        </Text>
                        <View style={styles.prices}>
                          <Text style={styles.price}>{item.price}</Text>
                          <Text style={styles.vnd}>vnđ</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.description}>
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.rateComment}>
            <View style={styles.containerTitle}>
              <View style={styles.rating}>
                <Text style={styles.titless}>Đánh giá:(30)</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RatedComment')}>
                  <Text style={styles.titlesss}>Đánh giá ngay!</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RatedComment')}>
                <Text style={styles.suggest}>Xem đánh giá ngay nào!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonChoose}>
            <View style={styles.buttonNow}>
              <View style={styles.button1}>
                <View style={styles.bookNow}>
                  <Text style={styles.books}>Đặt ngay</Text>
                </View>
              </View>
              <View style={styles.button1}>
                <View style={styles.book}>
                  <Text style={styles.books}>Đặt lịch</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listService}></View>
    </ScrollView>
  );
};
export default DetailRepairman;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inforRepairman: {
    flex: 2,
  },
  listService: {
    flex: 2,
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
    fontSize: 20,
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
    fontSize: 18,
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
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  button1: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookNow: {
    width: '80%',
    height: 50,
    backgroundColor: '#394C6D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: '80%',
    height: 50,
    backgroundColor: '#FCA234',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  books: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  containerTitle: {
    marginHorizontal: 20,
  },
  rateComment: {
    marginTop: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  suggest: {
    color: '#FCA234',
  },
});
