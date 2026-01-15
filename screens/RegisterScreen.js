import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { loadUsers, addUser, saveUsers } from '../data/users';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password || !confirm) {
      setError('Please fill in all fields.');
      return;
    }

    if (!normalizedEmail.includes('@') || !normalizedEmail.includes('.com')) {
      setError('Please enter a valid email.');
      return;
    }

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    const users = await loadUsers();

    if (users.some(u => u.email.toLowerCase() === normalizedEmail)) {
      setError('Email already registered.');
      return;
    }

    await addUser(normalizedEmail, password);
    alert('Registration successful! Please login.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your account to start your adventure.</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
          style={styles.input}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.goBack()}>
          <Text style={styles.registerText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e1e2e', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 25, elevation: 5 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#666', marginBottom: 20, fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#4f46e5', padding: 15, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  registerText: { color: '#4f46e5', textAlign: 'center', fontWeight: 'bold' },
});
