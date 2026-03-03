import { View, Text, StyleSheet, ScrollView, Image, Switch, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GlassCard } from '../../components/GlassCard';

export default function SettingsScreen() {
    const theme = Colors.light;
    const router = useRouter();
    const [autoCall, setAutoCall] = useState(true);
    const [pushAlerts, setPushAlerts] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: theme.title }]}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* PROFILE CARD */}
                <View style={[styles.profileCard, { backgroundColor: theme.navBackGround }]}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Ionicons name="pencil" size={14} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.name, { color: theme.text }]}>John Doe</Text>
                    <Text style={[styles.email, { color: theme.muted }]}>john.doe@smartsafe.com</Text>

                    <View style={styles.badges}>
                        <View style={[styles.activeBadge, { backgroundColor: theme.success }]}>
                            <Text style={styles.badgeText}>System Active</Text>
                        </View>
                        <View style={styles.planBadge}>
                            <Text style={styles.planText}>Pro Plan</Text>
                        </View>
                    </View>
                </View>

                {/* EMERGENCY RESPONSE */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.title }]}>🚨 Emergency Response</Text>
                    <GlassCard style={styles.card}>
                        <Row
                            icon="users"
                            title="Response Team"
                            subtitle="Manage contacts & auto-dial"
                            theme={theme}
                        />
                        <View style={[styles.divider, { backgroundColor: theme.border }]} />
                        <Row
                            icon="phone-call"
                            title="Auto-Call Services"
                            subtitle="Call fire dept if alarm > 60s"
                            theme={theme}
                            right={
                                <Switch
                                    value={autoCall}
                                    onValueChange={setAutoCall}
                                    trackColor={{ true: theme.danger }}
                                />
                            }
                        />
                        <View style={[styles.divider, { backgroundColor: theme.border }]} />
                        <Row
                            icon="map-pin"
                            title="Registered Location"
                            subtitle="34.0522° N, 118.2437° W"
                            theme={theme}
                            right={<Ionicons name="chevron-forward" size={20} color={theme.muted} />}
                        />
                    </GlassCard>
                </View>

                {/* NOTIFICATIONS */}
                <View style={[styles.section, { marginHorizontal: 0 }]}>
                    <Text style={[styles.sectionTitle, { color: theme.title }]}>🔔 Notifications</Text>
                    <GlassCard style={styles.card}>
                        <Row
                            icon="bell"
                            title="Push Alerts"
                            subtitle="Instant warnings on lock screen"
                            theme={theme}
                            right={
                                <Switch
                                    value={pushAlerts}
                                    onValueChange={setPushAlerts}
                                    trackColor={{ true: theme.danger }}
                                />
                            }
                        />
                        <View style={[styles.divider, { backgroundColor: theme.border }]} />
                        <Row
                            icon="message-square"
                            title="SMS Alerts"
                            subtitle="Text messages for redundancy"
                            theme={theme}
                            right={
                                <Switch
                                    value={smsAlerts}
                                    onValueChange={setSmsAlerts}
                                    trackColor={{ true: theme.danger }}
                                />
                            }
                        />
                    </GlassCard>
                </View>

                {/* LOGOUT */}
                <TouchableOpacity
                    style={[styles.logout, { backgroundColor: theme.danger }]}
                    onPress={() => router.replace('/(auth)/login')}
                >
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.footerBrand}>
                        SMART<Text style={styles.redText}>SAFE</Text>
                    </Text>
                    <Text style={styles.footerSmall}>Protecting homes since 2023</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

function Row({ icon, title, subtitle, right, theme }) {
    return (
        <View style={styles.row}>
            {icon && <Feather name={icon} size={18} color={theme.danger} />}
            <View style={{ flex: 1, marginLeft: icon ? 14 : 0 }}>
                <Text style={[styles.rowTitle, { color: theme.text }]}>{title}</Text>
                {subtitle && <Text style={[styles.rowSubtitle, { color: theme.muted }]}>{subtitle}</Text>}
            </View>
            {right}
        </View>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#2B2D42',
    },
    scrollContent: {
        paddingBottom: 140,
        paddingHorizontal: 24,
    },
    profileCard: {
        borderRadius: 30,
        padding: 28,
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F8F9FA',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 18,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#F8F9FA',
    },
    editIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#EF233C',
        borderRadius: 14,
        padding: 8,
        borderWidth: 3,
        borderColor: '#fff',
        shadowColor: '#EF233C',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    name: {
        fontSize: 22,
        fontWeight: '900',
        marginBottom: 6,
        color: '#2B2D42',
    },
    email: {
        fontSize: 14,
        marginBottom: 20,
        fontWeight: '500',
        color: '#8D99AE',
    },
    badges: {
        flexDirection: 'row',
        gap: 10,
    },
    activeBadge: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#2ecc71',
    },
    badgeText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    planBadge: {
        backgroundColor: '#f1f3f5',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    planText: {
        fontSize: 11,
        color: '#2B2D42',
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '900',
        marginBottom: 14,
        letterSpacing: 1.5,
        color: '#8D99AE',
        textTransform: 'uppercase',
    },
    card: {
        padding: 5,
        borderRadius: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#2B2D42',
    },
    rowSubtitle: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
        color: '#8D99AE',
    },
    divider: {
        height: 1,
        marginHorizontal: 16,
        backgroundColor: '#F1F3F5',
    },
    logout: {
        height: 65,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: '#EF233C',
        shadowColor: '#EF233C',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
    },
    footerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    footerBrand: {
        fontSize: 16,
        fontWeight: '900',
        color: '#2B2D42',
        letterSpacing: 3,
    },
    redText: {
        color: '#EF233C',
    },
    footerSmall: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600',
        color: '#8D99AE',
    },
});
