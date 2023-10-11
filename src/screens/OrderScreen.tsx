import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>OrderScreen</Text>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
