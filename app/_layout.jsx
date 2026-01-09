import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors.js'
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
   const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]; 
  return (
    <>
    {/* <StatusBar style="light" backgroundColor="#0F0303" /> */}
    <Stack screenOptions={{
          //   headerStyle : {
          //       backgroundColor: theme.background},
          //       headerTintColor: theme.title,  
          //   contentStyle: {
          //   backgroundColor: '#FFFFF',
          // },            
        }}>
        <Stack.Screen name="index" options = {{headerShown: false}} />
    </Stack>
    </>
  )
}
