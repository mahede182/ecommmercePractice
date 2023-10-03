/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CartScreen, HomeScreen} from './src/screens';
import theme from './src/theme';
import {ThemeProvider} from '@shopify/restyle';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {/* <LoginScreen /> */}
        {/* <HomeScreen /> */}
        {/* <RegisterScreen />*/}
        <CartScreen />
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
