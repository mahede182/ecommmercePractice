import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {
  CartScreen,
  ExploreScreen,
  HomeScreen,
  OrderScreen,
  ProductScreen,
} from '../screens';
import Notification from '../screens/Notification';
import BottomTab from './BottomTab';

export default function HomeStack() {
  const Stack = createStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen name="explore" component={ExploreScreen} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="order" component={OrderScreen} />
      <Stack.Screen name="product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
