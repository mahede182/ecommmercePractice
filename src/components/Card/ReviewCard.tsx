import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../../theme';
import Star from '../Star/Star';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const ReviewCard: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <Image source={require('../../assets/product/ProductImage3.png')} />
        <Box>
          <Text>James Lawson</Text>
          <Star />
        </Box>
      </Box>

      <Text>
        air max are always very comfortable fit, clean and just perfect in every
        way. just the box was too small and scrunched the sneakers up a little
        bit, not sure if the box was always this small but the 90s are and will
        always be one of my favorites.
      </Text>

      <Box>
        <Image
          height="20"
          width="20"
          source={require('../../assets/product/ProductImage3.png')}
        />
        {/* <Image  height={20} width={20} source={require('../../assets/product/ProductImage7.png')} />
        <Image  height={20} width={20} source={require('../../assets/product/ProductImage9.png')} /> */}
        <Text>December 10, 2016</Text>
      </Box>
    </Box>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({});
