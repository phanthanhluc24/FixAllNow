import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useGetCategoryService from '../hooks/useGetCategoryService';
import {useNavigation} from '@react-navigation/native';
interface typeCategory {
  _id: string;
  name: string;
  image: string;
}
const HomeCategories = () => {
  const navigation:any= useNavigation();
  const {data, isLoading, isError} = useGetCategoryService();
  if (isLoading) {
    return <Text style={{marginHorizontal:20}}>Loading...</Text>;
  }
  if (isError) {
    return <Text style={styles.error}>Error loading categories</Text>;
  }
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
        <FlatList
          data={data as typeCategory[]}
          keyExtractor={item => item._id}
          numColumns={3}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('ListOfElectrician')}>
              <View style={styles.imgCategory}>
              <Image source={{uri:item.image}} style={styles.img}/>
              </View>
              <View style={styles.nameCategory}>
              <Text numberOfLines={1} style={styles.titleCategory}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    paddingTop:10,
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
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
    width:110,
    justifyContent:"center",
    height:"auto",
    padding:5
  },
  titleCategory: {
    color: '#394C6D',
    fontSize: 15,
    padding: 5,
  },
  img:{
    width:80,
    height:80,
    // resizeMode: 'cover',
    borderRadius:50,
    borderWidth:2,
    borderColor:"black"
  },
  nameCategory:{
    alignItems:"center",
    justifyContent:"center"
  },
  imgCategory:{
    width:80,
    height:80,
    borderRadius:100,
    

  },
  error:{
    marginHorizontal:20
  }
});