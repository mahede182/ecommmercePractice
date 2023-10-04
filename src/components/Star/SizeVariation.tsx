import {StyleSheet} from 'react-native';
import React from 'react';
import {createBox, createText} from '@shopify/restyle';
import {ReStyleTheme} from '../../theme';

const Box = createBox<ReStyleTheme>();
const Text = createText<ReStyleTheme>();

type sizeProps = {
  size?: number;
  selectedColor?: string;
};

const SizeVariation: React.FC<sizeProps> = ({
  size,
  selectedColor,
}: sizeProps): JSX.Element => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height={48}
      width={48}
      p="s"
      m="s"
      style={{backgroundColor:`${selectedColor}` , borderRadius: 50, borderColor: '#EBF0FF', borderWidth: 1}}>
      <Text variant="subHeader">{size}</Text>
    </Box>
  );
};

export default SizeVariation;
