import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import useGetNotificationBooking from '../../../hooks/useGetNotificationBooking';
import LoaderKit from 'react-native-loader-kit';
import moment from 'moment';
import 'moment-duration-format';
interface typeService {
  _id: string;
  booking_id: string;
  titleRepairman: string;
  bodyRepairman: string;
  status: string;
  user_id: string;
  titleRepairmanFinder: string;
  bodyRepairmanFinder: string;
  image: string;
  desc: string;
  updatedAt: string;
  service_id:{
    image:string
  };

}
const Notification = () => {
  const [clicked, setClicked] = useState({});
  const {notifications, isLoading, isError} = useGetNotificationBooking();
  console.log(notifications);

  if (isLoading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LoaderKit
          style={styles.loadingText}
          name={'BallPulse'}
          color={'#FCA234'}
        />
      </View>
    );
  }
  if (notifications.length === 0) {
    return <Text>Services not available!</Text>;
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  // const handlePress = () => {
  //   setClicked(true);
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications as typeService[]}
        keyExtractor={notification => notification._id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.layout,
              {backgroundColor: clicked ? '#ffffff' : '#FFC278'},
            ]}>
            <View style={styles.notificationContainer}>
              <View style={styles.avatarShop}>
                <Image
                  style={styles.avatar}
                  source={{uri:item?.service_id.image}}
                />
              </View>
              <View style={styles.contentNotification}>
                <Text style={styles.title}>{item?.titleRepairmanFinder || item?.titleRepairman}</Text>
                <Text numberOfLines={3}>{item?.bodyRepairmanFinder || item?.bodyRepairman}</Text>
                <Text style={styles.time}>
                {moment
                    .duration(moment().diff(moment(item.updatedAt))).format(' D [ngày] h [giờ]')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: 50,
    height: 50,
  },
  time: {
    color: 'blue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius:50,
    borderWidth:1,
    borderColor:"#394C6D"
  },
  container: {
    flex: 1,
  },
  layout: {
    paddingVertical: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  avatarShop: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentNotification: {
    width: '75%',
    padding: 10,
  },
  openView: {
    width: '10%',
  },
});
