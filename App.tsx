/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CartScreen, HomeScreen, ProductScreen} from './src/screens';
import theme from './src/theme';
import {ThemeProvider} from '@shopify/restyle';
import Notification from './src/screens/Notification';
import FilterSearch from './src/components/Button/FilterSearch';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {/* <LoginScreen /> */}
        {/* <HomeScreen /> */}
        {/* <RegisterScreen />*/}
        {/* <Notification /> */}
        <ProductScreen />
        {/*<ExploreScreen />
      <OrderScreen />
      <ProductScreen />
      <AccountScreen /> */}
      </SafeAreaView>
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
