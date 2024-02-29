import {StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ProfileBodyRepairmanFinder = () => {
  const navigation:any= useNavigation();
  return (
    <View style={styles.containerProfileBodyRepairmanFinder}>
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("Home")}>
        <View style={styles.content}>
          <View style={{width: '70%'}}>
            <Text style={styles.hello}>ALO THỢ</Text>
            <Text style={styles.detaildemo}>
              Tìm kiếm thợ sửa chữa dễ dàng hơn chỉ với vài phút mà không tốn
              nhiều thời gian
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <Image source={require('../assets/Homes/demo.png')} />
          </View>
        </View>
      </TouchableOpacity> 
      <View style={styles.profileBodyRepairmanFinder}>
        <View>
          <Text style={styles.nameAccount}>Tài khoản</Text>
          <Text style={styles.nameSecurity}>Tài khoản và bảo mật</Text>
          <Text style={styles.nameAddress}>Địa chỉ</Text>
          <Text style={styles.nameBank}>Tài khoản/Ngân hàng</Text>
        </View>
        <View>
          <Text style={styles.nameAccount}>Cài đặt</Text>
          <Text style={styles.nameSecurity}>Cài đặt chat</Text>
          <Text style={styles.nameSecurity}>Cài đặt thông báo</Text>
          <Text style={styles.nameSecurity}>Ngôn ngữ:</Text>
          <Text style={styles.nameLanguage}>Tiếng việt</Text>
        </View>
        <View>
          <Text style={styles.nameAccount}>Hỗ trợ</Text>
          <Text style={styles.nameSecurity}>Trung tâm hỗ trợ</Text>
          <Text style={styles.nameSecurity}>Tiêu chuẩn cộng đồng</Text>
          <Text style={styles.nameSecurity}>Yêu cầu xóa tài khoản</Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileBodyRepairmanFinder;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#394C6D',
    width: '90%',
    height: 120,
    marginTop:10
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
    marginVertical:15
  },
  nameAccount:{
    fontWeight:"bold",
    fontSize:15,
    color:"#FCA234",
    paddingVertical:10,
  },
  nameSecurity:{
    fontSize:20,
    color:"#394C6D",
  },
  nameAddress:{
    fontSize:20,
    color:"#394C6D",
  },
  nameBank:{
    fontSize:20,
    color:"#394C6D",
  },
  nameLanguage:{
    marginHorizontal:20,
    fontSize:15,
    color:"#394C6D",
  }
});
