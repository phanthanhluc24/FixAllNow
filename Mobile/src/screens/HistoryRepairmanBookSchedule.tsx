import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import React, {useState} from 'react';
import RepairmanFinderWaitingConfirmBook from './RepairmanFinderWaitingConfirmBook';
import useRepairmanFinderGetStatusBooking from '../hooks/useRepairmanFinderGetStatusBooking';
import RepairmanFinderConfirmRatingComment from './RepairmanFinderConfirmRatingComment';
const HistoryRepairmanBookSchedule = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let transformedSelectedTab = selectedTab + 1;

  const {statusBooking ,isLoading, isError} = useRepairmanFinderGetStatusBooking(
    transformedSelectedTab,
  );
  const renderComponent = () => {
    switch (transformedSelectedTab) {
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <RepairmanFinderWaitingConfirmBook statusBooking={statusBooking} />
        );
      default:
        return <RepairmanFinderConfirmRatingComment/>;
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
      <View style={{marginBottom: 70 , alignItems:"center"}}>
        {isLoading ? (
          <View style={{alignItems: 'center', justifyContent:"center"}}>
          <Text>
            <LoaderKit
              style={styles.loadingText}
              name={'BallPulse'}
              color={'#FCA234'}
            />
          </Text>
        </View>
        ) : statusBooking ? (
          renderComponent()
        ) : (
          <View style={{flex:1}}>
          <Text style={styles.noDataText}>Không có dữ liệu được tìm thấy.</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default HistoryRepairmanBookSchedule;
const styles = StyleSheet.create({
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 200,
    color:"#FCA234",
  },
  loadingText: {
    fontSize: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    width: 50,
    height: 50,
    marginTop:100
  },
  container: {
    flex: 1,
  },
  selectedButton: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#FCA234',
  },
  eventButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#394C6D',
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
