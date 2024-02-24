// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import useGetServiceRevolve from '../hooks/useGetServiceRevolve';
// interface typeService {
//   _id: string;
//   status: string;
//   user_id: string;
//   service_name: string;
//   price: number;
//   image: string;
//   desc: string;
// }
// const DetailServiceRevolve = (id: any) => {
//   const navigation: any = useNavigation();
//   const {serviceRevolve, isLoading, isError} = useGetServiceRevolve(id.id);
//   console.log(serviceRevolve);
//   return (
//     <FlatList
//       data={serviceRevolve as typeService[]}
//       keyExtractor={services => services._id}
//       renderItem={({item}) => (
//         <TouchableOpacity
//           style={styles.repairman}
//           onPress={() =>
//             navigation.navigate('DetailService', {
//               id: item._id,
//               title: item.service_name,
//             })
//           }>
//           <View style={styles.contents}>
//             <View style={styles.imgSer}>
//               <Image source={{uri: item.image}} style={styles.img} />
//             </View>
//             <View style={styles.infos}>
//               <Text numberOfLines={1} style={styles.nameRepairman}>
//                 {item.service_name}
//               </Text>
//               <View style={styles.prices}>
//                 <Text style={styles.price}>
//                   {item.price.toLocaleString('vi-VN')}
//                 </Text>
//                 <Text style={styles.vnd}> VND</Text>
//               </View>
//               <Text numberOfLines={2} style={styles.description}>
//                 {item.desc}
//               </Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };
// export default DetailServiceRevolve;
// const styles = StyleSheet.create({
//   repairman: {
//     marginTop: 10,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#394C6D',
//     width: '100%',
//     height: 132,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   contents: {
//     flexDirection: 'row',
//   },
//   imgSer: {
//     width: '40%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   img: {
//     width: 100,
//     height: 100,
//   },
//   infos: {
//     width: '60%',
//     justifyContent: 'center',
//   },
//   nameRepairman: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#394C6D',
//   },
//   price: {
//     color: '#FCA234',
//     fontSize: 18,
//     paddingVertical: 10,
//     fontWeight: 'bold',
//   },
//   vnd: {
//     fontSize: 18,
//     color: '#FCA234',
//   },
//   prices: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   description: {
//     color: '#394C6D',
//   },
// });
