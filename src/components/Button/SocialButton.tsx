import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';

type SocialBtnProps = {
  label: string;
  imgSource: ImageSourcePropType;
};

const SocialButton: FC<SocialBtnProps> = ({label, imgSource}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.imgStyle} resizeMode="cover" source={imgSource} />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: '100%',
    // height: 57,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EBF0FF',
    margin: 5,
    justifyContent: 'space-between',
  },
  imgStyle: {
    height: 24,
    width: 24,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: 0.5,
    marginRight: 70,
    // marginLeft: 20,
  },
});
