import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
const RatedComment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRatedComment}>
        <View style={styles.comment}>
          <View style={styles.avatar}>
            <Image style={styles.avatarComment} source={require('../assets/Homes/avatars.png')}/>
          </View>
          <View style={styles.content}>
           
            <Text style={styles.comments}>Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâm</Text>
            <Image source={require('../assets/Homes/star.png')}/>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.writeComment}>
        <TextInput style={styles.input} placeholder='Hãy đánh giá gì đó'></TextInput>
        <TouchableOpacity>
        <Feather paddingHorizontal={15} name="send" color="black" size={28} />
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  )
}

export default RatedComment

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerRatedComment:{
    marginHorizontal:20,
    flex:9
  },
  bottom:{
    flex:1,
    marginHorizontal:20,
  },
  comment:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  writeComment:{
    width:"100%",
    height:50,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#394C6D",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
  avatar:{
    width:54,
    height:54,
    borderRadius:100,
    borderWidth:3,
    borderColor:"black",
    alignItems:"center",
    justifyContent:"center",
  },
  avatarComment:{
    width:50,
    height:50,
  },
  content:{
    width:"80%"
  },
  comments:{
    fontSize:16,
    color:"#394C6D",
    marginVertical:10
  },
  input:{
      paddingLeft:15
  }
})