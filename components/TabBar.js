import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Home, Bell, Cpu, Settings, Users, LayoutDashboard } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

export const TabBar = ({ state, descriptors, navigation }) => {
    const theme = Colors.light;

    const icons = {
        dashboard: (props) => <LayoutDashboard {...props} />,
        home: (props) => <Home {...props} />,
        notifications: (props) => <Bell {...props} />,
        devices: (props) => <Cpu {...props} />,
        contacts: (props) => <Users {...props} />,
        settings: (props) => <Settings {...props} />,
    };

    const activeRoute = state.routes[state.index].name;

    if (activeRoute === 'home') {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={styles.tabItem}
                        >
                            <View style={[styles.iconContainer, isFocused && styles.activeIconContainer]}>
                                {icons[route.name] ? icons[route.name]({
                                    size: 24,
                                    color: isFocused ? '#fff' : '#8D99AE',
                                    strokeWidth: isFocused ? 2.5 : 2
                                }) : null}
                            </View>

                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        height: 75,
        borderRadius: 35,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        overflow: 'hidden',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        height: '100%',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 20,
    },
    activeIconContainer: {
        backgroundColor: '#EF233C',
        shadowColor: '#EF233C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    label: {
        color: '#2B2D42',
        fontSize: 12,
        fontWeight: '700',
    },
});
