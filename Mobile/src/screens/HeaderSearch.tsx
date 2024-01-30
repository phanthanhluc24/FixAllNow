import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const HeaderSearch = () => {
    const handleSearchChange = ()=>{
        
      };
  return (
    <View style={styles.SearchBarContainer}>
    <View style={styles.SearchInputs}>
      <TextInput
        placeholder="Tìm kiếm dịch vụ" style={styles.searchInput}
      />
      <View style={styles.messageIcon}>
      <AntDesign name="message1" color="black" size={28} />
      </View>
    
    <Image source={require("../assets/Homes/avatar.png")} />
    </View>
    </View>
  )
}

export default HeaderSearch

const styles = StyleSheet.create({
    SearchBarContainer: {
        flex: 1,
      },
      searchInput: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        width: '70%',
        backgroundColor: 'white',
        paddingLeft:15
      },
      SearchInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent:"center",

      },
      messageIcon:{
        width:60,
        height:60,
        alignItems:"center",
        justifyContent:"center"
      }
})