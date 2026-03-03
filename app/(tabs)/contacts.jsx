import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { GlassCard } from '../../components/GlassCard';

/* ---------------- CONTACT CARD ---------------- */
const ContactCard = ({ initials, name, role, theme }) => {
    return (
        <GlassCard style={styles.card}>
            <View style={[styles.avatar, { backgroundColor: role === 'MOTHER' ? '#EF233C' : '#FFD700' }]}>
                <Text style={[styles.avatarText, { color: role === 'MOTHER' ? '#fff' : '#000' }]}>{initials}</Text>
            </View>

            <View style={styles.info}>
                <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
                <Text style={[styles.role, { color: theme.muted }]}>{role}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name="pencil" size={20} color={theme.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <View style={styles.deleteCircle}>
                        <Ionicons name="trash" size={18} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
        </GlassCard>
    );
};

export default function ContactsScreen() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const theme = Colors.light;

    const handleSaveContact = () => {
        if (!fullName || !phoneNumber) return;
        setShowSuccess(true);
        setFullName('');
        setPhoneNumber('');
    };

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerTitle, { color: theme.title }]}>Emergency Contacts</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.infoSection}>
                    <Text style={[styles.title, { color: theme.title }]}>Who is your Back?</Text>
                    <Text style={[styles.subtitle, { color: theme.muted }]}>
                        Add your trusted contacts to notify them instantly in case of emergency.
                    </Text>
                </View>

                {/* ---------------- EMERGENCY CONTACTS ---------------- */}
                <View style={styles.section}>
                    <ContactCard initials="SM" name="Sarah Miller" role="MOTHER" theme={theme} />
                    <ContactCard initials="DJ" name="David Johnson" role="NEIGHBOUR" theme={theme} />

                    <View style={[styles.divider, { backgroundColor: theme.border }]} />

                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={[styles.addText, { color: theme.muted }]}>ADD NEW CONTACT</Text>
                    </TouchableOpacity>
                </View>

                {/* ---------------- ADD CONTACT FORM ---------------- */}
                <View style={styles.formContainer}>
                    <Text style={[styles.fieldtitle, { color: theme.text }]}>Name</Text>
                    <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.navBackGround }]}>
                        <Ionicons name="person-outline" size={22} color={theme.muted} />
                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor={theme.muted}
                            value={fullName}
                            onChangeText={setFullName}
                            style={[styles.input, { color: theme.text }]}
                        />
                    </View>

                    <Text style={[styles.fieldtitle, { color: theme.text }]}>Phone Number</Text>
                    <View style={[styles.inputContainer, { borderColor: theme.border, backgroundColor: theme.navBackGround }]}>
                        <Ionicons name="call-outline" size={22} color={theme.muted} />
                        <TextInput
                            placeholder="+250 722 669 476"
                            placeholderTextColor={theme.muted}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            style={[styles.input, { color: theme.text }]}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.danger }]}
                        activeOpacity={0.8}
                        onPress={handleSaveContact}
                    >
                        <Text style={styles.buttonText}>Save Contact</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* SUCCESS MODAL */}
            <Modal
                visible={showSuccess}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.successIconCircle}>
                            <Ionicons name="checkmark-circle" size={80} color="#2ECC71" />
                        </View>
                        <Text style={styles.modalTitle}>Success!</Text>
                        <Text style={styles.modalSub}>
                            Trusted contact has been added successfully.
                        </Text>

                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setShowSuccess(false)}
                        >
                            <Text style={styles.modalButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
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
        fontSize: 20,
        fontWeight: '700',
    },
    scrollContent: {
        paddingBottom: 140,
    },
    infoSection: {
        paddingHorizontal: 24,
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    section: {
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        marginBottom: 16,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    avatarText: {
        fontWeight: '900',
        fontSize: 18,
    },
    info: {
        flex: 1,
        marginLeft: 18,
    },
    name: {
        fontSize: 17,
        fontWeight: '800',
    },
    role: {
        fontSize: 11,
        fontWeight: '700',
        marginTop: 4,
        letterSpacing: 1,
        color: '#8D99AE',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    iconBtn: {
        padding: 6,
    },
    deleteCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#EF233C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        height: 1,
        marginVertical: 24,
    },
    addBtn: {
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: 'rgba(141, 153, 174, 0.05)',
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#8D99AE',
    },
    addText: {
        fontSize: 13,
        fontWeight: '800',
        letterSpacing: 1,
    },
    formContainer: {
        paddingHorizontal: 24,
        marginTop: 10,
    },
    fieldtitle: {
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 10,
        marginTop: 20,
        color: '#2B2D42',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        height: 65,
        paddingHorizontal: 18,
        backgroundColor: '#F8F9FA',
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    input: {
        flex: 1,
        marginLeft: 14,
        fontSize: 16,
        fontWeight: '600',
    },
    button: {
        height: 65,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        shadowColor: '#EF233C',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
    },
    /* SUCCESS MODAL */
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 30,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    successIconCircle: {
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#000',
        marginBottom: 12,
    },
    modalSub: {
        fontSize: 16,
        color: '#6C757D',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 30,
    },
    modalButton: {
        backgroundColor: '#EF233C',
        height: 60,
        width: '100%',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
    },
});
