import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import HomeCategories from '../../HomeCategories';
import HeaderSearch from '../../HeaderSearch';
import HomeRepairmanPopular from '../../HomeRepairmanPopular';
import HomeServicePopular from '../../HomeServicePopular';

const Home = () => {
  const data = [
    { key: 'HomeServicePopular' },
  ];

  const renderHeader = () => (
    <View>
      <HeaderSearch />
      <HomeCategories/>
      <View style={styles.repairmanPopular}>
        <View style={styles.containers}>
        <Text style={styles.title}>Thợ nổi bật</Text>
      <HomeRepairmanPopular/>
      </View>
      </View>
      <View style={styles.repairmanPopulars}>
        <View style={styles.containerss}>
        <Text style={styles.titles}>Dịch vụ nổi bật</Text>
      <HomeServicePopular/>
      </View>
      </View>
    </View>
  );

  const renderItem = () => (
    <View>
      {/* Your renderItem content goes here */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  repairmanPopular:{
    flex:1,
    marginTop:20
},
containers:{
    marginHorizontal:20
},
title:{
    color:"#394C6D",
    fontSize:20,
    fontWeight:"bold"
},
repairmanPopulars:{
  flex:1,
  marginTop:20
},
containerss:{
  marginHorizontal:20
},
titles:{
  color:"#394C6D",
  fontSize:20,
  fontWeight:"bold"
},
});
