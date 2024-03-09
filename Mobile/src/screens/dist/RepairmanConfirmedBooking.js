// import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
// import React from 'react';
// import moment from 'moment';
// import {useNavigation} from '@react-navigation/native';
// const RepairmanConfirmedBooking = ({ statusBooking }:any) => {
//   const navigation: any = useNavigation();
//   return (
//     <View style={styles.container}>
//        <FlatList
//         data={statusBooking}
//         keyExtractor={statusBooking => statusBooking._id}
//         renderItem={({item}) => (
//           <TouchableOpacity
//           style={styles.cartService}
//           onPress={() =>
//             navigation.navigate('DetailRepairmanConfirmBooking',{item})
//           }>
//           <View style={styles.headerCart}>
//             <View style={styles.nameShop}></View>
//             <View>
//               <TouchableOpacity>
//                 <Text style={styles.waitPayment}>{item?.status}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.content}>
//             <View style={styles.image}>
//               <Image
//                 source={{uri: item.service_id.image}}
//                 style={styles.img}
//               />
//             </View>
//             <View style={styles.info}>
//               <View style={styles.infos}>
//                 <Text numberOfLines={2} style={styles.nameRepairman}>
//                   Dịch vụ bảo trì ô tô
//                 </Text>
//                 <View style={styles.infoService}>
//                   <View>
//                     <View>
//                       <Text style={styles.dateTime}>
//                         {moment(item.updatedAt).format('DD/MM/YYYY HH:mm')}
//                       </Text>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//         )}/>
//     </View>
//   )
// }
// export default RepairmanConfirmedBooking
// const styles = StyleSheet.create({
//   dateTime: {
//     color: 'blue',
//   },
//   nameConfirm: {
//     fontSize: 15,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   background: {
//     backgroundColor: '#394C6D',
//     borderRadius: 5,
//     width: '90%',
//     height: 40,
//     marginVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgrounds: {
//     backgroundColor: '#FCA234',
//     borderRadius: 5,
//     width: '90%',
//     height: 40,
//     marginVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonConfirm: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   payment: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paymentContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     width: '60%',
//   },
//   imageTotal: {
//     width: 30,
//     height: 30,
//   },
//   totalPayment: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   infoService: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   content: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#394C6D',
//   },
//   img: {
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: '#394C6D',
//   },
//   nameRepairman: {
//     fontSize: 18,
//     color: '#394C6D',
//     fontWeight: 'bold',
//   },
//   vnd: {
//     fontSize: 15,
//     color: '#394C6D',
//   },
//   prices: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 15,
//     color: '#394C6D',
//     width: 'auto',
//     paddingVertical: 5,
//   },
//   description: {
//     width: '100%',
//     color: '#394C6D',
//   },
//   image: {
//     width: '15%',
//   },
//   info: {
//     marginHorizontal: 20,
//     width: '70%',
//   },
//   infos: {
//     marginHorizontal: 10,
//   },
//   loadingText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'gray',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   waitPayment: {
//     color: '#394C6D',
//     fontWeight: 'bold',
//   },
//   nameService: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   groundNameApp: {
//     // backgroundColor:"#394C6D",
//     // borderRadius:5
//   },
//   nameApp: {
//     color: '#FCA234',
//     backgroundColor: '#394C6D',
//   },
//   container: {
//     width: '100%',
//     height: '100%',
//   },
//   cartService: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//     marginTop: 10,
//     marginHorizontal: 12,
//     borderRadius: 10,
//   },
//   headerCart: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   nameShop: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
// })
