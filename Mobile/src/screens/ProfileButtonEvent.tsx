import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ProfileButtonEvent = () => {
  const navigation:any= useNavigation();
  return (
    <View style={styles.containerEvent}>
     <View style={styles.styleEvent}>
      <TouchableOpacity style={styles.addService} onPress={()=>navigation.navigate('FormAddNewService')}><Text style={styles.nameAddService}>Thêm mới dịch vụ</Text></TouchableOpacity>
      <TouchableOpacity style={styles.viewHistory}><Text style={styles.nameViewHistory}onPress={()=>navigation.navigate('HistoryStore')}>Lịch sử cửa hàng</Text></TouchableOpacity>
     </View>
    </View>
  )
}

export default ProfileButtonEvent

const styles = StyleSheet.create({
  nameAddService:{
    marginHorizontal:10,
    fontSize:15,
    fontWeight:"bold",
    color:"#394C6D"
  },
  nameViewHistory:{
    marginHorizontal:10,
    fontSize:15,
    fontWeight:"bold",
    color:"#394C6D"
  },
  viewHistory:{
    backgroundColor:"#FCA234",
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
  },
  addService:{
    backgroundColor:"#FCA234",
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  },
  containerEvent:{
    flex:1,
    backgroundColor:"#394C6D",
    
  },
  styleEvent:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    paddingVertical:20,
  }
})