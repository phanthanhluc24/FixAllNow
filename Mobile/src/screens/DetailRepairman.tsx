import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const DetailRepairman = () => {
  const navigation:any= useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inforRepairman}>
        <View>
          <View style={styles.info}>
            <Image
              style={styles.imgRp}
              source={require('../assets/DetailRepairman/AvatarRepair.png')}
            />
          </View>
          <Text style={styles.title}>Thông tin cá nhân</Text>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Họ và tên:</Text>
            <Text style={styles.content}>Phan Thanh Lực</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Nghề nghiệp: </Text>
            <Text style={styles.content}>Chuyên sửa ô tô</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Số điện thoại:</Text>
            <Text style={styles.content}>08976***098</Text>
          </View>
          <View style={styles.detailInfo}>
            <Text style={styles.titles}>Địa chỉ:</Text>
            <Text style={styles.content}> Lê Hữu Trác</Text>
          </View>
          <View style={styles.containerService}>
            <Text style={styles.service}>Dịch vụ</Text>
            <View style={{marginHorizontal: 20}}>
              <View style={styles.repairman}>
                <View style={styles.contents}>
                  <View style={styles.imgSer}>
                    <Image source={require('../assets/Homes/avartarss.png')} />
                  </View>
                  <View style={styles.infos}>
                    <Text style={styles.nameRepairman}>
                      Cháy bóng đèn (đèn trần)
                    </Text>
                    <Text style={styles.price}>120.000đ</Text>
                    <Text numberOfLines={2} style={styles.description}>
                      (Ổ cắm điện bị nóng và nở ra khi cắm vào lỏng...)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rateComment}>
            <View style={styles.containerTitle}>
              <View style={styles.rating}>
                <Text style={styles.titless}>Đánh giá:(30)</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("RatedComment")}>
                <Text style={styles.titlesss}>Đánh giá ngay!</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("RatedComment")}>
              <Text style={styles.suggest}>Xem đánh giá ngay nào!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonChoose}>
            <View style={styles.buttonNow}>
              <View style={styles.button1}>
                <View style={styles.bookNow}>
                  <Text style={styles.books}>Đặt ngay</Text>
                </View>
              </View>
              <View style={styles.button1}>
                <View style={styles.book}>
                  <Text style={styles.books}>Đặt lịch</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listService}></View>
    </View>
  );
};
export default DetailRepairman;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inforRepairman: {
    flex: 2,
  },
  listService: {
    flex: 2,
  },
  info: {
    alignItems: 'center',
    paddingTop: 10,
  },
  imgRp: {
    borderWidth: 4,
    borderColor: '#394C6D',
    borderRadius: 100,
    width:150,
    height:150
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394C6D',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  detailInfo: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    alignItems: 'center',
    paddingTop: 10,
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  titless: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  titlesss:{
    fontSize: 18,
    color: '#FCA234',
    borderWidth:2,
    borderRadius:5,
    borderColor:"#FCA234",
    padding:3
  },
  content: {
    fontSize: 18,
  },
  containerService: {
    marginTop: 20,
  },
  service: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  repairman: {
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#394C6D',
    width: '100%',
    height: 132,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {
    flexDirection: 'row',
  },
  imgSer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infos: {
    width: '60%',
    justifyContent: 'center',
  },
  nameRepairman: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#394C6D',
  },
  price: {
    color: '#FCA234',
    fontSize: 14,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    color: '#394C6D',
  },
  buttonChoose: {
    width: '100%',
  },
  buttonNow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
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
  containerTitle: {
    marginHorizontal: 20,
  },
  rateComment: {
    marginTop: 20,
  },
  rating:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  suggest:{
    color:"#FCA234",
  }
});
