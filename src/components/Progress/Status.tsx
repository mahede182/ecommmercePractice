import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';

const Status = () => {
  return (
    <ReStyleBox flexDirection={'row'} marginHorizontal={'s'} justifyContent={'space-around'} marginVertical={'s'}>
      <RestyleTxt>Packing</RestyleTxt>
      <RestyleTxt>Shipping</RestyleTxt>
      <RestyleTxt>Arriving</RestyleTxt>
      <RestyleTxt>Success</RestyleTxt>
    </ReStyleBox>
  );
};

export default Status;

const styles = StyleSheet.create({});
