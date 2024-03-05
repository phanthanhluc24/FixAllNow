import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RepairmanFinderFollowProcessing from './RepairmanFinderFollowProcessing';
import RepairmanFinderDeconfirmBooking from './RepairmanFinderDeconfirmBooking';
import RepairmanFinderReviewAccomplishedRepair from './RepairmanFinderReviewAccomplishedRepair';
import RepairmanFinderWaitingConfirmBook from './RepairmanFinderWaitingConfirmBook';
const ProfileBodyRepairmanFinder = () => {
  const navigation: any = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);
  const renderComponent = () => {
    switch (selectedTab) {
      case 0:
        return <RepairmanFinderWaitingConfirmBook />;
      case 1:
        return <RepairmanFinderDeconfirmBooking />;
      case 2:
        return <RepairmanFinderFollowProcessing />;
      case 3:
        return <RepairmanFinderReviewAccomplishedRepair />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.containerProfileBodyRepairmanFinder}>
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
                Đơn đã hủy
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
                Đang thực hiện
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
                Đã hoàn thành
              </Text>
            </TouchableOpacity>
           
          </ScrollView>
        </View>
      <View>{renderComponent()}</View>
    </View>
  );
};
export default ProfileBodyRepairmanFinder;

const styles = StyleSheet.create({
  listHistory: {
    height: 50,
  },
  eventButton: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FCA234',
    height: 50,
    width:140
  },
  titleButton: {
    color: '#394C6D',
  },
  selectedButton: {
    backgroundColor: '#394C6D',
  },
  selectedText: {
    color: 'white',
  },
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#394C6D',
    width: '90%',
    height: 120,
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  hello: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FCA234',
    width: '90%',
  },
  detaildemo: {
    fontSize: 13,
    color: '#FFFFFF',
    width: '90%',
  },
  containerProfileBodyRepairmanFinder: {
    flex: 1,
  },
  profileBodyRepairmanFinder: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  nameAccount: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FCA234',
    paddingVertical: 10,
  },
  nameSecurity: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameAddress: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameBank: {
    fontSize: 20,
    color: '#394C6D',
  },
  nameLanguage: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#394C6D',
  },
});
