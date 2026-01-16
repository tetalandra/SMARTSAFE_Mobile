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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
export default function Register({ onPress }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Securely access your safety dashboard.
          </Text>

          <Text style={styles.fieldtitle}>First Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={22} color="#777" />
            <TextInput
              placeholder="First name"
              placeholderTextColor="#aaa"
              value={firstName}
              onChangeText={setFirstName}
              style={styles.input}
            />
          </View>

          <Text style={styles.fieldtitle}>Last Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={22} color="#777" />
            <TextInput
              placeholder="Last name"
              placeholderTextColor="#aaa"
              value={lastName}
              onChangeText={setLastName}
              style={styles.input}
            />
          </View>

          <Text style={styles.fieldtitle}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={22} color="#777" />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <Text style={styles.fieldtitle}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={22} color="#777" />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          <Pressable
            onPress={onPress}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.text}>Continue</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    padding: 20,
  },

  title: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    color: '#1c1c1c1',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },

  fieldtitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: '#000000',
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
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  pressed: {
    opacity: 0.85,
  },
});
