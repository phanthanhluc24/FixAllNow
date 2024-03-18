"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Entypo_1 = require("react-native-vector-icons/Entypo");
var Shop = function () {
    var _a = react_1.useState(false), isMenuVisible = _a[0], setIsMenuVisible = _a[1];
    var toggleMenu = function () {
        setIsMenuVisible(!isMenuVisible);
    };
    var handleEvent1 = function () {
        console.log('Event 1');
    };
    var handleEvent2 = function () {
        console.log('Event 2');
    };
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleMenu },
            react_1["default"].createElement(Entypo_1["default"], { name: "menu", size: 30, color: "black" })),
        isMenuVisible && (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'white', padding: 20 } },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleEvent1 },
                react_1["default"].createElement(react_native_1.Text, null, "Event 1")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleEvent2 },
                react_1["default"].createElement(react_native_1.Text, null, "Event 2")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: toggleMenu },
                react_1["default"].createElement(react_native_1.Text, null, "Close"))))));
};
exports["default"] = Shop;
var styles = react_native_1.StyleSheet.create({});
// import { useStripe } from "@stripe/stripe-react-native";
// import { useEffect, useState } from "react";
// import { Alert, Button } from "react-native";
// import { View } from "react-native";
// import { StripeProvider } from '@stripe/stripe-react-native';
// export default function Shop() {
//   const { initPaymentSheet, presentPaymentSheet } = useStripe();
//   const [loading, setLoading] = useState(false);
//   const STRIPE="pk_test_51Osxt0P3QsmcFffhQjfeuh4vZIeAQFzM7R4Lpk2lGRRZIKcB9J1MOBiGl2UWMb3HAaEqww6p4P8g63LnexqIpEiU00CjHmli5n"
//   const onCheckout=async()=>{
//     const response=await fetch("https://a05a-113-176-99-140.ngrok-free.app/stripe/intents",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({amount:2847})
//     })
//     .then((res)=>res.json())
//     .then(async (res) =>{
//       console.log(res);
//       const {error}=await initPaymentSheet({
//         merchantDisplayName:`notJust.dev`,
//         paymentIntentClientSecret:res.paymentIntent,
//       })
//       if (error) {
//         console.log(error.message);
//       }
//       await presentPaymentSheet()
//     })
//     .catch((error)=>{
//       console.log(error);
//     })
//   }
// const fetchPaymentSheetParams = async () => {
//   return {
//     paymentIntent: '',
//     ephemeralKey: '',
//     customer: '',
//   };
//   const response = await fetch(`343/payment-sheet`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const { paymentIntent, ephemeralKey, customer} = await response.json();
//   return {
//     paymentIntent,
//     ephemeralKey,
//     customer,
//   };
// };
// const initializePaymentSheet = async () => {
//   console.log('initializing payment');
//   const {
//     paymentIntent,
//     ephemeralKey,
//     customer,
//     publishableKey,
//   } = await fetchPaymentSheetParams();
//   console.log('fetched payment');
//   const initOut = await initPaymentSheet({
//     merchantDisplayName: "Example, Inc.",
//     customerId: customer,
//     customerEphemeralKeySecret: ephemeralKey,
//     paymentIntentClientSecret: paymentIntent,
//     // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
//     //methods that complete payment after a delay, like SEPA Debit and Sofort.
//     allowsDelayedPaymentMethods: true,
//     defaultBillingDetails: {
//       name: 'Jane Doe',
//     }
//   });
//   console.log('init finished', initOut);
//   const { error } = initOut;
//   if (!error) {
//     setLoading(true);
//   }
// };
// const openPaymentSheet = async () => {
//   console.log('opening payment');
//     const { error } = await presentPaymentSheet();
//     console.log('payment error', error);
//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//     } else {
//       Alert.alert('Success', 'Your order is confirmed!');
//     }
// };
// useEffect(() => {
//   initializePaymentSheet();
// }, []);
//   return (
//   <StripeProvider publishableKey={STRIPE}>
//     <View>
//       <Button
//         variant="primary"
//         // disabled={!loading}
//         title="Checkout"
//         onPress={onCheckout}
//       />
//     </View>
//   </StripeProvider>
//   );
// }
