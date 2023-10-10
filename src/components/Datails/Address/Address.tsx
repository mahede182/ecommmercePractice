import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../CustomHeader/CustomHeader';
import {ReStyleText, RestyleTextInput} from '../../RestyleTextInput';

type Props = {
  title: string;
  placeHolder: string;
};

const Address: React.FC<Props> = ({title, placeHolder}: Props): JSX.Element => {
  return (
    <>
      <ReStyleText paddingVertical={'s'} variant={'subHeader'}>
        {title}
      </ReStyleText>
      <RestyleTextInput borderColor="#EBF0FF" placeholder={`${placeHolder}`} />
    </>
  );
};

export default Address;

const styles = StyleSheet.create({});
