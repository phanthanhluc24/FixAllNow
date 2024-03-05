import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import useGetNotificationBooking from '../../../hooks/useGetNotificationBooking';
const Notification = () => {
  const [clicked, setClicked] = useState(false);
  const {notifications, isLoading, isError} =useGetNotificationBooking();
  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (notifications.length === 0) {
    return <Text>Services not available!</Text>;
  }
  if (isError) {
    return <Text>Error loading categories</Text>;
  }
  const handlePress = () => {
    setClicked(true);
  };
  useEffect(() => {
    setClicked(true);
  }, []);
  return (
    <View style={styles.container}>
       <FlatList
        data={notifications as typeService[]}
        keyExtractor={notification => notification._id}
        renderItem={({item}) => (
      <TouchableOpacity style={[styles.layout, { backgroundColor: clicked ? 'white' : '#BCD4E6' }]} onPress={handlePress}>
        <View style={styles.notificationContainer}>
          <View style={styles.avatarShop}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/Homes/avatar.png')}
            />
          </View>
          <View style={styles.contentNotification}>
            <Text style={styles.title}>Hello fixallnow</Text>
            <Text numberOfLines={3}>
              {' '}
              sự kiện mới diễn ra sự kiện mới diễn ra sự kiện mới diễn ra sự
              kiện mới diễn ra sự kiện mới diễn ra
            </Text>
            <Text style={styles.time}>16 ngày trước</Text>
          </View>
          <View style={styles.openView}>
            <AntDesign name="ellipsis1" color="#394C6D" size={30} />
          </View>
        </View>
      </TouchableOpacity>
       )}
       />
       <TouchableOpacity style={[styles.layout, { backgroundColor: clicked ? 'white' : '#BCD4E6' }]} onPress={handlePress}>
        <View style={styles.notificationContainer}>
          <View style={styles.avatarShop}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/Homes/avatar.png')}
            />
          </View>
          <View style={styles.contentNotification}>
            <Text style={styles.title}>Hello fixallnow</Text>
            <Text numberOfLines={3}>
              {' '}
              sự kiện mới diễn ra sự kiện mới diễn ra sự kiện mới diễn ra sự
              kiện mới diễn ra sự kiện mới diễn ra
            </Text>
            <Text style={styles.time}>16 ngày trước</Text>
          </View>
          <View style={styles.openView}>
            <AntDesign name="ellipsis1" color="#394C6D" size={30} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  time: {
    color: 'blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FCA234',
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
