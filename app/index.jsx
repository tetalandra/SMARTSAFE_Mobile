import { View,Image } from "react-native-web";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Welcome(){

    const router = useRouter();

    useEffect(()=> {
        setTimeout(() => {
            router.replace('/login');
        },2000);
    }, []);

    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
            source={require('../assets/images/logo.png')} 
            style={{ width: 150, height: 150 }} />
        </View>
    );
}