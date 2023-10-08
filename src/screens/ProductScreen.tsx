import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pogress from '../components/Progress/Pogress';
import OrderCard from '../components/Card/OrderCard';
import { RestyleTxt } from '../components/RestyleTxt';
import Shipping from '../components/Datails/Shipping';

const ProductScreen = (): JSX.Element => {
  return (
    <View>
      <Pogress />
      <OrderCard title="Nike Air Aoom Pegusus 36 miami" price={29943} />
      <OrderCard title="Air Jordan X-code Ryan 36996" price={29943} />
      <Shipping />
      <Shipping />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
