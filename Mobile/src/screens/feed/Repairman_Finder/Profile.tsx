import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileHeader from '../../ProfileHeader';
import ProfileButtonEvent from '../../ProfileButtonEvent';
import ProfileHeaderRepairmanFinder from '../../ProfileHeaderRepairmanFinder';
import ProfileBodyRepairmanFinder from '../../ProfileBodyRepairmanFinder';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const [roleCurrentUser, setRoleCurrentUser] = useState<any>(null);
  useEffect(() => {
    const getRole = async () => {
      try {
        const role = await AsyncStorage.getItem('roleCurrentUser');
        setRoleCurrentUser(role);
      } 
      catch (error) {
      }
    };
    getRole();
  }, []);
  const data = [{key: 'ProfileListService'}];
  const renderProfileHeaderRepairman = () => (
    <View>
      <ProfileHeader />
    
    </View>
  );
  const renderProfileServiceRepairman = () => (
    <View>
        <ProfileButtonEvent />
    </View>
  );
  const renderProfileHeaderRepairmanfinder = () => (
    <View>
      <ProfileHeaderRepairmanFinder />
    </View>
  );
  const renderProfileBodyRepairmanfinder = () => (
    <View>
      <ProfileBodyRepairmanFinder />
    </View>
  );
  return (
    <>
      {roleCurrentUser !== null && roleCurrentUser === 'USR' ? (
        <View style={styles.containers}>
          <FlatList
            data={data}
            keyExtractor={item => item.key}
            renderItem={renderProfileBodyRepairmanfinder}
            ListHeaderComponent={renderProfileHeaderRepairmanfinder}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={item => item.key}
            renderItem={renderProfileServiceRepairman}
            ListHeaderComponent={renderProfileHeaderRepairman}
          />
        </View>
      )}
    </>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394C6D',
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
