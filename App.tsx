/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  AddressScreen,
  CartScreen,
  HomeScreen,
  ProductScreen,
} from './src/screens';
import theme from './src/theme';
import {ThemeProvider} from '@shopify/restyle';
import Notification from './src/screens/Notification';
import FilterSearch from './src/components/Button/FilterSearch';
import RootStack from './src/navigation/RootStack';
import HomeStack from './src/navigation/HomeStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      {/* <LoginScreen /> */}
      {/* <HomeScreen /> */}
      {/* <RegisterScreen />*/}
      {/* <Notification /> */}
      {/* <AddressScreen /> */}
      {/*<ExploreScreen />
      <OrderScreen />
      <ProductScreen />
      <AccountScreen /> */}

      <RootStack />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export default App;
