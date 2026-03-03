import { GlassCard } from '../../components/GlassCard';
import { useColorScheme } from '../../components/useColorScheme';
import { Colors } from '../../constants/Colors';
import { AlertCircle, Bell, CheckCircle, ChevronLeft, Flame, Grid, ShieldOff, WifiOff, Zap } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function NotificationsScreen() {
    const theme = Colors.light;
    const router = useRouter();
    const [activeTab, setActiveTab] = React.useState('Active');

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <View style={{ width: 28 }} />
                <Text style={[styles.headerTitle, { color: theme.title }]}>Notifications</Text>
                <TouchableOpacity>
                    <Grid size={28} color={theme.text} />
                </TouchableOpacity>
            </View>

            <View style={[styles.tabBar, { backgroundColor: '#E9ECEF' }]}>
                <TouchableOpacity
                    style={[styles.tabItem, activeTab === 'Active' && styles.activeTab]}
                    onPress={() => setActiveTab('Active')}
                >
                    <Text style={activeTab === 'Active' ? styles.activeTabText : [styles.inactiveTabText, { color: theme.muted }]}>Active Alerts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabItem, activeTab === 'History' && styles.activeTab]}
                    onPress={() => setActiveTab('History')}
                >
                    <Text style={activeTab === 'History' ? styles.activeTabText : [styles.inactiveTabText, { color: theme.muted }]}>History</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {activeTab === 'Active' ? (
                    <>
                        {/* Main Alert Card */}
                        <View style={[styles.alertCardContainer, { borderRadius: 30, overflow: 'hidden' }]}>
                            <ImageBackground
                                source={require('../../assets/images/gas_leak_alert.png')}
                                style={styles.alertCard}
                                imageStyle={{ borderRadius: 30, opacity: 1.0 }}
                                resizeMode="cover"
                            >
                                <View style={styles.alertHeader}>
                                    <View style={styles.alertBadge}>
                                        <AlertCircle size={16} color="#fff" fill={theme.danger} />
                                        <Text style={styles.alertBadgeText}>CRITICAL SEVERITY</Text>
                                    </View>
                                </View>
                                <Text style={styles.alertTitle}>DANGER:{"\n"}GAS LEAK</Text>
                                <View style={styles.alertFooter}>
                                    <Text style={styles.alertSub}>GAS TURNED OFF.</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        {/* Action Buttons */}
                        <View style={styles.actionRow}>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.border }]}>
                                <Zap size={22} color="#fff" />
                                <Text style={styles.actionBtnText}>LED Strobe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.border }]}>
                                <Bell size={22} color="#fff" />
                                <Text style={styles.actionBtnText}>Vibrating Alert</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.border }]}>
                                <Bell size={22} color="#fff" />
                                <Text style={styles.actionBtnText}>MP3 Sounding</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.emergencyRow}>
                            <TouchableOpacity style={[styles.callBtn, { flex: 1, backgroundColor: theme.border }]}>
                                <Text style={[styles.callBtnText, { color: theme.text }]}>Shelter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.callBtn, { flex: 2, backgroundColor: theme.danger }]}>
                                <Bell size={22} color="#fff" style={{ marginRight: 10 }} />
                                <Text style={styles.callBtnText}>Call 911</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Additional Active Alerts */}
                        <View style={{ marginTop: 32 }}>
                            <Text style={[styles.historyTitle, { color: theme.title, marginBottom: 16 }]}>Ongoing Alerts</Text>

                            <GlassCard style={[styles.historyCard, { borderColor: 'rgba(239, 35, 60, 0.4)', borderWidth: 1.5 }]}>
                                <View style={styles.itemRow}>
                                    <View style={[styles.historyIconBox, { backgroundColor: 'rgba(239, 35, 60, 0.15)' }]}>
                                        <AlertCircle size={24} color={theme.danger} />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={[styles.itemTitle, { color: theme.text }]}>Smoke Detected</Text>
                                        <Text style={[styles.itemSub, { color: theme.muted }]}>Kitchen Area - Immediate Action</Text>
                                    </View>
                                    <View style={[styles.statusTag, { backgroundColor: theme.danger }]}>
                                        <Text style={styles.statusTagText}>CRITICAL</Text>
                                    </View>
                                </View>
                            </GlassCard>

                            <GlassCard style={[styles.historyCard, { borderColor: 'rgba(241, 196, 15, 0.3)', borderWidth: 1 }]}>
                                <View style={styles.itemRow}>
                                    <View style={[styles.historyIconBox, { backgroundColor: 'rgba(241, 196, 15, 0.1)' }]}>
                                        <Zap size={24} color="#F1C40F" />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={[styles.itemTitle, { color: theme.text }]}>Natural Gas Trace</Text>
                                        <Text style={[styles.itemSub, { color: theme.muted }]}>Basement Sump - Monitoring</Text>
                                    </View>
                                    <View style={[styles.statusTag, { backgroundColor: '#F1C40F' }]}>
                                        <Text style={styles.statusTagText}>Warning</Text>
                                    </View>
                                </View>
                            </GlassCard>
                        </View>
                    </>
                ) : (
                    <View style={styles.historySection}>
                        <View style={styles.historyHeader}>
                            <Text style={[styles.historyTitle, { color: theme.title }]}>Alert Log History</Text>
                        </View>

                        <HistoryItem
                            icon={<Zap size={24} color={theme.text} />}
                            title="Sensor Battery Low"
                            sub={`Living Room - Main Unit\nOct 14, 2:15PM`}
                            status="Warning"
                            statusColor={theme.warning}
                            theme={theme}
                        />

                        <HistoryItem
                            icon={<Flame size={24} color={theme.danger} />}
                            title="High Heat Resolved"
                            sub={`Garage Sensor - Safe Temps\nOct 13, 11:45PM`}
                            status="Resolved"
                            statusColor={theme.success}
                            theme={theme}
                        />

                        <HistoryItem
                            icon={<ShieldOff size={24} color={theme.text} />}
                            title="CO Leakage Stabilized"
                            sub={`Basement - Air Purified\nOct 12, 11:20PM`}
                            status="Safe"
                            statusColor={theme.success}
                            theme={theme}
                        />

                        <HistoryItem
                            icon={<ShieldOff size={24} color={theme.text} />}
                            title="Smoke Detected"
                            sub={`Kitchen - Ceiling Mount\nOct 12, 9:32AM`}
                            status="Resolved"
                            statusColor={theme.success}
                            theme={theme}
                        />
                    </View>
                )}


            </ScrollView>
        </SafeAreaView>
    );
}


