import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import useGetCategoryService from '../hooks/useGetCategoryService';
import { useNavigation } from '@react-navigation/native';
interface typeCategory{
    id: string,
    name: string,
    image: string,
  }
const HomeCategories = () => {
    const navigation:any= useNavigation();
//   const {data, isLoading, isError}= useGetCategoryService();
  // if (isLoading) {
  //     return <Text>Loading...</Text>;
  //   }

  //   if (isError) {
  //     return <Text>Error loading categories</Text>;
  //   }
  return (
    <View style={styles.containerCategory}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.hello}>ALO THỢ</Text>
            <Text style={styles.detaildemo}>
              Tìm kiếm thợ sửa chữa dễ dàng hơn chỉ với vài phút mà không tốn
              nhiều thời gian
            </Text>
          </View>
          <View>
            <Image source={require('../assets/Homes/demo.png')} />
          </View>
        </View>
      </View>
      <View style={styles.detailCategory}>
        <View style={styles.categories}>
          {/* <FlatList
            data={data}
            keyExtractor={category => category.id}
            renderItem={({category:typeCategory}) => (
              <View style={styles.category}>
                <Image source={{uri:category.image}} />
                <Text style={styles.titleCategory}>{category.name}</Text>
              </View>
            )}
          /> */}
          <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('ListOfElectrician')}>
            <Image source={require('../assets/Homes/thodien.png')} />
            <Text style={styles.titleCategory}>Sửa điện</Text>
          </TouchableOpacity>
          <View style={styles.category}>
            <Image source={require('../assets/Homes/thonuoc.png')} />
            <Text style={styles.titleCategory}>Sửa nước</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/Homes/cokhi.png')} />
            <Text style={styles.titleCategory}>Cơ khí</Text>
          </View>
        </View>
        <View style={styles.categories}>
          <View style={styles.category}>
            <Image source={require('../assets/Homes/xemay.png')} />
            <Text style={styles.titleCategory}>Xe máy</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/Homes/oto.png')} />
            <Text style={styles.titleCategory}>Ô tô</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/Homes/dienthoai.png')} />
            <Text style={styles.titleCategory}>Điện thoại</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCategories;

const styles = StyleSheet.create({
  containerCategory: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#394C6D',
    width: '90%',
    height: 139,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  hello: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  detaildemo: {
    fontSize: 13,
    color: '#FFFFFF',
    width: 150,
  },
  detailCategory: {
    marginHorizontal: 20,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingTop: 20,
  },
  category: {
    alignItems: 'center',
  },
  titleCategory: {
    color: '#394C6D',
    fontSize: 15,
    padding: 5,
  },
});
