import {StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../theme';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const CartScreen = (): JSX.Element => {
  return (
    <Box
      flex={1}
      bg="cardPrimaryBackground"
      mt="xl"
      alignItems="center"
      justifyContent="center">
      <Text variant="body">Hello world</Text>
    </Box>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
