import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RepairmanFinderReviewAccomplishedRepair = () => {
  return (
    <View style={styles.container}>
    <View style={styles.cartService}>
      <View style={styles.headerCart}>
        <View style={styles.nameShop}>
          <View style={styles.groundNameApp}>
            <Text style={styles.nameApp}>FixAllNow</Text>
          </View>
          <Text style={styles.nameService}> Dịch vụ</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.waitPayment}>Dịch vụ đã hoàn tất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.image}>
          <Image
            source={require('../assets/Homes/avatar.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.info}>
          <View style={styles.infos}>
            <Text numberOfLines={1} style={styles.nameRepairman}>
              Dịch vụ bảo trì ô tô
            </Text>
            <Text numberOfLines={1} style={styles.description}>
            Quạt nhà tôi mới mua về nhưng chạy 5 phút là nó lại bay ra mùi khắc
            </Text>
            <View style={styles.infoService}>
              <View></View>
              <View>
                <View style={styles.prices}>
                  <Text style={styles.vnd}>đ</Text>
                  <Text style={styles.price}>100.000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.totalPayment}>
       
          <View style={styles.background}>
              <Text style={styles.nameConfirm}>Đặt lại dịch vụ</Text>
            </View>
      </View>
    </View>
  </View>
  )
}

export default RepairmanFinderReviewAccomplishedRepair

const styles = StyleSheet.create({
    nameConfirm:{
        fontSize:15,
        color:"white",
        fontWeight:"bold"
    
     },
     background:{
       backgroundColor:"#394C6D",
       borderRadius:5,
       width:"100%",
       height:40,
       marginVertical:10,
       alignItems:"center",
       justifyContent:"center"
     },
     buttonConfirm:{
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"
     },
     payment: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
     },
     paymentContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       padding:10,
     },
     imageTotal: {
       width: 30,
       height: 30,
     },
     totalPayment: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     infoService: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     content: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 15,
       borderBottomWidth: 1,
       borderBottomColor: '#394C6D',
     },
     img: {
       width: 60,
       height: 60,
     },
     nameRepairman: {
       fontSize: 18,
       color: '#394C6D',
       fontWeight: 'bold',
     },
     vnd: {
       fontSize: 18,
       color: '#394C6D',
     },
     prices: {
       flexDirection: 'row',
       alignItems: 'center',
     },
     price: {
       fontSize: 15,
       color: '#394C6D',
       width: 'auto',
       paddingVertical: 5,
     },
     description: {
       width: '100%',
       color: '#394C6D',
     },
     image: {
       width: '15%',
     },
     info: {
       marginHorizontal: 20,
       width: '70%',
     },
     infos: {
       marginHorizontal: 10,
     },
     loadingText: {
       fontSize: 20,
       fontWeight: 'bold',
       color: 'gray',
       textAlign: 'center',
       marginTop: 10,
     },
     waitPayment: {
       color: '#394C6D',
     },
     nameService: {
       fontWeight: 'bold',
       color: 'black',
     },
     groundNameApp: {
       // backgroundColor:"#394C6D",
       // borderRadius:5
     },
     nameApp: {
       color: '#FCA234',
       backgroundColor: '#394C6D',
     },
     container: {
       width: '100%',
       height: '100%',
     },
     cartService: {
       padding: 10,
       backgroundColor: '#C1CDE2',
       marginTop: 10,
     },
     headerCart: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
     },
     nameShop: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around',
     },
})