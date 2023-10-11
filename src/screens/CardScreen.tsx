import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CustomHeader, PayCard, RestyleButton} from '../components';
import {ReStyleBox} from '../components/RestyleBox';

const CardScreen: React.FC = () => {
  return (
    <>
      <CustomHeader title="Credit Card And Debit" />
      <PayCard
        cardNumber={6326912421249875}
        cardHolder="Lailyfa Febrina"
        cardSave="19/2024"
        bg="#40BFFF"
      />
      <PayCard
        cardNumber={6326298751249124}
        cardHolder="Lailyfa Febrina"
        cardSave="19/2024"
        bg="#5C61F4"
      />
      <PayCard
        cardNumber={6326298751249124}
        cardHolder="Lailyfa Febrina"
        cardSave="19/2024"
        bg="#ff00ff"
      />
      <ReStyleBox alignItems={'center'} paddingTop={'s'}>
        <RestyleButton
          label="Add Card"
          width={'90%'}
          height={57}
          color={'white'}
          bg={'bluePrimary'}
        />
      </ReStyleBox>
    </>
  );
};

export default CardScreen;
