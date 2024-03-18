import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import useGetUserChated from "../../../hooks/useGetUserChated";
import { FlatList } from "react-native";
interface User {
  user:{
    _id: string,
    image: string,
    full_name: string
  },
  content:{
    chatId:string,
    message:string
  }
}
export default function Shop() {
  const navigation: any = useNavigation();
  const { userChat } = useGetUserChated()

  const renderItem = ({ item }: { item: User }) => {
    return (
      <>
        <View style={styles.container}>
          <Pressable style={styles.mainContainer} onPress={() => navigation.navigate("Conversation",{image:item.user.image,name:item.user.full_name,idRoom:item.content.chatId,idReceived:item.user._id})}>
            <View style={styles.avatarDiv}>
              <Image style={styles.avatarUser} source={{uri:item.user.image}}></Image>
              <View style={styles.divNameText}>
                <Text style={styles.theName}>{item.user.full_name}</Text>
                <Text style={styles.textMessage}>{item.content.message}</Text>
              </View>
            </View>
            <View style={styles.chatIcon}>
              <Ionicons name="chatbox" size={24} color="#007AFF" />
            </View>
          </Pressable>
        </View>
      </>
    );
  };
  return (
    <>
      {/* <Button title="Send Socket Io" onPress={chatWithNewMember}></Button> */}

      <View>
            <FlatList
                data={userChat}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            {/* {isLoading!==false && <Text style={styles.loadingText}>
            <LoaderKit style={styles.loadingText}
            name={'BallPulse'}
            color={'#FCA234'}
          /></Text>} */}
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    marginHorizontal: 8,
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderRadius: 4,
    marginTop: 2
  },
  avatarDiv: {
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "justify"
  },
  avatarUser: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  divNameText: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft:5
  },
  chatIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center"
  },
  theName: {
    color: "#FCA234",
    fontWeight: "bold"
  },
  textMessage:{
    fontWeight:"400"
  }
})
