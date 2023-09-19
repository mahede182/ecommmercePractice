import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type linkTextProps = {
  text?: string | null;
  link: string;
};

const LinkText: React.FC<linkTextProps> = ({text, link}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <TouchableOpacity onPress={() => Alert.alert('hello world')}>
        <Text style={styles.linkStyle}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  textStyle: {
    color: '#9098B1',
    fontSize: 14
  },
  linkStyle: {
    color: '#40BFFF',
    marginHorizontal: 10,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
});
