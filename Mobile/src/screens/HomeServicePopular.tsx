import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import useGetServicePopular from '../hooks/useGetServicePopular';
const HomeServicePopular = () => {
  //   const {data, isLoading, isError}= useGetService();
  // if (isLoading) {
  //     return <Text>Loading...</Text>;
  //   }

  //   if (isError) {
  //     return <Text>Error loading categories</Text>;
  //   }
  return (
    <View style={styles.containerRepairman}>
      {/* <FlatList
            data={data as typeRepairman[]}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
                <View style={styles.repairman}>
                <View style={styles.content}>
                    <Image source={{uri:item.image}} style={styles.img}/>
                    <View style={styles.info}>
                        <Text style={styles.nameRepairman}>{{item.name}}</Text>
                        
                        <Text style={styles.price}>{{item.price}}</Text>
                    
                        <Text numberOfLines={2} style={styles.description}>{{item.desc}}</Text>
                    </View>
                </View>
            </View>
            )}
          /> */}
      <View style={styles.repairman}>
        <View style={styles.content}>
          <Image
            source={require('../assets/Homes/avartarss.png')}
            style={styles.img}
          />
          <View style={styles.info}>
            <Text style={styles.nameRepairman}>Phan Thanh Lực</Text>

            <Text style={styles.price}>120.000đ</Text>

            <Text numberOfLines={2} style={styles.description}>
              (Ổ cắm điện bị nóng và nở ra khi cắm vào lỏng...)
            </Text>
          </View>
        </View>
      </View>
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
  },
  nameRepairman: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: '50%',
    paddingVertical: 5,
  },
  description: {
    width: '60%',
    color: '#FFFFFF',
  },
  info: {
    marginHorizontal: 20,
  },
});
