// import React, {useEffect, useState} from 'react';
// import {url} from './apiRequest/url';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const useRepairmanFinderGetFollowingProcessRepair = (transformedSelectedTab:any) => {
//     const option=transformedSelectedTab;
//     console.log("hhsh",option);
//       const [followProcessBooking, setFollowProcessBooking] = useState(null);
//       const [isLoading, setIsLoading] = useState(true);
//       const [isError, setIsError] = useState(false);
//       const fetchFollowProcessBooking = async () => {
//         try {
//           const accessToken = await AsyncStorage.getItem('accessToken');
//           const response = await axios.get(`${url}/booking/byStatus/${option}`, {
//             headers: {Authorization: `Bearer ${accessToken}`},
//           });
//           console.log(response.data.data);
//         setFollowProcessBooking(response.data.data);
//         } catch (error: any) {
//           setIsError(true);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       useEffect(() => {
//         fetchFollowProcessBooking();
//       }, [option]);
//       return {followProcessBooking, isLoading, isError};
// }
// export default useRepairmanFinderGetFollowingProcessRepair
