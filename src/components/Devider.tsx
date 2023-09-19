import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DeviderProps = {
  label: string;
};

const Divider: React.FC<DeviderProps> = ({label}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#EBF0FF',
    marginHorizontal: 5, // Change the color as needed
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold', // You can adjust the font styles as needed
    color: '#9098B1', // Change the text color as needed
  },
});

export default Divider;
