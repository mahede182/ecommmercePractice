import {Image} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../../theme';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const Star = () => {
  return (
    <Box flexDirection="row">
      <Image
        source={require('../../assets/icon/star.png')}
        style={{height: 22, width: 22}}
      />
      <Image
        source={require('../../assets/icon/star.png')}
        style={{height: 22, width: 22}}
      />
      <Image
        source={require('../../assets/icon/star.png')}
        style={{height: 22, width: 22}}
      />
      <Image
        source={require('../../assets/icon/star.png')}
        style={{height: 22, width: 22}}
      />
    </Box>
  );
};

export default Star;
