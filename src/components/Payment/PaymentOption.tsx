import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {ReStyleText} from '../RestyleTextInput';
import {ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  imgSource?: ImageSourcePropType;
  route: string;
};

const PaymentOption: React.FC<Props> = ({
  title,
  imgSource,
  route,
}: Props): JSX.Element => {
  const navigation = useNavigation();
  const handlePress = (url: string) => {
    navigation.navigate(url);
  };
  return (
    <Pressable
      onPress={() => handlePress(route)}
      style={({pressed}) => [
        {
          marginVertical: 4,
          backgroundColor: pressed ? '#EBF0FF' : '#ffffff',
        },
      ]}>
      <ReStyleBox
        flexDirection={'row'}
        paddingHorizontal={'sm'}
        marginVertical={'m'}
        alignItems={'center'}>
        <Image source={imgSource} style={{height: 24, width: 24}} />
        <ReStyleText paddingHorizontal={'sm'} variant={'subHeader'}>
          {title}
        </ReStyleText>
      </ReStyleBox>
    </Pressable>
  );
};

export default PaymentOption;
