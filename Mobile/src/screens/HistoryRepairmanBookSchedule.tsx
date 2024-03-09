import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RepairmanFinderWaitingConfirmBook from './RepairmanFinderWaitingConfirmBook';
import useRepairmanFinderGetStatusBooking from '../hooks/useRepairmanFinderGetStatusBooking';
import useGetBookingNoRated from '../hooks/useGetBookingNoRated';
const HistoryRepairmanBookSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let transformedSelectedTab = selectedTab + 1;

  if (transformedSelectedTab != 5) {
    var {statusBooking} = useRepairmanFinderGetStatusBooking(
      transformedSelectedTab,
    );
  }

  const {bookingNorating}: any = useGetBookingNoRated();
  console.log(bookingNorating);

  const renderComponent = () => {
    switch (transformedSelectedTab) {
      case 5:
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <RepairmanFinderWaitingConfirmBook statusBooking={statusBooking} />
        );
      default:
        return <View>Unexpected tab value: {transformedSelectedTab}</View>; // Handle unexpected cases
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <ScrollView style={styles.listHistory} horizontal={true}>
          <TouchableOpacity
            style={[
              styles.eventButton,
              selectedTab === 0 ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedTab(0)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 0 ? styles.selectedText : null,
              ]}>
              Chờ xác nhận
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eventButton,
              selectedTab === 1 ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedTab(1)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 1 ? styles.selectedText : null,
              ]}>
              Đã xác nhận
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eventButton,
              selectedTab === 2 ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedTab(2)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 2 ? styles.selectedText : null,
              ]}>
              Đơn đã hủy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eventButton,
              selectedTab === 3 ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedTab(3)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 3 ? styles.selectedText : null,
              ]}>
              Đã hoàn thành
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.eventButton,
              selectedTab === 4 ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedTab(4)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 4 ? styles.selectedText : null,
              ]}>
              Chưa đánh giá
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{marginBottom: 70}}>{renderComponent()}</View>
    </View>
  );
};
export default HistoryRepairmanBookSchedule;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedButton: {
    backgroundColor: '#394C6D',
  },
  eventButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FCA234',
    height: 50,
    width: 140,
  },
  listHistory: {
    height: 50,
    // flexDirection:"row",
    // alignItems:"center",
    // justifyContent:"space-around",
    // width:"100%",
    // borderBottomWidth:1,
    // borderBottomColor:'#FCA234',
  },

  titleButton: {
    color: '#394C6D',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#FCA234',
    fontWeight: 'bold',
  },
});
