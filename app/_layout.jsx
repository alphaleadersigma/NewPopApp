import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown: false
    }} />
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    <Stack.Screen name="Buisnesses/SilverLake" options={{headerShown: false}} />
    <Stack.Screen name="Buisnesses/Rosebowl" options={{headerShown: false}} />
     <Stack.Screen name="Buisnesses/Alameda" options={{headerShown: false}} />
     <Stack.Screen name="Buisnesses/Melrose" options={{headerShown: false}} />
  </Stack>
  )
}

export default RootLayout

