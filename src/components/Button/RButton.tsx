import {ColorProps, createBox, createText, useTheme} from '@shopify/restyle';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

//import Text from './Text';
import theme, {ReStyleTheme} from '../../theme';

const Text = createText<ReStyleTheme>();
const BaseButton = createBox<ReStyleTheme, TouchableOpacityProps>(
  TouchableOpacity,
);

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<ReStyleTheme> & {
    label: string;
    isLoading?: boolean;
  };

const RButton = ({label, isLoading, ...props}: Props) => {
  const theme = useTheme<ReStyleTheme>();

  return (
    <BaseButton
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backgroundColor={props.bg}
      width="90%"
      borderRadius={5}
      {...props}>
      <Text variant="button" color={props.color} p="s">
        {label}
      </Text>
      {/* {isLoading ? <ActivityIndicator color="red" /> : null} */}
    </BaseButton>
  );
};
export default RButton;
