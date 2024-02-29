import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import ConfirmedPage from './ConfirmedPage';
import Deconfirmedpage from './Deconfirmedpage';
import ProgressPage from './ProgressPage';
import AccomplishedPage from './AccomplishedPage';
import ReviewsPage from './ReviewsPage';
const HistoryStore = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const renderComponent = () => {
    switch (selectedTab) {
      case 0:
        return <ConfirmedPage />;
      case 1:
        return <Deconfirmedpage />;
      case 2:
        return <ProgressPage />;
        case 3:
          return <AccomplishedPage />;
          case 4:
            return <ReviewsPage />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View>
      <ScrollView style={styles.listHistory} horizontal={true}>
      <TouchableOpacity
          style={[styles.eventButton, selectedTab === 0 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(0)}>
          <Text style={[styles.titleButton, selectedTab === 0 ? styles.selectedText : null]}>Đã xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 1 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(1)}>
          <Text style={[styles.titleButton, selectedTab === 1 ? styles.selectedText : null]}>Đã hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 2 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(2)}>
          <Text style={[styles.titleButton, selectedTab === 2 ? styles.selectedText : null]}>Đang thực hiện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 3 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(3)}>
          <Text style={[styles.titleButton, selectedTab === 3 ? styles.selectedText : null]}>Đã hoàn thành</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.eventButton, selectedTab === 4 ? styles.selectedButton : null]}
          onPress={() => setSelectedTab(4)}>
          <Text style={[styles.titleButton, selectedTab === 4 ? styles.selectedText : null]}>Xem đánh giá</Text>
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