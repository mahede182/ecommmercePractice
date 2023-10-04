import {Alert, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../theme';
import RButton from '../components/Button/RButton';
import SwiperHero from '../components/Hero/SwiperHero';
import {Star} from '../components';
import SizeVariation from '../components/Star/SizeVariation';
import LinkText from '../components/Button/LinkText';
import ReviewCard from '../components/Card/ReviewCard';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

const CartScreen = (): JSX.Element => {
  return (
    <ScrollView>
      <Box flex={1} mt="xl">
        <SwiperHero />
        <Box flexDirection="row" marginVertical="s" width="80%">
          <Text variant="header" paddingRight="xl">
            Nike Air Zoom Pegasus 36 Miami
          </Text>
          <Image
            source={require('../assets/icon/love.png')}
            resizeMode="cover"
            height={41}
            width={41}
          />
        </Box>
        <Star />
        <Box paddingVertical="m">
          <Text variant="subHeader">Select Size</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeVariation size={6} />
            <SizeVariation size={6.5} />
            <SizeVariation size={7} />
            <SizeVariation size={7.5} />
            <SizeVariation size={8} />
            <SizeVariation size={8.5} />
            <SizeVariation size={9} />
            <SizeVariation size={9.5} />
          </ScrollView>
        </Box>
        <Box paddingVertical="m">
          <Text variant="subHeader">Select Color</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeVariation selectedColor="#FFC833" />
            <SizeVariation selectedColor="#40BFFF" />
            <SizeVariation selectedColor="#FB7181" />
            <SizeVariation selectedColor="#53D1B6" />
            <SizeVariation selectedColor="#5C61F4" />
            <SizeVariation selectedColor="#223263" />
            <SizeVariation selectedColor="#FFC833" />
            <SizeVariation selectedColor="#53D1B6" />
          </ScrollView>
        </Box>
        <Text variant="subHeader" paddingVertical="s">
          Specification
        </Text>
        <Box flexDirection="row" justifyContent="space-between">
          <Text color="bodyText" variant="body">
            Shown
          </Text>
          <Text color="bodyText" variant="body" textAlign="right" width="50%">
            Laser {'\n'} Blue/Anthracite/Watermel {'\n'} on/White
          </Text>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="s">
          <Text color="bodyText" variant="body">
            Style:
          </Text>
          <Text
            color="bodyText"
            variant="body"
            textAlign="right"
            marginVertical="s"
            width="50%">
            CD0113-400
          </Text>
        </Box>
        <Box>
          <LinkText text="Review Product" link="See More" />
          <Star />
        </Box>
        <ReviewCard />
        <RButton label="restyle button" isLoading={true} activeOpacity={0.2} />
      </Box>
    </ScrollView>
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
