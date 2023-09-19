/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';
import {LoginScreen} from './src/screens';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <RegisterScreen />
      <CartScreen />
      <ExploreScreen />
      <OrderScreen />
      <ProductScreen />
      <AccountScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
