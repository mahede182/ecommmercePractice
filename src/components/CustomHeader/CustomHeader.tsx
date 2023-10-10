import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ReStyleBox} from '../RestyleBox';
import {ReStyleText} from '../RestyleTextInput';

type headerType = {
  title: string;
  icon?: boolean;
  iconSource?: ImageSourcePropType;
  handlePress?: void;
};

const CustomHeader: React.FC<headerType> = ({
  title,
  icon,
  iconSource,
  handlePress,
}: headerType) => {
  return (
    <ReStyleBox
      borderBottomColor={'natural'}
      borderBottomWidth={1}
      height={60}
      paddingHorizontal={'sm'}
      justifyContent={'center'}>
      <ReStyleBox
        flexDirection="row"
        alignItems="center"
        justifyContent={'space-between'}>
        <ReStyleBox
          justifyContent={'center'}
          flexDirection="row"
          gap={'m'}
          alignItems="center">
          <Pressable>
            <Image
              style={styles.imgStyle}
              source={require('../../assets/icon/Back.png')}
            />
          </Pressable>
          <ReStyleText variant={'header'}>{title}</ReStyleText>
        </ReStyleBox>
      </ReStyleBox>
    </ReStyleBox>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  imgStyle: {
    width: 8,
    height: 16,
  },
});
