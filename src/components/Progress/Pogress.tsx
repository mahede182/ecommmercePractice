import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';
import Dot from './Dot';
import Bar from './Bar';
import Status from './Status';

const Pogress = () => {
  return (
    <>
      <ReStyleBox
        flexDirection={'row'}
        marginTop={'xl'}
        justifyContent={'center'}>
        <Dot />
        <Bar />
        <Dot />
        <Bar />
        <Dot />
        <Bar />
        <Dot />
      </ReStyleBox>
      <Status />
    </>
  );
};

export default Pogress;

const styles = StyleSheet.create({});
