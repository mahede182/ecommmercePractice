import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../../theme';
import Swiper from 'react-native-swiper';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const SwiperHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndexChanged = index => {
    setCurrentIndex(index);
  };
  return (
    <Box height={245}>
      <Swiper
        loop={false}
        onIndexChanged={onIndexChanged}
        showsButtons={false}
        showsPagination={true}
        style={styles.wrapper}
        height={250}>
        {/* Your individual slides here */}
        <Box justifyContent="center" alignItems="center">
          <ImageBackground
            style={styles.heroImage}
            resizeMode="cover"
            source={require('../../assets/product/PromotionImage.png')}>
            <Text variant="heroTitle">Super Flash Sale 50% off</Text>
          </ImageBackground>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <Image source={require('../../assets/product/HeroImage.png')} />
        </Box>
        <Box alignItems="center" justifyContent="center">
          <Image source={require('../../assets/product/HeroImage.png')} />
        </Box>
      </Swiper>
    </Box>
  );
};

export default SwiperHero;

const styles = StyleSheet.create({
  wrapper: {},
  heroImage: {
    width: '100%',
    height: 206,
    borderRadius: 5,
  },
});
