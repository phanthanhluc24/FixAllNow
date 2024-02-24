import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const DetailCommentRepairman = () => {
    const navigation:any= useNavigation()
  return (
    <View>
      <View style={styles.rateComment}>
            <View style={styles.containerTitle}>
              <View style={styles.rating}>
                <Text style={styles.titless}>Đánh giá:(30)</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RatedComment')}>
                  <Text style={styles.titlesss}>Đánh giá ngay!</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RatedComment')}>
                <Text style={styles.suggest}>Xem đánh giá ngay nào!</Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
  )
}
export default DetailCommentRepairman
const styles = StyleSheet.create({
    rateComment: {
        marginTop: 20,
      },
      rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      suggest: {
        color: '#FCA234',
      },
      containerTitle: {
        marginHorizontal: 20,
      },
      titless: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#394C6D',
      },
      titlesss: {
        fontSize: 18,
        color: '#FCA234',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FCA234',
        padding: 3,
      },
})