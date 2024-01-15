import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const Landing = () => {
  const navigation:any = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.landingContainer}>
      <View style={styles.circularImage}>
        <Image source={require('../assets/Landing/landing.png')} style={{width:"99%", height:"80%"}} />
      </View>
      <View style={styles.landingcontent}>
        <Text numberOfLines={2} style={styles.content}>
          Tìm thợ sửa chữa tiện lợi tại đây!
        </Text>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularImage:{
    width:"80%",
    height:"60%",
    alignItems:"center",
    justifyContent:"center"
  },
  landingcontent: {
    paddingTop: 20,
  },
  content: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
