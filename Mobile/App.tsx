import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Main from './src/navigates/main/Main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient= new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <Main/>
    </QueryClientProvider>
  )
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
})