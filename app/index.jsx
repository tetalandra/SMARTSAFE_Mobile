import { View, Image, Text, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            router.replace('/(tabs)/home');
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                <View style={styles.logoWrapper}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.logoShadow} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.brandTitle}>
                        SMART<Text style={styles.redText}>SAFE</Text>
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.slogan}>STAY SECURE • STAY SMART</Text>
                </View>
            </Animated.View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>EST. 2023</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logoWrapper: {
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    logoShadow: {
        position: 'absolute',
        bottom: -10,
        width: 100,
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 20,
    },
    textContainer: {
        alignItems: 'center',
    },
    brandTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: '#2B2D42',
        letterSpacing: 4,
        textAlign: 'center',
    },
    redText: {
        color: '#EF233C',
    },
    line: {
        height: 4,
        width: 50,
        backgroundColor: '#EF233C',
        marginVertical: 15,
        borderRadius: 2,
    },
    slogan: {
        fontSize: 10,
        fontWeight: '800',
        color: '#8D99AE',
        letterSpacing: 5,
        marginTop: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 50,
    },
    footerText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#2B2D42',
        letterSpacing: 2,
        opacity: 0.1,
    },
});