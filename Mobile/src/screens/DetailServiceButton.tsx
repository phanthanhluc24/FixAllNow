import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
const DetailServiceButton: React.FC<{ serviceInfo: typeService|any}>= ({ serviceInfo}) => {
    const navigation:any= useNavigation();
    const handleBookNow =()=>{
      navigation.navigate('MapBookingScreen',{serviceInfo})
    }
    const handleBookSchedule = () => {
      navigation.navigate('FormBookSchedule', { serviceInfo });
    };
  return (
    <View style={styles.belowInfoService}>
    <View style={styles.buttonChoose}>
      <View style={styles.buttonNow}>
        <View style={styles.button1}>
          <TouchableOpacity style={styles.bookNow} onPress={handleBookNow}>
            <Text style={styles.books}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleBookSchedule}>
          <View style={styles.book}>
            <Text style={styles.books}>Đặt lịch</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default DetailServiceButton

const styles = StyleSheet.create({
    belowInfoService: {
        flex: 1,
      },
      buttonChoose: {
        width: '100%',
      },
      buttonNow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:10
      },
      button1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      bookNow: {
        width: '80%',
        height: 50,
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      book: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15,
      },
})