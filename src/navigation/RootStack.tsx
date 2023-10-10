import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        {false ? (
          <Stack.Screen name="authStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="homeStack" component={HomeStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
