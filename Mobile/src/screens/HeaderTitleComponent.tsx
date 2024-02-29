import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const HeaderTitleComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.title} source={require('../assets/Headers/headerFAN.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height:"100%",
    backgroundColor: '#27ae60', // Màu nền của header
    paddingVertical: 15, // Khoảng cách giữa phần nội dung và viền của header
    paddingHorizontal: 20, // Khoảng cách giữa phần nội dung và viền của header
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    borderBottomWidth: 1, // Độ dày của đường viền dưới
    borderBottomColor: '#2ecc71', // Màu của đường viền dưới
    
  },
  title: {
    height:40,
    width:220,
  },
});

export default HeaderTitleComponent;
