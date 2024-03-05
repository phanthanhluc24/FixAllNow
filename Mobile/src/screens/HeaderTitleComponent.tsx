import React from 'react';
import {View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import {useNavigation} from '@react-navigation/native';
const HeaderTitleComponent = () => {
  const navigation: any = useNavigation();
  const {currentUser, isLoading, isError} = useGetCurrentUser();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.title} source={require('../assets/Headers/headerFAN.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={{uri: currentUser?.image}} style={styles.images} />
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

export default HeaderTitleComponent;
