import {createTheme} from '@shopify/restyle';

//import {color} from './colors';
import {spacing} from './spacing';
import {palette} from './palette';
import {TThemeProps} from './type';

const theme = createTheme<TThemeProps>({
  colors: {
    ...palette,
  },
  spacing: {
    ...spacing,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textInputVariants: {
    defaults: {
      height: 48,
      fontSize: 12,
      borderRadius: 5,
      borderWidth: 1,
      fontFamily: 'Poppins-Bold',
      paddingHorizontal: 'sm',
    },
  },
});

export type ReStyleTheme = typeof theme;
export default theme;
