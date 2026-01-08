import { Button, Image } from "react-native";
// import { StyleSheet, View, Text } from "react-native";
import { View, Text, TextInput, StyleSheet,  Pressable } from 'react-native';
import { useState } from 'react';
import { Stack } from "expo-router";


export default function Login({ onPress }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
          <Stack.Screen
        options={{
          headerTitle: () => (
            <Image
              source={require('../../assets/images/large.png')}
              style={{ width: 140, height: 50, resizeMode: 'contain' }}
            />
           
          ),
          headerStyle: {
            backgroundColor: '#0F0303',
          },
          headerShadowVisible: false,
        }}
         
      />
    <View style = {styles.container}>
      <Text style ={styles.title} >Welcome Back</Text>
      <Text style ={styles.subtitle} >Securely access your safety dashboard. </Text>

        <View style={styles.form}>
        <Text style ={styles.fieldtitle} >Enter your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <Text style ={styles.fieldtitle} >Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
         <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>Login</Text>
    </Pressable>
    </View>

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
    </>
  );
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#0F0303',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
  },
   container: {
    gap: 5,
  },
  input: {
    height: 70,
    backgroundColor: '#1a0a0a',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  
  },
  fieldtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 35,

  },
    button: {
    height: 70,
    backgroundColor: '#D61C1C',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },

  pressed: {
    opacity: 0.55,
    transform: [{ scale: 0.88 }],
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

    orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    marginLeft: 20,
    marginRight: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#3a2a2a',
  },

  orText: {
    marginHorizontal: 10,
    color: '#aaa',
    fontSize: 14,
  },
  createButton: {
    height: 70,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#6b5a5a',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  createText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },

  pressed: {
    opacity: 0.85,
  },
})