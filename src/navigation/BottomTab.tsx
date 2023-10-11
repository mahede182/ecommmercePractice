import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountScreen, CartScreen, ExploreScreen, HomeScreen} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomLabel} from '../components';

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        labelStyle: {},
        inactiveTintColor: '#63ebbd',
        activeTintColor: '#104e92',
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomLabel focused={focused} label="Home" />
          ),
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000000" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color="#000000"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              color="#000000"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="cards-outline"
              color="#000000"
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
