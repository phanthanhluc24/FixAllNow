import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import useGetNotificationBooking from '../../../hooks/useGetNotificationBooking';
import LoaderKit from 'react-native-loader-kit';
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
}
const Notification = () => {
  const [clicked, setClicked] = useState({});
  const {notifications, isLoading, isError} = useGetNotificationBooking();
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
              {backgroundColor: clicked ? '#A3C5FF' : '#BCD4E6'},
            ]}>
            <View style={styles.notificationContainer}>
              <View style={styles.avatarShop}>
                <Image
                  style={styles.avatar}
                  source={require('../../../assets/Homes/avatar.png')}
                />
              </View>
              <View style={styles.contentNotification}>
                <Text style={styles.title}>{item?.titleRepairmanFinder}</Text>
                <Text numberOfLines={3}> {item?.bodyRepairmanFinder}</Text>
                <Text style={styles.time}>16 ngày trước</Text>
              </View>
              <View style={styles.openView}>
                <AntDesign name="ellipsis1" color="#394C6D" size={30} />
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
  },
  container: {
    flex: 1,
  },
  layout: {
    borderBottomWidth: 1,
    borderBottomColor: '#394C6D',
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
