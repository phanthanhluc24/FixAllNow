import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../../screens/Landing';
import Welcome from '../../screens/Welcome';
import SignIn from '../../screens/accounts.tsx/SignIn';
import SignUp from '../../screens/accounts.tsx/SignUp';
import SelectRole from '../../screens/accounts.tsx/SelectRole';
import ConfirmCode from '../../screens/accounts.tsx/ConfirmCode';
import ConfirmTypeRepairman from '../../screens/accounts.tsx/ConfirmTypeRepairman';
import ForgotPassword from '../../screens/accounts.tsx/ForgotPassword';
import NewPassword from '../../screens/accounts.tsx/NewPassword';
import ListOfElectrician from '../../screens/ListOfElectrician';
import DetailRepairman from '../../screens/DetailRepairman';
import DetailService from '../../screens/DetailService';
import RatedComment from '../../screens/RatedComment';
import EditInfoCurrentUser from '../../screens/forms/EditInfoCurrentUser';
import FormBookSchedule from '../../screens/forms/FormBookSchedule';
import ConfirmInforBooking from '../../screens/ConfirmInforBooking';
import FormAddNewService from '../../screens/forms/FormAddNewService';
import EditInfoService from '../../screens/forms/EditInfoService';
import EditAvatarCurrentUser from '../../screens/forms/EditAvatarCurrentUser';
import MapBookingScreen from '../../screens/MapBookingScreen';
import HistoryStore from '../../screens/HistoryStore';
import HeaderTitleComponent from '../../screens/HeaderTitleComponent';
import ResultSearch from '../../screens/ResultSearch';
import AuthNavigation from './AuthNavigation';
const queryClient = new QueryClient();
const Main = () => {
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectRole"
          component={SelectRole}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmCode"
          component={ConfirmCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmTypeRepairman"
          component={ConfirmTypeRepairman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="ListOfElectrician"
          component={ListOfElectrician}
          options={({route}: any) => ({
            headerShown: true,
            headerTitle: `Danh Sách Thợ ${route.params?.title}`,
          })}
        />
        <Stack.Screen
          name="DetailRepairman"
          component={DetailRepairman}
          options={({route}: any) => ({
            headerShown: true,
            headerTitle: `${route.params?.title}`,
          })}
        />
        <Stack.Screen
          name="DetailService"
          component={DetailService}
          options={() => ({
            headerShown: true,
            headerTitle: `Chi tiết dịch vụ`,
          })}
        />
        <Stack.Screen
          name="RatedComment"
          component={RatedComment}
          options={() => ({
            headerShown: true,
            headerTitle:`Đánh giá của bạn về thợ` ,
          })}
        />
         <Stack.Screen
          name="EditInfoCurrentUser"
          component={EditInfoCurrentUser}
          options={() => ({
            headerShown: true,
            headerTitle:`Sửa thông tin` ,
          })}
        />
        <Stack.Screen
          name="FormBookSchedule"
          component={FormBookSchedule}
          options={() => ({
            headerShown: true,
            headerTitle: "Đặt lịch",
          })}
        />
        <Stack.Screen
          name="ConfirmInforBooking"
          component={ConfirmInforBooking}
          options={() => ({
            headerShown: true,
            headerTitle: "Xác nhận đặt lịch",
          })}
        />
        <Stack.Screen
          name="FormAddNewService"
          component={FormAddNewService}
          options={() => ({
            headerShown: true,
            headerTitle: "Thêm mới dịch vụ",
          })}
        />
        <Stack.Screen
          name="EditInfoService"
          component={EditInfoService}
          options={() => ({
            headerShown: true,
            headerTitle: "Chỉnh sửa dịch vụ",
          })}
        />
        <Stack.Screen
          name="EditAvatarCurrentUser"
          component={EditAvatarCurrentUser}
          options={() => ({
            headerShown: true,
            headerTitle: "Chỉnh sửa ảnh đại diện",
          })}
        />
        <Stack.Screen
          name="MapBookingScreen"
          component={MapBookingScreen}
          options={() => ({
            headerShown: true,
            headerTitle: "Tìm vị trí thợ",
          })}
        />
        <Stack.Screen
          name="HistoryStore"
          component={HistoryStore}
          options={() => ({
            headerShown: true,
            headerTitle: "Lịch sử cửa hàng",
          })}
        />
        <Stack.Screen
          name="ResultSearch"
          component={ResultSearch}
          options={() => ({
            headerShown: true,
            headerTitle: "Kết quả tìm kiếm",
          })}
        />
         <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </QueryClientProvider>
  );
};
export default Main;
