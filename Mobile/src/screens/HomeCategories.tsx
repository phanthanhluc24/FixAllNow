import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import useAutoplay from '../hooks/useAutoPlay';
import useGetServicePopular from '../hooks/useGetServicePopular';
import useGetCategoryService from '../hooks/useGetCategoryService';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
interface typeCategory {
  _id: string;
  name: string;
  image: string;
}
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const HomeCategories = () => {
  const navigation:any= useNavigation();
  const {services} = useGetServicePopular();
  const carouselRef = useRef<Carousel<typeService>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useAutoplay(services?.length || 0, currentIndex, setCurrentIndex);
  const {categories, isLoading, isError} = useGetCategoryService();
  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (isError) {
    return <Text style={styles.error}>Error loading categories</Text>;
  }

  return (
    <View style={styles.containerCategory}>
      {/* <View style={styles.container}>
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
      </View> */}
      <Carousel
        data={services || []}
        renderItem={({item}: any) => (
          <View style={styles.imgTitle}>
            <ImageBackground source={{uri: item.image}} style={styles.imgs}>
              <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('DetailService', {id: item._id,title:item.service_name})}>
                <View style={styles.content}>
                  <View style={{width: '70%'}}>
                    <Text numberOfLines={1} style={styles.hello}>
                      {item.service_name}
                    </Text>
                    <Text numberOfLines={3} style={styles.detaildemo}>
                      {item.desc}
                    </Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <Image
                      style={styles.logoSetting}
                      source={require('../assets/Homes/logo_setting.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width - 30}
        loop
        autoplayInterval={3000}
        enableSnap
        onSnapToItem={index => setCurrentIndex(index)}
        autoplay={true}
      />
      <View style={styles.detailCategory}>
        <FlatList
          data={categories as typeCategory[]}
          keyExtractor={categories => categories._id}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('ListOfElectrician', {
                  id: item._id,
                  title: item.name,
                })
              }>
              <View style={styles.imgCategory}>
                <Image
                  source={{uri: item.image}}
                  style={styles.img}
                  blurRadius={0}
                />
              </View>
              <View style={styles.nameCategory}>
                <Text numberOfLines={1} style={styles.titleCategory}>
                  {item.name}
                </Text>
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
  logoSetting: {
    width: 100,
    height: 100,
  },
  imgs: {
    width: 345,
    height: 250,
    borderRadius: 20,
  },
  contents: {
    color: '#394C6D',
    fontWeight: 'bold',
    fontSize: 22,
  },
  imgContent: {
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: '55%',
    backgroundColor: '#FCA234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentdescription: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FCA234',
    height: 80,
    backgroundColor: '#394C6D',
  },
  imgTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  load: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCategory: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#394C6D',
    width: '90%',
    height: 120,
    marginTop: '35%',
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
    width: '90%',
  },
  detaildemo: {
    fontSize: 13,
    color: '#FFFFFF',
    width: '90%',
  },
  detailCategory: {
    marginHorizontal: 20,
    paddingTop: 10,
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
    width: 110,
    justifyContent: 'center',
    height: 'auto',
    padding: 5,
  },
  titleCategory: {
    color: '#394C6D',
    fontSize: 15,
    padding: 5,
  },
  img: {
    width: 35,
    height: 35,
    // resizeMode: 'cover',
    borderRadius: 40,
    // borderWidth:2,
    // borderColor:"black"
  },
  nameCategory: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCategory: {
    width: 63,
    height: 63,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    marginHorizontal: 20,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
});
