import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ProfileBodyRepairmanFinder = () => {
  return (
    <View style={styles.containerProfileBodyRepairmanFinder}>
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
