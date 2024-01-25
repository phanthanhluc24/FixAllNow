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
      <HomeRepairmanPopular/>
      <HomeServicePopular/>
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
});
