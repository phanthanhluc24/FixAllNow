import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StarRating = ({rating, onRatingPress}: any) => {
  const [selectedStar, setSelectedStar] = useState(rating);
  const handleStarPress = (star: any) => {
    setSelectedStar(star);
    onRatingPress(star);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          activeOpacity={0.7}>
          <FontAwesome
            name={selectedStar >= i ? 'star' : 'star-o'}
            size={40}
            color={selectedStar >= i ? '#FFD700' : '#FFFFFF'}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };
  return <View style={styles.star}>{renderStars()}</View>;
};

export default StarRating;
const styles = StyleSheet.create({
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
