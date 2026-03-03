import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Animated,
    StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Shield,
    Flame,
    Wind,
    AlertTriangle,
    Activity,
    Zap,
    Thermometer,
    Settings as SettingsIcon,
    Bell,
    ChevronRight,
    Droplets,
    Cpu
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { GlassCard } from '../../components/GlassCard';

const { width } = Dimensions.get('window');

const PulseDot = ({ color }) => {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.5,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.pulseDot,
                {
                    backgroundColor: color,
                    transform: [{ scale: pulseAnim }],
                    opacity: pulseAnim.interpolate({
                        inputRange: [1, 1.5],
                        outputRange: [1, 0.4],
                    }),
                },
            ]}
        />
    );
};

const DashboardItem = ({ icon: Icon, label, value, unit, color, trend, status }) => (
    <TouchableOpacity style={styles.metricCard} activeOpacity={0.7}>
        <View style={[styles.iconBox, { backgroundColor: `${color}15` }]}>
            <Icon size={22} color={color} />
        </View>
        <View style={styles.metricInfo}>
            <Text style={styles.metricLabel}>{label}</Text>
            <View style={styles.valueRow}>
                <Text style={styles.metricValue}>{value}</Text>
                <Text style={styles.metricUnit}>{unit}</Text>
            </View>
        </View>
        <View style={styles.metricRight}>
            {trend && (
                <View style={[styles.trendBadge, { backgroundColor: trend === 'Stable' ? '#E8F5E9' : '#FFF3E0' }]}>
                    <Text style={[styles.trendText, { color: trend === 'Stable' ? '#2E7D32' : '#EF6C00' }]}>{trend}</Text>
                </View>
            )}
            <ChevronRight size={18} color="#8D99AE" />
        </View>
    </TouchableOpacity>
);

const ProgressBar = ({ progress, color }) => (
    <View style={styles.progressContainer}>
        <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: color }]} />
    </View>
);

