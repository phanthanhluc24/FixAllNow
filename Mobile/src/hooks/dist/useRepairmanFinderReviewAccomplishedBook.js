// import React, {useEffect, useState} from 'react';
// import {url} from './apiRequest/url';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const useRepairmanFinderReviewAccomplishedBook = (transformedSelectedTab:any) => {
//     const option=transformedSelectedTab;
//   const [statusAccomplishedBooking, setStatusAccomplishedBooking] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const fetchStatusAccomplishedBooking = async () => {
//     try {
//       const accessToken = await AsyncStorage.getItem('accessToken');
//       const response = await axios.get(`${url}/booking/byStatus/${option}`, {
//         headers: {Authorization: `Bearer ${accessToken}`},
//       });
//       setStatusAccomplishedBooking(response.data.data);
//     } catch (error: any) {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchStatusAccomplishedBooking();
//   }, []);
//   return {statusAccomplishedBooking, isLoading, isError};
// }
// export default useRepairmanFinderReviewAccomplishedBook
