import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RepairmanConfirmBooking from './RepairmanConfirmBooking';
import LoaderKit from 'react-native-loader-kit';
import useRepairmanConfirmStatusBooking from '../hooks/useRepairmanConfirmStatusBooking';
const HistoryStore = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let transformedSelectedTab = selectedTab + 1;
  const {statusBooking, isLoading }:any = useRepairmanConfirmStatusBooking(transformedSelectedTab);
  const renderComponent = () => {
    if(statusBooking.length === 0){
      <View style={{marginTop:100}}>
        <Text>Chưa có data nào!</Text>
      </View>
    }
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
        ) : (
          renderComponent()
        ) }
      </View>
    </View>
  );
};

export default HistoryStore;

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
