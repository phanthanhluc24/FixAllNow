import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RepairmanReviewsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.comment}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatarComment}
            source={require('../assets/Homes/avatars.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.comments}>
            Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâm Thợ rất tận tâm Thợ
            rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận
            tâmThợ rất tận tâmThợ rất tận tâmThợ rất tận tâm
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepairmanReviewsPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10
  },
  writeComment: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#394C6D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarComment: {
    width: 50,
    height: 50,
  },
  content: {
    width: '80%',
  },
  comments: {
    fontSize: 16,
    color: '#394C6D',
    marginVertical: 10,
  },
});
