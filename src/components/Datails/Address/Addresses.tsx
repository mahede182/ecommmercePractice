import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Address from './Address';

const Addresses: React.FC = (): JSX.Element => {
  return (
    <>
      <Address title="Country or region" placeHolder="United States" />
      <Address title="First Name" placeHolder="Joe" />
      <Address title="Last Name" placeHolder="Capone" />
      <Address title="Street Address" placeHolder="L1 phase, Baridhara" />
      <Address title="Street Address 2(Optional)" placeHolder="Do" />
      <Address title="City" placeHolder="Dhaka" />
      <Address title="Zip Code" placeHolder="1400" />
      <Address title="Phone Number" placeHolder="+990 xxxx xxxx xx" />
    </>
  );
};

export default Addresses;

const styles = StyleSheet.create({});
