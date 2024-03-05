import React from 'react';
import {View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HeaderNotification = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.title} source={require('../assets/Headers/headerFAN.png')} />
      <TouchableOpacity >
      <AntDesign name="wechat" size={35} color="#394C6D" />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#394C6D',
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  header: {
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"space-between",
   width:"100%"
  
  },
  title: {
    height:40,
    width:220,
  },
});

export default HeaderNotification;
