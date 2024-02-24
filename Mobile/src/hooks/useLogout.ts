import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {url} from './apiRequest/url';
const useLogout = () => {
    const logout = async (accessToken:string) => {
      try {
        const response = await axios.post(`${url}/auth/logout`, {}, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    };
  
    return { logout };
  };
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const logout = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const accessToken = await AsyncStorage.getItem('accessToken');
//       const response = await axios.post(
//         `${url}/auth/logout`,
//         {
//           headers: {Authorization: `Bearer ${accessToken}`},
//         },
//       );
//       setIsLoading(false);
//       return response.data;
//     } catch (error: any) {
//       setIsLoading(false);
//       setError(error);
//       console.error('Error logging out:', error);
//     }
//   };

//   return {logout, isLoading, error};
// };

export default useLogout;
