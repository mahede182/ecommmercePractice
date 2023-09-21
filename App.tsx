/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {HomeScreen} from './src/screens';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginScreen /> */}
      <HomeScreen />
      {/* <RegisterScreen />
      <CartScreen />
      <ExploreScreen />
      <OrderScreen />
      <ProductScreen />
      <AccountScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export default App;
