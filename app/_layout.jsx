import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown: false
    }} />
    <Stack.Screen name="(tabs)" options={{title: '', headerShown: false}} />
    <Stack.Screen name="Buisnesses/SilverLake" options={{headerShown: false}} />
    <Stack.Screen name="Buisnesses/Rosebowl" options={{headerShown: false}} />
     <Stack.Screen name="Buisnesses/Alameda" options={{headerShown: false}} />
     <Stack.Screen name="Buisnesses/Melrose" options={{headerShown: false}} />
     <Stack.Screen name="posting/home" options={{headerShown: false}} />
     <Stack.Screen name="qr" options={{title: 'My QRCode', headerShown: true}} />
  </Stack>
  )
}

export default RootLayout

