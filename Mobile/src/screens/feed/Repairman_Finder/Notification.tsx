import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
const Notification = () => {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(true);
  };
  useEffect(() => {
    setClicked(true);
  }, []);
  return (
    <View style={styles.container}>
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
