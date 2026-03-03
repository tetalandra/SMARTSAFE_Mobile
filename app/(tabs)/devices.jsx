import { CustomButton } from '../../components/CustomButton';
import { GlassCard } from '../../components/GlassCard';
import { useColorScheme } from '../../components/useColorScheme';
import { Colors } from '../../constants/Colors';
import { Activity, AlertTriangle, Bell, ChevronLeft, Flame, HelpCircle, List, Plus, Shield, Users, Zap } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DeviceManagementScreen() {
    const theme = Colors.light;
    const router = useRouter();

    // Toggle States
    const [statusAlerts, setStatusAlerts] = useState(true);
    const [trustedContactsToggle, setTrustedContactsToggle] = useState(true);
    const [gasShutoff, setGasShutoff] = useState(true);
    const [emergencyTeam, setEmergencyTeam] = useState(true);

    // Sensor States
    const [kitchenSensor, setKitchenSensor] = useState(true);
    const [livingRoomSensor, setLivingRoomSensor] = useState(true);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ width: 28 }} />
                    <Text style={[styles.headerTitle, { color: theme.title }]}>Device Management</Text>
                    <TouchableOpacity>
                        <HelpCircle size={28} color={theme.muted} />
                    </TouchableOpacity>
                </View>

                {/* Safety Score Card */}
                <GlassCard style={styles.scoreCard}>
                    <View style={styles.scoreHeader}>
                        <Text style={styles.scoreLabel}>SAFETY SCORE</Text>
                        <View style={styles.monitoringBadge}>
                            <Text style={styles.monitoringBadgeText}>MONITORED</Text>
                        </View>
                    </View>
                    <View style={styles.scoreValueRow}>
                        <Text style={[styles.scoreValue, { color: theme.text }]}>98%</Text>
                        <Text style={styles.scoreUnit}>Secure</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '98%', backgroundColor: theme.danger }]} />
                    </View>
                </GlassCard>

                {/* Quick Actions */}
                <View style={styles.actionRow}>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.navBackGround, borderColor: theme.border }]}>
                        <Activity size={20} color={theme.danger} />
                        <Text style={[styles.actionText, { color: theme.text }]}>Test All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.navBackGround, borderColor: theme.border }]}>
                        <Shield size={20} color={theme.danger} />
                        <Text style={[styles.actionText, { color: theme.text }]}>Mute Alarm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, { backgroundColor: theme.navBackGround, borderColor: theme.border }]}>
                        <List size={20} color={theme.danger} />
                        <Text style={[styles.actionText, { color: theme.text }]}>Logs</Text>
                    </TouchableOpacity>
                </View>

                {/* Accessibility & Alerts */}
                <View style={[styles.sectionHeaderBar, { borderColor: theme.border }]}>
                    <Text style={[styles.sectionHeaderText, { color: theme.title }]}>ACCESSIBILITY & ALERTS</Text>
                </View>

                <View style={styles.section}>
                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(239, 35, 60, 0.1)' }]}>
                                <Bell size={24} color={theme.danger} />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>Status Alerts (Critic)</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>Call for critical alerts</Text>
                            </View>
                            <Switch
                                value={statusAlerts}
                                onValueChange={setStatusAlerts}
                                trackColor={{ false: theme.border, true: theme.danger }}
                                thumbColor="#fff"
                            />
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(141, 153, 174, 0.1)' }]}>
                                <Activity size={24} color={theme.muted} />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>Sound Pattern</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>High Pitch (Continuous)</Text>
                            </View>
                            <List size={22} color={theme.muted} />
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(112, 161, 255, 0.1)' }]}>
                                <Users size={24} color="#70E000" />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>LED & Vibration</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>Strong Sine (Blur)</Text>
                            </View>
                            <Activity size={22} color={theme.muted} />
                        </View>
                    </GlassCard>
                </View>

                {/* Emergency Response */}
                <View style={[styles.sectionHeaderBar, { borderColor: theme.border }]}>
                    <Text style={[styles.sectionHeaderText, { color: theme.title }]}>EMERGENCY RESPONSE</Text>
                </View>

                <View style={styles.section}>
                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(112, 224, 0, 0.1)' }]}>
                                <Users size={24} color={theme.success} />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>Trusted Contacts</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>Response Team</Text>
                            </View>
                            <Switch
                                value={trustedContactsToggle}
                                onValueChange={setTrustedContactsToggle}
                                trackColor={{ false: theme.border, true: theme.success }}
                                thumbColor="#fff"
                            />
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(239, 35, 60, 0.1)' }]}>
                                <Flame size={24} color={theme.danger} />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>Auto Gas Shutoff</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>Engages on leak detector</Text>
                            </View>
                            <Switch
                                value={gasShutoff}
                                onValueChange={setGasShutoff}
                                trackColor={{ false: theme.border, true: theme.danger }}
                                thumbColor="#fff"
                            />
                        </View>
                    </GlassCard>

                    <GlassCard style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.iconBox, { backgroundColor: 'rgba(239, 35, 60, 0.1)' }]}>
                                <AlertTriangle size={24} color={theme.danger} />
                            </View>
                            <View style={styles.itemInfo}>
                                <Text style={[styles.itemTitle, { color: theme.text }]}>Notify Emergency Team</Text>
                                <Text style={[styles.itemSub, { color: theme.muted }]}>Local fire/First Resp</Text>
                            </View>
                            <Switch
                                value={emergencyTeam}
                                onValueChange={setEmergencyTeam}
                                trackColor={{ false: theme.border, true: theme.danger }}
                                thumbColor="#fff"
                            />
                        </View>
                    </GlassCard>
                </View>

                {/* Active Sensors */}
                <View style={styles.activeSensorsHeader}>
                    <Text style={[styles.activeSensorsTitle, { color: theme.title }]}>Active Sensors</Text>
                    <TouchableOpacity><Text style={styles.seeAllText}>See All</Text></TouchableOpacity>
                </View>

                <View style={styles.section}>
                    {/* Kitchen Gas Sensor */}
                    <GlassCard style={styles.sensorCard}>
                        <View style={styles.sensorRow}>
                            <View style={styles.sensorInfo}>
                                <View style={styles.sensorTitleRow}>
                                    <View style={[styles.sensorDot, { backgroundColor: '#EF233C' }]} />
                                    <Text style={[styles.sensorTitle, { color: theme.text }]}>Kitchen Gas Sensor</Text>
                                </View>
                                <View style={styles.sensorMetaRow}>
                                    <Text style={[styles.sensorStatus, { color: '#70E000' }]}>Online</Text>
                                    <View style={styles.signalMiniBadge}>
                                        <Zap size={12} color="#fff" />
                                        <Text style={styles.signalMiniText}>92%</Text>
                                    </View>
                                </View>
                                <View style={styles.sensorActionRow}>
                                    <TouchableOpacity
                                        style={[styles.sensorSwitch, { backgroundColor: kitchenSensor ? '#EF233C' : '#8D99AE' }]}
                                        onPress={() => setKitchenSensor(!kitchenSensor)}
                                    >
                                        <View style={[styles.sensorSwitchKnob, { alignSelf: kitchenSensor ? 'flex-end' : 'flex-start' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.configureBtn, { backgroundColor: theme.border }]}>
                                        <Text style={styles.configureText}>Configure</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image source={require('../../assets/images/kitchen_sensor.png')} style={styles.sensorImage} />
                        </View>
                    </GlassCard>

                    {/* Living Room Smoke */}
                    <GlassCard style={styles.sensorCard}>
                        <View style={styles.sensorRow}>
                            <View style={styles.sensorInfo}>
                                <View style={styles.sensorTitleRow}>
                                    <View style={[styles.sensorDot, { backgroundColor: '#FFD700' }]} />
                                    <Text style={[styles.sensorTitle, { color: theme.text }]}>Living Room Smoke</Text>
                                </View>
                                <View style={styles.sensorMetaRow}>
                                    <Text style={[styles.sensorStatus, { color: '#70E000' }]}>Online</Text>
                                    <View style={styles.signalMiniBadge}>
                                        <Zap size={12} color="#fff" />
                                        <Text style={styles.signalMiniText}>85%</Text>
                                    </View>
                                </View>
                                <View style={styles.sensorActionRow}>
                                    <TouchableOpacity
                                        style={[styles.sensorSwitch, { backgroundColor: livingRoomSensor ? '#EF233C' : '#8D99AE' }]}
                                        onPress={() => setLivingRoomSensor(!livingRoomSensor)}
                                    >
                                        <View style={[styles.sensorSwitchKnob, { alignSelf: livingRoomSensor ? 'flex-end' : 'flex-start' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.configureBtn, { backgroundColor: theme.border }]}>
                                        <Text style={styles.configureText}>Configure</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image source={require('../../assets/images/living_room_smoke.png')} style={styles.sensorImage} />
                        </View>
                    </GlassCard>

                    {/* Garage Heat Sensor */}
                    <GlassCard style={styles.sensorCard}>
                        <View style={styles.sensorRow}>
                            <View style={styles.sensorInfo}>
                                <View style={styles.sensorTitleRow}>
                                    <View style={[styles.sensorDot, { backgroundColor: '#EF233C' }]} />
                                    <Text style={[styles.sensorTitle, { color: theme.text }]}>Garage Heat Sensor</Text>
                                </View>
                                <View style={styles.sensorMetaRow}>
                                    <View style={styles.batteryRow}>
                                        <Zap size={12} color="#EF233C" />
                                        <Text style={[styles.sensorStatus, { color: '#EF233C' }]}>Weak battery</Text>
                                        <Text style={styles.batteryValue}>12%</Text>
                                    </View>
                                </View>
                                <View style={styles.sensorActionRow}>
                                    <TouchableOpacity style={[styles.sensorActionBtn, { backgroundColor: '#EF233C' }]}>
                                        <Text style={styles.sensorActionBtnText}>Read historical</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image source={require('../../assets/images/garage_heat.png')} style={styles.sensorImage} />
                        </View>
                    </GlassCard>
                </View>

                {/* FAB */}
                <TouchableOpacity style={styles.fab}>
                    <Plus size={32} color="#fff" />
                </TouchableOpacity>


                <Text style={styles.footer}>SmartSafe v2.2.0{"\n"}Protecting homes since 2023</Text>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContent: { padding: 24, paddingBottom: 140 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 22, fontWeight: '700' },
    scoreCard: { padding: 24, marginBottom: 24, borderRadius: 24, backgroundColor: 'rgba(239, 35, 60, 0.05)', borderWidth: 1, borderColor: 'rgba(239, 35, 60, 0.1)' },
    scoreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    scoreLabel: { color: '#8D99AE', fontSize: 13, fontWeight: '700', letterSpacing: 2 },
    monitoringBadge: { backgroundColor: '#70E000', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    monitoringBadgeText: { color: '#000', fontSize: 10, fontWeight: '800' },
    scoreValueRow: { flexDirection: 'row', alignItems: 'baseline', marginVertical: 12, gap: 10 },
    scoreValue: { fontSize: 48, fontWeight: '700' },
    scoreUnit: { color: '#8D99AE', fontSize: 22, fontWeight: '600' },
    progressBar: { height: 8, backgroundColor: '#E2E8F0', borderRadius: 4, marginTop: 12 },
    progressFill: { height: 8, borderRadius: 4 },
    actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24, gap: 12 },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 12,
        gap: 8,
        borderWidth: 1,
    },
    actionText: { fontSize: 13, fontWeight: '600' },
    sectionHeaderBar: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginBottom: 16,
        alignItems: 'center'
    },
    sectionHeaderText: { fontSize: 13, fontWeight: '700', letterSpacing: 2 },
    section: { marginBottom: 24 },
    itemCard: { padding: 16, marginVertical: 6, borderRadius: 16 },
    itemRow: { flexDirection: 'row', alignItems: 'center' },
    iconBox: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
    itemInfo: { flex: 1 },
    itemTitle: { fontSize: 15, fontWeight: '700' },
    itemSub: { fontSize: 12, marginTop: 2 },
    activeSensorsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    activeSensorsTitle: { fontSize: 18, fontWeight: '700' },
    seeAllText: { color: '#EF233C', fontSize: 12, fontWeight: '700' },
    sensorCard: { padding: 0, marginVertical: 8, borderRadius: 20, overflow: 'hidden' },
    sensorRow: { flexDirection: 'row', height: 120 },
    sensorInfo: { flex: 1, padding: 16, justifyContent: 'space-between' },
    sensorTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    sensorDot: { width: 8, height: 8, borderRadius: 4 },
    sensorTitle: { fontSize: 15, fontWeight: '700' },
    sensorMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    sensorStatus: { fontSize: 12, fontWeight: '700' },
    batteryRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    batteryValue: { fontSize: 12, marginLeft: 4, color: '#8D99AE' },
    signalMiniBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EF233C', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, gap: 4 },
    signalMiniText: { color: '#fff', fontSize: 10, fontWeight: '700' },
    sensorActionRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    sensorSwitch: { width: 36, height: 20, borderRadius: 10, backgroundColor: '#EF233C', padding: 2 },
    sensorSwitchKnob: { width: 16, height: 16, borderRadius: 8, backgroundColor: '#fff', alignSelf: 'flex-start' },
    configureBtn: { paddingHorizontal: 16, paddingVertical: 6, borderRadius: 8 },
    configureText: { color: '#fff', fontSize: 12, fontWeight: '700' },
    sensorActionBtn: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 10 },
    sensorActionBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },
    sensorImage: { width: 100, height: '100%', borderTopRightRadius: 24, borderBottomRightRadius: 24 },
    fab: {
        position: 'absolute',
        bottom: 120, // Moved up to avoid TabBar
        right: 24,
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: '#EF233C',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#EF233C',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        elevation: 12,
        borderWidth: 3,
        borderColor: '#fff',
    },
    footer: { textAlign: 'center', color: '#8D99AE', fontSize: 13, marginTop: 40, marginBottom: 20, lineHeight: 22, fontWeight: '600' }
});
