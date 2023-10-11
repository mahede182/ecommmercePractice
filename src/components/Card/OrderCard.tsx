import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {RestyleTxt} from '../RestyleTxt';

type Props = {
  title: string;
  price: number;
};

const OrderCard: React.FC<Props> = ({title, price}: Props): JSX.Element => {
  return (
    <ReStyleBox
    justifyContent={'space-around'}
      marginVertical={'s'}
      flexDirection={'row'}
      padding={'s'}
      borderWidth={0.5}
      borderRadius={5}
      borderColor={'blackLight'}>
      <Image
        style={styles.imgStyle}
        source={require('../../assets/product/ProductImage6.png')}
      />
      <ReStyleBox marginHorizontal={'m'} justifyContent={'space-between'}>
        <RestyleTxt width={'90%'} variant={'subHeader'}>
          {title}
        </RestyleTxt>
        <RestyleTxt>${price}</RestyleTxt>
      </ReStyleBox>
      <Image source={require('../../assets/icon/love.png')} />
    </ReStyleBox>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  imgStyle: {
    height: 72,
    width: 72,
  },
});
