import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text , Button} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
const Shop = () => {
  const [data, setData] = useState('Initial Data');

  const handleButtonPress = (option: string) => {
    switch(option) {
      case '1':
        setData('Data for Option 1');
        break;
      case '2':
        setData('Data for Option 2');
        break;
      case '3':
        setData('Data for Option 3');
        break;
      default:
        setData('Initial Data');
    }
  };

  const ratingCompleted = (rating: any) => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View style={styles.container}>
      <Button title="1" onPress={() => handleButtonPress('1')} />
      <Button title="2" onPress={() => handleButtonPress('2')} />
      <Button title="3" onPress={() => handleButtonPress('3')} />

      <Text>{data}</Text>
    </View>
  );
};


export default Shop;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
