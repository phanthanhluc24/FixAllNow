import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RepairmanConfirmBooking from './RepairmanConfirmBooking';
import useRepairmanConfirmStatusBooking from '../hooks/useRepairmanConfirmStatusBooking';
const HistoryStore = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let transformedSelectedTab = selectedTab + 1;
  const {statusBooking, isLoading }:any = useRepairmanConfirmStatusBooking(transformedSelectedTab);
  const renderComponent = () => {
  return <RepairmanConfirmBooking statusBooking={statusBooking} isLoading={isLoading} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.listHistory} >
          <TouchableOpacity
            onPress={() => setSelectedTab(0)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 0 ? styles.selectedText : null,
              ]}>
              Xác nhận
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           
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
            onPress={() => setSelectedTab(2)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 2 ? styles.selectedText : null,
              ]}>
              Đã hủy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab(3)}>
            <Text
              style={[
                styles.titleButton,
                selectedTab === 3 ? styles.selectedText : null,
              ]}>
                Đã hoàn thành
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={{marginBottom:70}}>{renderComponent()}</View>
    </View>
  );
};

export default HistoryStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHistory: {
    height: 50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    width:"100%",
    borderBottomWidth:1,
    borderBottomColor:'#FCA234',
    
  },
  eventButton: {
    
    justifyContent: 'center',
    alignItems: 'center',
    
    borderBottomColor: '#FCA234',
    height: 50,
  },
  titleButton: {
    color: '#394C6D',
    fontWeight:"bold",
  },
  selectedButton: {
    color: '#FCA234',
  },
  selectedText: {
    color: '#FCA234',
    fontWeight:"bold",
  },
});