export default function DashboardScreen() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const safetyScoreAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(safetyScoreAnim, {
                toValue: 1,
                tension: 20,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const [gasLevel] = useState(12); // ppm
    const [smokeLevel] = useState(5); // %
    const [safetyScore] = useState(98);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                    {/* Header Section */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.greeting}>Security Overview</Text>
                            <View style={styles.statusRow}>
                                <Text style={styles.brandTitle}>SYSTEM LIVE</Text>
                                <PulseDot color="#2ECC71" />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.notifyBtn}
                            onPress={() => router.push('/notifications')}
                        >
                            <Bell size={24} color="#2B2D42" />
                            <View style={styles.notificationDot} />
                        </TouchableOpacity>
                    </View>

                    {/* Safety Score Hub */}
                    <Animated.View style={{ transform: [{ scale: safetyScoreAnim }] }}>
                        <GlassCard style={styles.scoreCard}>
                            <View style={styles.scoreMain}>
                                <View style={styles.scoreTextGroup}>
                                    <Text style={styles.scoreLabel}>Household Safety Index</Text>
                                    <Text style={styles.scoreValue}>{safetyScore}%</Text>
                                    <View style={styles.protectionBadge}>
                                        <Shield size={14} color="#FFF" />
                                        <Text style={styles.protectionText}>Full Protection Active</Text>
                                    </View>
                                </View>
                                <View style={styles.shieldVisual}>
                                    <View style={styles.shieldBackdrop} />
                                    <Shield size={70} color="#EF233C" strokeWidth={1.2} />
                                    <Activity size={24} color="#EF233C" style={styles.activityIcon} />
                                </View>
                            </View>
                        </GlassCard>
                    </Animated.View>

                    {/* Real-time Diagnostics */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Real-time Monitoring</Text>
                        <TouchableOpacity style={styles.scanBtn}>
                            <Cpu size={16} color="#EF233C" />
                            <Text style={styles.seeAll}>Deep Scan</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.diagnosticsGrid}>
                        <GlassCard style={styles.diagCard}>
                            <View style={styles.diagHeader}>
                                <Flame size={20} color="#EF233C" />
                                <Text style={styles.diagTitle}>Gas (ppm)</Text>
                            </View>
                            <Text style={styles.diagValue}>{gasLevel}</Text>
                            <ProgressBar progress={gasLevel * 2} color="#EF233C" />
                            <Text style={styles.diagStatus}>Safe Threshold</Text>
                        </GlassCard>

                        <GlassCard style={styles.diagCard}>
                            <View style={styles.diagHeader}>
                                <Wind size={20} color="#3A86FF" />
                                <Text style={styles.diagTitle}>Smoke (%)</Text>
                            </View>
                            <Text style={styles.diagValue}>{smokeLevel}</Text>
                            <ProgressBar progress={smokeLevel * 4} color="#3A86FF" />
                            <Text style={styles.diagStatus}>Normal Air</Text>
                        </GlassCard>
                    </View>

                    {/* Active Defense Nodes */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Defense Nodes</Text>
                        <Text style={styles.nodeCount}>3 Active</Text>
                    </View>
                    <View style={styles.sensorListContainer}>
                        <DashboardItem
                            icon={Flame}
                            label="Kitchen Gas Sensor"
                            value="Normal"
                            color="#EF233C"
                            trend="Stable"
                        />
                        <DashboardItem
                            icon={Wind}
                            label="Master Bedroom Smoke"
                            value="Clear"
                            color="#3A86FF"
                            trend="Stable"
                        />
                        <DashboardItem
                            icon={Thermometer}
                            label="Garage Thermal Monitor"
                            value="24"
                            unit="°C"
                            color="#FFBE0B"
                            trend="Rising"
                        />
                    </View>

                    {/* Emergency Actions */}
                    <Text style={styles.sectionTitle}>Quick Response</Text>
                    <View style={styles.actionsRow}>
                        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#EF233C' }]} activeOpacity={0.9}>
                            <View style={styles.actionIconBg}>
                                <Zap size={24} color="#EF233C" />
                            </View>
                            <View>
                                <Text style={styles.actionTitle}>Emergency SOS</Text>
                                <Text style={styles.actionSub}>Alert Local Services</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#2B2D42' }]} activeOpacity={0.9}>
                            <View style={[styles.actionIconBg, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
                                <Droplets size={24} color="#FFF" />
                            </View>
                            <View>
                                <Text style={styles.actionTitle}>Valve Control</Text>
                                <Text style={styles.actionSub}>Remote Gas Shutoff</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 100 }} />
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 10,
    },
    greeting: {
        fontSize: 15,
        color: '#8D99AE',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 4,
    },
    brandTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2B2D42',
    },
    pulseDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    notifyBtn: {
        width: 50,
        height: 50,
        borderRadius: 18,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 3,
    },
    notificationDot: {
        position: 'absolute',
        top: 14,
        right: 14,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#EF233C',
        borderWidth: 2,
        borderColor: '#FFF',
    },
    scoreCard: {
        padding: 25,
        borderRadius: 35,
        marginBottom: 25,
        backgroundColor: '#2B2D42',
    },
    scoreMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scoreTextGroup: {
        flex: 1,
    },
    scoreLabel: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        fontWeight: '600',
        marginBottom: 6,
    },
    scoreValue: {
        fontSize: 52,
        fontWeight: '900',
        color: '#FFF',
    },
    protectionBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EF233C',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 12,
        gap: 6,
    },
    protectionText: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: '700',
    },
    shieldVisual: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shieldBackdrop: {
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'rgba(239, 35, 60, 0.1)',
    },
    activityIcon: {
        position: 'absolute',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: '#2B2D42',
    },
    scanBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        gap: 6,
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    seeAll: {
        color: '#EF233C',
        fontWeight: '700',
        fontSize: 13,
    },
    diagnosticsGrid: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 25,
    },
    diagCard: {
        flex: 1,
        padding: 18,
        borderRadius: 25,
    },
    diagHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 15,
    },
    diagTitle: {
        fontSize: 12,
        color: '#8D99AE',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    diagValue: {
        fontSize: 28,
        fontWeight: '900',
        color: '#2B2D42',
        marginBottom: 12,
    },
    diagStatus: {
        fontSize: 11,
        color: '#8D99AE',
        marginTop: 10,
        fontWeight: '600',
    },
    progressContainer: {
        height: 7,
        backgroundColor: '#EDF2F4',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    nodeCount: {
        fontSize: 13,
        color: '#2ECC71',
        fontWeight: '700',
    },
    sensorListContainer: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 2,
        marginBottom: 25,
    },
    metricCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 4,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    metricInfo: {
        flex: 1,
    },
    metricLabel: {
        fontSize: 14,
        color: '#2B2D42',
        fontWeight: '700',
        marginBottom: 2,
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    metricValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#8D99AE',
    },
    metricUnit: {
        fontSize: 11,
        color: '#8D99AE',
        marginLeft: 2,
    },
    metricRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    trendBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    trendText: {
        fontSize: 10,
        fontWeight: '800',
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 15,
    },
    actionBtn: {
        flex: 1,
        height: 160,
        borderRadius: 30,
        padding: 20,
        justifyContent: 'space-between',
        shadowColor: '#EF233C',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
    },
    actionIconBg: {
        width: 50,
        height: 50,
        borderRadius: 18,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '900',
    },
    actionSub: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 11,
        fontWeight: '600',
        marginTop: 2,
    },
});
