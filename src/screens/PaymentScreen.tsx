import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import {PaymentOption} from '../components';

const PaymentScreen: React.FC = (): JSX.Element => {
  return (
    <>
      <CustomHeader title="Payment" />
      <PaymentOption
        title="Credit Card or Debit"
        imgSource={require('../assets/icon/Card.png')}
        route="card"
      />
      <PaymentOption
        title="Paypal"
        imgSource={require('../assets/icon/Paypal.png')}
      />
      <PaymentOption
        title="Bank Transfer"
        imgSource={require('../assets/icon/Bank.png')}
      />
    </>
  );
};

export default PaymentScreen;
