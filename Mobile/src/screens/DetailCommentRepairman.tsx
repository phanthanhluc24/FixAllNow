import {StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useGetRateComment from '../hooks/useGetRateComment';
import LoaderKit from 'react-native-loader-kit';
interface typeRateComment{
  _id:string
}
const DetailCommentRepairman = () => {
  const navigation: any = useNavigation();
  const {rateComment, isLoading, isError} = useGetRateComment();
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
  if (rateComment.length === 0) {
    return <Text>Services not available!</Text>;
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  return (
    <View style={{marginBottom: 10}}>
      <View style={styles.rateComment}>
        <View style={styles.containerTitle}>
          <View style={styles.rating}>
            <Text style={styles.titless}>Đánh giá:(30)</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RatedComment')}>
              <Text style={styles.titlesss}>Đánh giá ngay!</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('RatedComment')}>
            <Text style={styles.suggest}>
              Hãy xem họ nói gì về tôi bạn nhé!
            </Text>
          </TouchableOpacity>
          <FlatList
            data={rateComment as typeRateComment[]}
            keyExtractor={rateComment => rateComment._id}
            renderItem={({item}) => (
              <View style={styles.containerRatedComment}>
                <View style={styles.comment}>
                  <View style={styles.avatar}>
                    <Image
                      style={styles.avatarComment}
                      source={require('../assets/Homes/avatars.png')}
                    />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.comments}>
                      Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâm Thợ rất
                      tận tâm Thợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ
                      rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận
                      tâmThợ rất tận tâm
                    </Text>
                    <Image source={require('../assets/Homes/star.png')} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default DetailCommentRepairman;
const styles = StyleSheet.create({
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
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
  containerRatedComment: {
    flex: 9,
  },
  bottom: {
    flex: 1,
    marginHorizontal: 20,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  writeComment: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#394C6D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarComment: {
    width: 50,
    height: 50,
  },
  content: {
    width: '80%',
  },
  comments: {
    fontSize: 16,
    color: '#394C6D',
    marginVertical: 10,
  },
});
