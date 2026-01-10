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



export default function Login({ onPress }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Image
              style={{ width: 140, height: 50, resizeMode: 'contain' }}
            />
          ),
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: false,
        }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Securely access your safety dashboard.
        </Text>

        {/* EMAIL */}
        <Text style={styles.fieldtitle}>Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={22} color="#777" />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        {/* PASSWORD */}
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

        {/* LOGIN BUTTON */}
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.createButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.createText}>Create New Account</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
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

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },

  orText: {
    marginHorizontal: 10,
    color: '#aaa',
  },

  createButton: {
    height: 65,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6b5a5a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  createText: {
    fontSize: 18,
  },

  pressed: {
    opacity: 0.85,
  },
});
