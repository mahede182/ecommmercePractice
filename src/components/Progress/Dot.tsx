import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {Image} from 'react-native';
import {Text} from '../RestyleTextInput';
import {RestyleTxt} from '../RestyleTxt';

const Dot = () => {
  return (
    <ReStyleBox>
      <ReStyleBox
        height={24}
        width={24}
        borderRadius={20}
        backgroundColor="greenPrimary"
        alignItems={'center'}
        justifyContent={'center'}>
        {/* <Image
        source={require('../../assets/icon/star.png')}
        height={10}
        width={10}
      /> */}
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default Dot;
