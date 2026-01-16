import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';

import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/* ---------------- CONTACT CARD ---------------- */
const ContactCard = ({ initials, name, role }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="pencil" size={20} color="#000" />
        </Pressable>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="trash" size={20} color="#E53935" />
        </Pressable>
      </View>
    </View>
  );
};

/* ---------------- MAIN SCREEN ---------------- */
export default function AddContact({ onPress }) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Image
              style={{ width: 140, height: 50, resizeMode: 'contain' }}
            />
          ),
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: true,
        }}
      />

      {/* ---------------- EMERGENCY CONTACTS ---------------- */}
      <View style={styles.section}>
        <ContactCard initials="SM" name="Sarah Miller" role="MOTHER" />
        <ContactCard initials="DJ" name="David Johnson" role="NEIGHBOUR" />

        <View style={styles.divider} />

        <Pressable style={styles.addBtn}>
          <Text style={styles.addText}>ADD NEW CONTACT</Text>
        </Pressable>
      </View>

      {/* ---------------- ADD CONTACT FORM ---------------- */}
      <View style={styles.container}>
        <Text style={styles.title}>Who is your Back?</Text>
        <Text style={styles.subtitle}>
          Add your trusted contacts to notify them instantly in case of emergency
        </Text>

        <Text style={styles.fieldtitle}>Name</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={22} color="#777" />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />
        </View>

        <Text style={styles.fieldtitle}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={22} color="#777" />
          <TextInput
            placeholder="+250 722 669 476"
            placeholderTextColor="#aaa"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.text}>Save Contact</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  /* SECTION */
  section: {
    padding: 20,
    backgroundColor: '#fff',
  },

  /* CARD */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8C97A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontWeight: '700',
    fontSize: 16,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  role: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9E9E9E',
    marginTop: 2,
    letterSpacing: 0.8,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  iconBtn: {
    padding: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 18,
  },

  addBtn: {
    alignItems: 'center',
  },

  addText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9E9E9E',
    letterSpacing: 1,
  },

  /* FORM */
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },

  fieldtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  button: {
    height: 65,
    backgroundColor: '#D61C1C',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  pressed: {
    opacity: 0.85,
  },
});
