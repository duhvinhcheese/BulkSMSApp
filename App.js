import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const BulkSMSApp = () => {
  const [message, setMessage] = useState('');
  const [numbers, setNumbers] = useState('');
  const [currentScreen, setCurrentScreen] = useState('main');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: '#2563eb',
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    content: {
      padding: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#2563eb',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bulk SMS Sender</Text>
      </View>
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter phone numbers (one per line)"
          multiline
          value={numbers}
          onChangeText={setNumbers}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Messages</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BulkSMSApp;