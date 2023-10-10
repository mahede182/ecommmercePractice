import {
  BackgroundColorProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  createRestyleComponent,
  createText,
  createVariant,
  spacing,
} from '@shopify/restyle';
import {TextInputProps, TextInput, ViewStyle} from 'react-native';
import {ReStyleTheme} from '../theme';

export const ReStyleText = createText<ReStyleTheme>();

type InputProps = SpacingProps<ReStyleTheme> &
  VariantProps<ReStyleTheme, 'textInputVariants'> &
  BackgroundColorProps<ReStyleTheme> &
  TextInputProps &
  ViewStyle &
  TextInput;

export const RestyleTextInput = createRestyleComponent<
  InputProps,
  ReStyleTheme
>(
  [spacing, backgroundColor, createVariant({themeKey: 'textInputVariants'})],
  TextInput,
);
