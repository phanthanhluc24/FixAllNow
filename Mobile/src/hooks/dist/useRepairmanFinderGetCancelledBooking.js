// import React, {useEffect, useState} from 'react';
// import {url} from './apiRequest/url';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const useRepairmanFinderGetCancelledBooking = (transformedSelectedTab:any) => {
//     const option=transformedSelectedTab;
//     console.log(option);
//       const [cancelledBooking, setCancelledBooking] = useState(null);
//       const [isLoading, setIsLoading] = useState(true);
//       const [isError, setIsError] = useState(false);
//       const fetchCancelledBooking = async () => {
//         try {
//           const accessToken = await AsyncStorage.getItem('accessToken');
//           const response = await axios.get(`${url}/booking/byStatus/${option}`, {
//             headers: {Authorization: `Bearer ${accessToken}`},
//           });
//           console.log(response.data.data);
//         setCancelledBooking(response.data.data);
//         } catch (error: any) {
//           setIsError(true);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       useEffect(() => {
//         fetchCancelledBooking();
//       }, []);
//       return {cancelledBooking, isLoading, isError};
// }
// export default useRepairmanFinderGetCancelledBooking
