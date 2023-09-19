import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
