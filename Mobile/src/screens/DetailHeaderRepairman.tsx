import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import useGetDetailRepairman from '../hooks/useGetDetailRepairman';
import useGetServiceOfRepairman from '../hooks/useGetServiceOfRepairman';
import {useNavigation, useRoute} from '@react-navigation/native';
import DetailCommentRepairman from './DetailCommentRepairman';
import LoaderKit from 'react-native-loader-kit';
import useGetRateComment from '../hooks/useGetRateComment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment-duration-format';
interface typeService {
  _id: string;
  status: string;
  user_id: string;
  service_name: string;
  price: number;
  image: string;
  desc: string;
}
interface typeRateComment {
  _id: string;
  content: String;
  createAt:any;
  star: number;
  updatedAt: string;
  commenter_id: {
    _id: string;
    image: string;
    full_name: string;
  };
}
const DetailHeaderRepairman = ({repairman_id}: any) => {
  const {rateComment} = useGetRateComment(repairman_id);
  const route = useRoute();
  const {id}: any = route.params;
  const {repairman} = useGetDetailRepairman(id);
  const {serviceOfRepairman, isLoading, isError} = useGetServiceOfRepairman(id);
  const [showMoreComments, setShowMoreComments] = useState(false);
  const [commentsToShow, setCommentsToShow] = useState(3);
  const toggleShowMoreComments = () => {
    const remainingComments = rateComment.length - commentsToShow;
    if (remainingComments > 0 && remainingComments <= 3) {
      setCommentsToShow(commentsToShow + remainingComments);
    } 
    else if (remainingComments > 0) {
      setCommentsToShow(commentsToShow + 3);
    } 
    else {
      setShowMoreComments(false);
    }
  };
  const navigation: any = useNavigation();
  if (isLoading) {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
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
  if (isError) {
    return <Text>Error loading repairman</Text>;
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
    <View style={styles.containerHeaderRepairman}>
      <View style={styles.info}>
        <Image style={styles.imgRp} source={{uri: repairman?.image}} />
      </View>
      <Text style={styles.title}>Thông tin cá nhân</Text>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>Họ và tên: </Text>
        <Text numberOfLines={2} style={styles.content}>
          {repairman?.full_name}
        </Text>
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>SĐT: </Text>
        <Text style={styles.content}>{repairman?.number_phone}</Text>
      </View>
      <View style={styles.detailInfo}>
        <Text style={styles.titles}>Địa chỉ:</Text>
        <Text numberOfLines={2} style={styles.content}>
          {repairman?.address}
        </Text>
      </View>
      <View style={styles.containerService}>
        <Text style={styles.service}>Dịch vụ</Text>
        <View style={{marginHorizontal: 20}}>
          {serviceOfRepairman.length > 0 ? (
            <FlatList
              data={serviceOfRepairman as typeService[]}
              keyExtractor={services => services._id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.repairman}
                  onPress={() =>
                    navigation.navigate('DetailService', {
                      id: item._id,
                      title: item.service_name,
                    })
                  }>
                  <View style={styles.contents}>
                    <View style={styles.imgSer}>
                      <Image source={{uri: item.image}} style={styles.img} />
                    </View>
                    <View style={styles.infos}>
                      <Text numberOfLines={1} style={styles.nameRepairman}>
                        {item.service_name}
                      </Text>
                      <View style={styles.prices}>
                        <Text style={styles.price}>
                          {item.price.toLocaleString('vi-VN')}
                        </Text>
                        <Text style={styles.vnd}> VND</Text>
                      </View>
                      <Text numberOfLines={2} style={styles.description}>
                        {item.desc}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.noService}>(Chưa có dịch vụ nào!)</Text>
            </View>
          )}
        </View>
      </View>
      <View style={{marginBottom: 10}}>
        <View style={styles.rateComment}>
          <View style={styles.containerTitle}>
            <View style={styles.rating}>
              <Text style={styles.titlessss}>
                Đánh giá:({rateComment ? rateComment.length : 0})
              </Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.suggest}>
                Hãy xem họ nói gì về tôi bạn nhé!
              </Text>
            </View>
            {rateComment && rateComment.length > 0 && (
              <>
                {rateComment
                  .slice(0, commentsToShow)
                  .map((comment: typeRateComment, index) => 
                    {
                      
                      const formatTimeAgo = (createdAt:any) => {
                        const duration = moment.duration(moment().diff(moment(createdAt)));
                        const days = duration.days();
                        const hours = duration.hours();
                        const minutes = duration.minutes();
                      
                        if (days > 0) {
                          return `${days} ngày trước`;
                        } else if (hours > 0) {
                          return `${hours} giờ trước`;
                        } else {
                          return `${minutes} phút trước`;
                        }
                      };
                      const timeAgo = formatTimeAgo(comment.createdAt);
                      return (
                  
                    <TouchableOpacity
                      key={index}
                      style={styles.containerRatedComment}>
                      <View style={styles.comment}>
                        <View style={styles.avatar}>
                          <Image
                            style={styles.avatarComment}
                            source={{uri: comment?.commenter_id.image}}
                          />
                        </View>
                        <View style={styles.content}>
                          <Text style={styles.nameCommenter}>
                            {comment.commenter_id.full_name}
                          </Text>
                          <View style={styles.star}>
                            {renderStars(comment.star)}
                          </View>
                          <Text style={styles.time}>
                            {timeAgo}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.comments}>{comment.content}</Text>
                      </View>
                    </TouchableOpacity>
                  )})}
                {!showMoreComments && rateComment.length > commentsToShow && (
                  <TouchableOpacity onPress={toggleShowMoreComments} style={{alignItems:"center", justifyContent:"center", marginBottom:20}}>
                    <Text style={styles.noService}>Xem thêm</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailHeaderRepairman;

const styles = StyleSheet.create({
  time: {
    color: 'blue',
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

  comments: {
    fontSize: 16,
    color: '#394C6D',
    marginVertical: 10,
  },
  nameCommenter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  noComment: {
    fontSize: 15,
    color: '#FCA234',
    fontWeight: 'bold',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
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
  titlessss: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  noService: {
    fontSize: 15,
    color: '#FCA234',
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  containerHeaderRepairman: {
    flex: 1,
  },
  info: {
    alignItems: 'center',
    paddingTop: 10,
  },
  imgRp: {
    borderWidth: 4,
    borderColor: '#394C6D',
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  detailInfo: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
    width: '40%',
  },
  titless: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  content: {
    fontSize: 18,
    width: '60%',
    color: '#394C6D',
    marginHorizontal: 10,
  },
  containerService: {
    marginTop: 20,
  },
  service: {
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#394C6D',
    width: '100%',
    height: 132,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  contents: {
    flexDirection: 'row',
  },
  imgSer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#394C6D',
  },
  infos: {
    width: '60%',
    justifyContent: 'center',
  },
  nameRepairman: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  price: {
    color: '#FCA234',
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  vnd: {
    fontSize: 18,
    color: '#FCA234',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    color: '#394C6D',
  },
});
