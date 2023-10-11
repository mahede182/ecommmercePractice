import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';

const Shipping = () => {
  return (
    <ReStyleBox padding={'s'}>
      <RestyleTxt variant={'subHeader'} marginVertical={'m'}>Shipping Details</RestyleTxt>
      <ReStyleBox
        padding={'m'}
        borderRadius={'5'}
        borderWidth={1}
        borderColor={'blackLight'}>
        <ReStyleBox flexDirection={'row'} justifyContent={'space-between'}>
          <RestyleTxt variant={'body'}>Date Shipping</RestyleTxt>
          <RestyleTxt variant={'body'}>January 16, 2015</RestyleTxt>
        </ReStyleBox>
        <ReStyleBox flexDirection={'row'} justifyContent={'space-between'}>
          <RestyleTxt variant={'body'}>Shipping</RestyleTxt>
          <RestyleTxt variant={'body'}>POS Regular</RestyleTxt>
        </ReStyleBox>
        <ReStyleBox flexDirection={'row'} justifyContent={'space-between'}>
          <RestyleTxt variant={'body'}>No. Resi</RestyleTxt>
          <RestyleTxt variant={'body'}>000192848573</RestyleTxt>
        </ReStyleBox>
        <ReStyleBox flexDirection={'row'} justifyContent={'space-between'}>
          <RestyleTxt variant={'body'}>Address</RestyleTxt>
          <RestyleTxt variant={'body'}>2727 Lakeshore</RestyleTxt>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default Shipping;

const styles = StyleSheet.create({});
