import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-native";
import { View } from "react-native";
import { StripeProvider } from '@stripe/stripe-react-native';
export default function Shop() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const STRIPE="pk_test_51Osxt0P3QsmcFffhQjfeuh4vZIeAQFzM7R4Lpk2lGRRZIKcB9J1MOBiGl2UWMb3HAaEqww6p4P8g63LnexqIpEiU00CjHmli5n"
  const onCheckout=async()=>{
    const response=await fetch("https://a05a-113-176-99-140.ngrok-free.app/stripe/intents",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({amount:2847})
    })
    .then((res)=>res.json())
    .then(async (res) =>{
      console.log(res);
      const {error}=await initPaymentSheet({
        merchantDisplayName:`notJust.dev`,
        paymentIntentClientSecret:res.paymentIntent,
        // defaultBillingDetails:{
        //   name:"Luc",
        // }
      })
      if (error) {
        console.log(error.message);
      }

      await presentPaymentSheet()
    })
    .catch((error)=>{
      console.log(error);
    })

  }
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

  return (
  
  <StripeProvider publishableKey={STRIPE}>
    <View>
      <Button
        variant="primary"
        // disabled={!loading}
        title="Checkout"
        onPress={onCheckout}
      />
    </View>
  </StripeProvider>

  );
}