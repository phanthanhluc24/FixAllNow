import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import 'moment-duration-format';
import useRepairmanFinderGetStatusBooking from '../hooks/useRepairmanFinderGetStatusBooking';
const RepairmanFinderWaitingConfirmBook = ({
  statusBooking,
  isLoading,
  isError,
  data,
}: any) => {
  const navigation: any = useNavigation();
  const navigateToDetailPage = (item: any) => () => {
    navigation.navigate('DetailViewBookSchedule', {booking_id: item});
  };
  const formatTimeAgo = (createdAt: string) => {
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
  return (
    <View style={styles.container}>
      {statusBooking && statusBooking.length > 0 && (
        <FlatList
          data={statusBooking}
          keyExtractor={statusBooking => statusBooking._id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.cartService}
              onPress={navigateToDetailPage(item._id)}>
              <View style={styles.headerCart}>
                <View style={styles.nameShop}></View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.waitPayment}>{item.status}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <View style={styles.content}>
                  <View style={styles.image}>
                    <Image
                      source={{uri: item.service_id.image}}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infos}>
                      <Text numberOfLines={1} style={styles.nameRepairman}>
                        {item.service_id.service_name}
                      </Text>
                      <Text numberOfLines={1} style={styles.description}>
                        {item.desc}
                      </Text>
                      <View style={styles.infoService}>
                        <View>
                          <View style={styles.timeBook}>
                            <Text style={styles.dateTime}>
                            {formatTimeAgo(item.createdAt)}
                            </Text>
                            
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.totalPayment}></View>
            </TouchableOpacity>
          )}
        />
      )}
      {
        statusBooking && statusBooking.length <= 0 &&(
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <Text style={{color: '#FCA234', fontWeight: 'bold'}}>
              Chưa có đơn nào?
            </Text>
          </View>
        )
      }
    </View>
  );
};

export default RepairmanFinderWaitingConfirmBook;

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  // loadingText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'gray',
  //   textAlign: 'center',
  //   marginTop: 10,
  // },
  timeBook: {
   
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateTime: {
    color: 'blue',
  },
  nameConfirm: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#394C6D',
    borderRadius: 5,
    width: '90%',
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgrounds: {
    backgroundColor: '#FCA234',
    borderRadius: 5,
    width: '90%',
    height: 40,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '60%',
  },
  imageTotal: {
    width: 30,
    height: 30,
  },
  totalPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoService: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#394C6D',
  },
  nameRepairman: {
    fontSize: 18,
    color: '#394C6D',
    fontWeight: 'bold',
  },
  vnd: {
    fontSize: 15,
    color: '#394C6D',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    color: '#394C6D',
    width: 'auto',
    paddingVertical: 5,
  },
  description: {
    width: '100%',
    color: '#394C6D',
  },
  image: {
    width: '15%',
  },
  info: {
    marginHorizontal: 20,
    width: '70%',
  },
  infos: {
    marginHorizontal: 10,
  },

  waitPayment: {
    color: '#394C6D',
    fontWeight: 'bold',
  },
  nameService: {
    fontWeight: 'bold',
    color: 'black',
  },
  groundNameApp: {
    // backgroundColor:"#394C6D",
    // borderRadius:5
  },
  nameApp: {
    color: '#FCA234',
    backgroundColor: '#394C6D',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  cartService: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameShop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
