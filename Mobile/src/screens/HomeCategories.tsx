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
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import useAutoplay from '../hooks/useAutoPlay';
import useGetServicePopular from '../hooks/useGetServicePopular';
import useGetCategoryService from '../hooks/useGetCategoryService';
import {useNavigation} from '@react-navigation/native';
import LoaderKit from 'react-native-loader-kit';
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
  const navigation: any = useNavigation();
  const {services} = useGetServicePopular();
  const carouselRef = useRef<Carousel<typeService>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useAutoplay(services?.length || 0, currentIndex, setCurrentIndex);
  const {categories, isLoading, isError} = useGetCategoryService();
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
    return <Text style={styles.error}>Error loading categories</Text>;
  }

  return (
    <View style={styles.containerCategory}>
      <Carousel
        data={services || []}
        renderItem={({item}: any) => (
          <View style={styles.imgTitle}>
            <ImageBackground source={{uri: item.image}} style={styles.imgs}>
              <TouchableOpacity
                style={styles.container}
                onPress={() =>
                  navigation.navigate('DetailService', {
                    id: item._id,
                    title: item.service_name,
                  })
                }>
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
        autoplayInterval={5000}
        enableSnap
        onSnapToItem={index => setCurrentIndex(index)}
        autoplay={true}
      />
      <View style={styles.detailCategory}>
        {/* <Text style={styles.titles}>DANH MỤC</Text> */}
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
  titles: {
    color: '#394C6D',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
});
