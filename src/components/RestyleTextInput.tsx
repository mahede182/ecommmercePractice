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
import {ReStyleTheme} from '../theme';
import {TextInputProps, TextInput} from 'react-native';

export const Text = createText<ReStyleTheme>();

type InputProps = SpacingProps<ReStyleTheme> &
  VariantProps<ReStyleTheme, 'textInputVariants'> &
  BackgroundColorProps<ReStyleTheme> &
  TextInputProps &
  TextInput;

export const RestyleTextInput = createRestyleComponent<
  InputProps,
  ReStyleTheme
>([spacing, backgroundColor, createVariant({themeKey: 'textInputVariants'})]);
