import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function ExpenseList({ navigation }) {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadExpenses();
  }, []);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses, loaded]);

  const loadExpenses = async () => {
    const data = await AsyncStorage.getItem('expenses');
    if (data) {
      setExpenses(JSON.parse(data));
    }
    setLoaded(true);
  };

  const addExpense = () => {
    if (!description.trim() || !amount) {
      alert('Please enter description and amount');
      return;
    }

    setExpenses(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        description,
        amount: Number(amount),
        category,
        date: new Date().toLocaleDateString()
      }
    ]);

    setDescription('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        Expense Tracker
      </Text>

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={{ marginBottom: 10 }}
      >
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Entertainment" value="Entertainment" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Button title="Add Expense" onPress={addExpense} />

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{ padding: 10, borderBottomWidth: 1 }}
            onPress={() =>
              navigation.navigate('EditExpense', { expense: item })
            }
          >
            {item.description} - ${item.amount} ({item.category})
          </Text>
        )}
      />
    </View>
  );
}

