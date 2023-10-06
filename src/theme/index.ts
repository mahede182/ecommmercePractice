import {createTheme} from '@shopify/restyle';

//import {color} from './colors';
import {spacing} from './spacing';
import {palette} from './palette';
import {textVariants} from './textVariants';
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
  textVariants: {
    ...textVariants,
  },
  textInputVariants: {
    defaults: {
      height: 36,
      fontSize: 12,
      borderRadius: 5,
      borderWidth: 1,
      fontFamily: 'Poppins-Bold',
      paddingHorizontal: 'sm',
    },
  },
});

export type ReStyleTheme = typeof theme;
type textVariants = typeof theme.textVariants;
export type TTextVariants = keyof textVariants;
export default theme;
