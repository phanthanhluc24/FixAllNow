import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from './DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import HistoryRepairmanBookSchedule from '../../screens/HistoryRepairmanBookSchedule';
import DetailRepairmanConfirmBooking from '../../screens/DetailRepairmanConfirmBooking';
import AuthNavigation from './AuthNavigation';
import DetailViewBookSchedule from '../../screens/DetailViewBookSchedule';
import DetailNotification from '../../screens/DetailNotification';
import Conversation from '../../screens/chats/Conversation';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RepairmanViewAddressRepair from '../../screens/RepairmanViewAddressRepair';
const queryClient = new QueryClient();
const Main = () => {
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
      <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectRole"
          component={SelectRole}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmCode"
          component={ConfirmCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmTypeRepairman"
          component={ConfirmTypeRepairman}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListOfElectrician"
          component={ListOfElectrician}
          options={({ route }: any) => ({
            headerShown: true,
            headerTitle: `Danh Sách Thợ ${route.params?.title}`,
          })}
        />
        <Stack.Screen
          name="DetailRepairman"
          component={DetailRepairman}
          options={({ route }: any) => ({
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
            headerTitle: `Đánh giá`,
          })}
        />
        <Stack.Screen
          name="EditInfoCurrentUser"
          component={EditInfoCurrentUser}
          options={() => ({
            headerShown: true,
            headerTitle: `Sửa thông tin`,
          })}
        />
        <Stack.Screen
          name="FormBookSchedule"
          component={FormBookSchedule}
          options={() => ({
            headerShown: true,
            headerTitle: 'Đặt lịch',
          })}
        />
        <Stack.Screen
          name="ConfirmInforBooking"
          component={ConfirmInforBooking}
          options={() => ({
            headerShown: true,
            headerTitle: 'Xác nhận đặt lịch',
          })}
        />
        <Stack.Screen
          name="FormAddNewService"
          component={FormAddNewService}
          options={() => ({
            headerShown: true,
            headerTitle: 'Thêm mới dịch vụ',
          })}
        />
        <Stack.Screen
          name="EditInfoService"
          component={EditInfoService}
          options={() => ({
            headerShown: true,
            headerTitle: 'Chỉnh sửa dịch vụ',
          })}
        />
        <Stack.Screen
          name="EditAvatarCurrentUser"
          component={EditAvatarCurrentUser}
          options={() => ({
            headerShown: true,
            headerTitle: 'Chỉnh sửa ảnh đại diện',
          })}
        />
        <Stack.Screen
          name="MapBookingScreen"
          component={MapBookingScreen}
          options={() => ({
            headerShown: true,
            headerTitle: 'Tìm vị trí thợ',
          })}
        />
        <Stack.Screen
          name="HistoryStore"
          component={HistoryStore}
          options={() => ({
            headerShown: true,
            headerTitle: 'Lịch sử cửa hàng',
          })}
        />
        <Stack.Screen
          name="HistoryRepairmanBookSchedule"
          component={HistoryRepairmanBookSchedule}
          options={() => ({
            headerShown: true,
            headerTitle: 'Lịch sử đặt lịch',
          })}
        />
        <Stack.Screen
          name="DetailRepairmanConfirmBooking"
          component={DetailRepairmanConfirmBooking}
          options={() => ({
            headerShown: true,
            headerTitle: 'Chi tiết lịch hẹn',
          })}
        />
        <Stack.Screen
          name="DetailViewBookSchedule"
          component={DetailViewBookSchedule}
          options={() => ({
            headerShown: true,
            headerTitle: 'Chi tiết lịch hẹn',
          })}
        />
        <Stack.Screen
          name="ResultSearch"
          component={ResultSearch}
          options={() => ({
            headerShown: true,
            headerTitle: 'Kết quả tìm kiếm',
          })}
        />
        <Stack.Screen
          name="DetailNotification"
          component={DetailNotification}
          options={() => ({
            headerShown: true,
            headerTitle: 'Chi tiết thông báo',
          })}
        />
        <Stack.Screen
          name="RepairmanViewAddressRepair"
          component={RepairmanViewAddressRepair}
          options={() => ({
            headerShown: true,
            headerTitle: 'Xem địa chỉ sửa chữa',
          })}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={({ route }: any) => ({
            headerShown: true,
            headerTitle: () => (
              <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" ,gap:40}}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: route.params.image }}></Image>
                  <Text style={{ fontWeight: "bold" }}>{route.params.name}</Text>
                </View>
              </View>
            ),
          })}
        />

      </Stack.Navigator>
    </QueryClientProvider>
  );
};
export default Main;
