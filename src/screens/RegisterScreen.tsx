import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RegisterScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
