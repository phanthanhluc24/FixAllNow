import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Landing');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.logoConatiner}>
        <View style={styles.circularLogo}>
          <Image
            source={require('../assets/Landing/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.welcomcontent}>
          <Text style={styles.content}>Chào mừng đến với FixAllNow</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#FCA234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularLogo: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 13,
  },
  welcomcontent: {
    paddingTop: 20,
  },
  content: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
