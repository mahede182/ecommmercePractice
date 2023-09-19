import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ExploreScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
