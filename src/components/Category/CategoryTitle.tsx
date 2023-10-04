import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type categoryTitleProps = {
  leftTitle: string;
  rightTitle: string;
};

const CategoryTitle: React.FC<categoryTitleProps> = ({
  leftTitle,
  rightTitle,
}): JSX.Element => {
  return (
    <View style={styles.categoryHeader}>
      <Text style={styles.leftText}>{leftTitle}</Text>
      <Text style={styles.rightText}>{rightTitle}</Text>
    </View>
  );
};

export default CategoryTitle;

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  leftText: {
    color: '#223263',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  rightText: {
    color: '#40BFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.5,
  },
});
