import {StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ConfirmInforBooking = () => {
    const navigation:any= useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleConfirm}>
        <Text style={styles.title}>XÁC NHẬN THÔNG TIN</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoService}>
          <Text style={styles.titleInfo}>Thông tin dịch vụ</Text>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Đơn sửa:</Text>
            <Text style={styles.infors}>Sửa ô tô</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Thợ:</Text>
            <Text style={styles.infors}>Trần Quốc Hữu</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Gía sửa:</Text>
            <Text style={styles.infors}>1.500.000</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Phí dịch vụ:</Text>
            <Text style={styles.infors}>70.000</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Phí di chuyển:</Text>
            <Text style={styles.infors}>10.000</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Địa điểm:</Text>
            <Text style={styles.infors}>Bến xe trung tâm</Text>
          </View>
          <View style={styles.styleInfo}>
            <Text style={styles.infor}>Tổng:</Text>
            <Text style={styles.infors}>12.000.000</Text>
          </View>
        </View>
        <View style={styles.infoService}>
          <Text style={styles.titleInfo}>Chọn phương thức thanh toán</Text>
          <View style={styles.method}>
            <View style={styles.buttonMethod}>
                <Image  source={require('../assets/ConfirmBooking/iconMomo.png')}/>
              <Text style={styles.titleMethod}>TT tiền mặt</Text>
            </View>
            <View style={styles.buttonMethod}>
            <Image source={require('../assets/ConfirmBooking/iconPrice.png')}/>
              <Text style={styles.titleMethod}>TT qua momo</Text>
            </View>
          </View>
        </View>
        <View style={styles.reConfirm}>
        <Text style={styles.quesConfirm}>Bạn có đồng ý xác thực không?</Text>
        </View>
        
      </View>
      <View style={styles.event}>
      <View style={styles.buttonChoose}>
      <View style={styles.buttonNow}>
        <View style={styles.button1}>
          <View style={styles.bookNow}>
            <Text style={styles.books}>Đặt ngay</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('FormBookSchedule')}>
          <View style={styles.book}>
            <Text style={styles.books}>Đặt lịch</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
      </View>
    </View>
  );
};

export default ConfirmInforBooking;

const styles = StyleSheet.create({
    buttonChoose: {
        width: '100%',
      },
      buttonNow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom:10
      },
      button1: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      bookNow: {
        width: '80%',
        height: 50,
        backgroundColor: '#394C6D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      book: {
        width: '80%',
        height: 50,
        backgroundColor: '#FCA234',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      books: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      oneLine: {
        width: '100%',
        backgroundColor: '#FCA234',
        height: 1,
        marginTop: 15,
      },
    quesConfirm:{
        fontSize:15,
        fontWeight:"bold",
        color:"#394C6D"
    },
    reConfirm:{
        alignItems:"center",
        justifyContent:"center",
    },
    titleMethod:{
        fontSize:15,
        fontWeight:"bold",
        color:"#FCA234"
    },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  buttonMethod: {
    width: 140,
    height: 70,
    borderWidth: 3,
    borderColor: '#394C6D',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  infor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
    width: '50%',
  },
  infors: {
    fontSize: 18,
    color: '#FCA234',
    width: '50%',
  },
  styleInfo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  container: {
    flex: 1,
  },
  titleConfirm: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#394C6D',
    marginVertical: 20,
  },
  infoContainer: {
    flex: 8,
  },
  event: {
    flex: 1,
  },
  infoService: {
    marginHorizontal: 20,
  },
});
