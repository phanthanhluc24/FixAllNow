// import { useRef, useEffect } from 'react';
// import { Animated, Easing } from 'react-native';

// const useRunBorderAnimation = () => {
//     const rotateValue = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//       const animateBorder = () => {
//         Animated.loop(
//           Animated.timing(rotateValue, {
//             toValue: 1,
//             duration: 1000,
//             easing: Easing.linear,
//             useNativeDriver: false,
//           })
//         ).start();
//       };
  
//       animateBorder();
  
//       return () => {
//         rotateValue.setValue(0);
//       };
//     }, [rotateValue]);
  
//     const rotate = rotateValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 360],
//     }); // Chuyển giá trị sang chuỗi
  
//     return rotate;
// };

// export default useRunBorderAnimation;