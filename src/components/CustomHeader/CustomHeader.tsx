import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type headerType = {
  title: string;
  icon?: boolean;
  iconSource?: ImageSourcePropType;
  handlePress?: void;
};

const CustomHeader: React.FC<headerType> = ({
  title,
  icon,
  iconSource,
  handlePress,
}: headerType) => {
  return (
    <View>
      <Text>CustomHeader</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
