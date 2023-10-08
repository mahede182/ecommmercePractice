import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';

const Bar = () => {
  return (
    <ReStyleBox
      height={3}
      width={55}
      backgroundColor={'purpleLight'}
      style={{marginTop: 11}}></ReStyleBox>
  );
};

export default Bar;

const styles = StyleSheet.create({});
