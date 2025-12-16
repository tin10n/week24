import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExpenseList from './screens/ExpenseList';
import ExpenseDetail from './screens/ExpenseDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Expenses" component={ExpenseList} />
        <Stack.Screen name="EditExpense" component={ExpenseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
