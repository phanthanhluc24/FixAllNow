import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { QueriesObserver, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectRole from '../../screens/accounts/SelectRole';
const queryClient = new QueryClient();
const Main = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client ={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="SelectRole" component={SelectRole} options={{ headerShown: false }} />
        </Stack.Navigator>

      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default Main;

const styles = StyleSheet.create({})