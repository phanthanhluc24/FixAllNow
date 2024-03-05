import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import RepairmanConfirmedBooking from './RepairmanConfirmedBooking';
import RepairmanDeconfirmedBooking from './RepairmanDeconfirmedBooking';
import RepairmanAccomplishedRepair from './RepairmanAccomplishedRepair';
import RepairmanReviewsPage from './RepairmanReviewsPage';
import RepairmanProgressConfirm from './RepairmanProgressConfirm';
import RepairmanConfirmBooking from './RepairmanConfirmBooking';
const HistoryStore = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const renderComponent = () => {
    switch (selectedTab) {
      case 0:
            return <RepairmanConfirmBooking/>;
      case 1:
        return <RepairmanConfirmedBooking/>;
      case 2:
        return <RepairmanDeconfirmedBooking/>;
      case 3:
        return <RepairmanProgressConfirm/>;
        case 4:
          return <RepairmanAccomplishedRepair/>;
          case 5:
            return <RepairmanReviewsPage/>;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View>
      <ScrollView style={styles.listHistory} horizontal={true}>
      <TouchableOpacity
          style={[styles.eventButton, selectedTab ===0 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(0)}>
          <Text style={[styles.titleButton, selectedTab === 0 ? styles.selectedText : null]}>Xác nhận</Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={[styles.eventButton, selectedTab === 1 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(1)}>
          <Text style={[styles.titleButton, selectedTab === 1 ? styles.selectedText : null]}>Đã xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 2 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(2)}>
          <Text style={[styles.titleButton, selectedTab === 2 ? styles.selectedText : null]}>Đã hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 3 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(3)}>
          <Text style={[styles.titleButton, selectedTab === 3 ? styles.selectedText : null]}>Đang thực hiện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 4 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(4)}>
          <Text style={[styles.titleButton, selectedTab === 4 ? styles.selectedText : null]}>Đã hoàn thành</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 5 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(5)}>
          <Text style={[styles.titleButton, selectedTab === 5 ? styles.selectedText : null]}>Xem đánh giá</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
      <View>
      {renderComponent()}
      </View>
    </View>
  )
}

export default HistoryStore

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHistory: {
    height: 50,
  },
  eventButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FCA234',
    height:50
  },
  titleButton: {
    color: '#394C6D',
  },
  selectedButton: {
    backgroundColor: '#FCA234',
  },
  selectedText: {
    color: 'white',
  },
})