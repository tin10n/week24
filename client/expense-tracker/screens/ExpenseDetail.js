import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function ExpenseDetail({ route, navigation }) {
  const { expense } = route.params;
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={updatedExpense.description}
        onChangeText={(text) =>
          setUpdatedExpense({ ...updatedExpense, description: text })
        }
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <TextInput
        value={String(updatedExpense.amount)}
        keyboardType="numeric"
        onChangeText={(text) =>
          setUpdatedExpense({ ...updatedExpense, amount: Number(text) })
        }
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />

      <Button title="Save" onPress={() => navigation.goBack()} />
    </View>
  );
}
