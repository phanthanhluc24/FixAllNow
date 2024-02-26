import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React,{useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import StarRating from './StarRating';
const RatedComment = () => {
  const navigation:any = useNavigation();
  const handleRatingPress = (rating:any) => {
    console.log('Rated:', rating);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.containerRatedComment}>
          <View style={styles.comment}>
            <TextInput multiline={true}
              style={styles.input}
              placeholderTextColor={'#394C69'}
              placeholder="Hãy đánh giá theo cảm nhận của bạn!"></TextInput>
          </View>
          <Text style={styles.level}>Mức độ hài lòng:</Text>
          <StarRating rating={0} onRatingPress={handleRatingPress} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.footer}>
            <Image
              style={styles.imgFooter}
              source={require('../assets/Form/double.png')}
            />
            <TouchableOpacity
              style={styles.bgButton}
              onPress={() => navigation.navigate('ConfirmInforBooking')}>
              <Text style={styles.nameBook}>Đánh giá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RatedComment;

const styles = StyleSheet.create({
  nameBook: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FCA234',
  },
  imgFooter: {
    width: '100%',
  },
  bgButton: {
    backgroundColor: '#394C6D',
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: -20,
  },
  boxInput: {
    marginVertical: 30,
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  container: {
    flex: 1,
    backgroundColor: '#FCA234',
  },
  containerRatedComment: {
    marginHorizontal: 20,
    flex: 5,
  },
  bottom: {
    flex: 5,
    marginHorizontal: 20,
  },
  comment: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    paddingLeft: 15,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#394C6D',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
