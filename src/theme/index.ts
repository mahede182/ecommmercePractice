import {createTheme} from '@shopify/restyle';

//import {color} from './colors';
import {spacing} from './spacing';
import {palette} from './palette';
import {colors} from './colors';
import {textVariants} from './textVariants';

const theme = createTheme({
  palette,
  spacing,
  colors: {...colors},
  textVariants,
});

export type ReStyleTheme = typeof theme;
export default theme;
