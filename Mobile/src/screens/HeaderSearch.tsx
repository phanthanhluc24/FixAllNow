import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
const HeaderSearch = () => {
    const handleSearchChange = ()=>{
        
      };
  return (
    <View style={styles.SearchBarContainer}>
    <View style={styles.SearchInputs}>
      <TextInput
        placeholder="Tìm kiếm dịch vụ" style={styles.searchInput}
      />
    <Image source={require("../assets/Homes/message.png")} style={styles.messageIcon}/>
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
        height:60
      }
})