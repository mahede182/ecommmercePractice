import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {LoginScreen, RegisterScreen} from '../screens';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  //const {goBack} = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