function HistoryItem({ icon, title, sub, status, statusColor, theme }) {
    return (
        <GlassCard style={styles.historyCard}>
            <View style={styles.itemRow}>
                <View style={[styles.historyIconBox, { backgroundColor: 'rgba(141, 153, 174, 0.1)' }]}>
                    {icon}
                </View>
                <View style={styles.itemInfo}>
                    <Text style={[styles.itemTitle, { color: theme.text }]}>{title}</Text>
                    <Text style={[styles.itemSub, { color: theme.muted }]}>{sub}</Text>
                </View>
                <View style={[styles.statusTag, { backgroundColor: statusColor }]}>
                    <Text style={styles.statusTagText}>{status}</Text>
                </View>
            </View>
        </GlassCard>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 20 },
    headerTitle: { fontSize: 20, fontWeight: '700' },
    tabBar: { flexDirection: 'row', marginHorizontal: 24, borderRadius: 16, padding: 6 },
    tabItem: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
    activeTab: { backgroundColor: '#EF233C' },
    activeTabText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
    inactiveTabText: { fontSize: 14 },
    scrollContent: { padding: 24, paddingBottom: 140 },
    alertCardContainer: { backgroundColor: '#EF233C', shadowColor: '#EF233C', shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 },
    alertCard: { padding: 24, minHeight: 220, justifyContent: 'space-between' },
    alertHeader: { flexDirection: 'row', justifyContent: 'flex-end' },
    alertBadge: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', backgroundColor: 'rgba(255,255,255,0.25)', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12, gap: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },
    alertBadgeText: { color: '#fff', fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
    alertTitle: { color: '#fff', fontSize: 38, fontWeight: '900', lineHeight: 42, letterSpacing: 1 },
    alertFooter: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.3)', paddingTop: 15 },
    alertSub: { color: '#fff', fontSize: 15, fontWeight: '800' },
    actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 28, gap: 12 },
    actionBtn: { flex: 1, padding: 18, borderRadius: 20, alignItems: 'center', gap: 10, backgroundColor: '#2B2D42', shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 },
    actionBtnText: { color: '#fff', fontSize: 11, fontWeight: '700', textAlign: 'center' },
    emergencyRow: { flexDirection: 'row', gap: 12, marginTop: 24 },
    callBtn: { paddingVertical: 18, borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 4 },
    callBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
    historySection: { marginTop: 40 },
    historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    historyTitle: { fontSize: 20, fontWeight: '900', color: '#2B2D42' },
    historyCard: { padding: 20, marginVertical: 8, borderRadius: 24 },
    historyIconBox: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 16, backgroundColor: 'rgba(141, 153, 174, 0.1)' },
    itemRow: { flexDirection: 'row', alignItems: 'center' },
    itemInfo: { flex: 1 },
    itemTitle: { fontSize: 16, fontWeight: '800', color: '#2B2D42' },
    itemSub: { fontSize: 12, marginTop: 4, lineHeight: 18, fontWeight: '500' },
    statusTag: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
    statusTagText: { color: '#fff', fontSize: 10, fontWeight: '900', letterSpacing: 0.5 }
});
