import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useGetRateComment from '../hooks/useGetRateComment';
import LoaderKit from 'react-native-loader-kit';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
interface typeRateComment {
  _id: string;
  content: String;
  star: number;
  commenter_id: {
    _id: string;
    image: string;
    full_name: string;
  };
}
const DetailCommentRepairman = ({repairman_id}: any) => {
  const navigation: any = useNavigation();
  const {rateComment, isLoading, isError} = useGetRateComment(repairman_id);
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

  const renderStars = (star: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={star >= i ? 'star' : 'star-o'}
          size={20}
          color={star >= i ? '#FFD700' : '#394C6D'}
        />,
      );
    }
    return stars;
  };

  return (
    <>
           <FlatList
            data={rateComment as typeRateComment[]}
            keyExtractor={rateComment => rateComment._id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.containerRatedComment}>
                <View style={styles.comment}>
                  <View style={styles.avatar}>
                    <Image
                      style={styles.avatarComment}
                      source={{uri: item?.commenter_id.image}}
                    />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.nameCommenter}>
                      {item.commenter_id.full_name}
                    </Text>
                    <View style={styles.star}>{renderStars(item.star)}</View>
                  </View>
                </View>
                <View>
                  <Text style={styles.comments}>{item.content}</Text>
                 
                </View>
              </TouchableOpacity>
            )}
          />
        {/* </View>
      </View> */}
    </>
  );
};
export default DetailCommentRepairman;
const styles = StyleSheet.create({
  title:{
    marginVertical:10
  },
  nameCommenter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  noComment: {
    fontSize: 15,
    color: '#FCA234',
    fontWeight:"bold"
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
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
    marginVertical: 10,
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
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarComment: {
    width: 46,
    height: 46,
    borderRadius: 100,
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
