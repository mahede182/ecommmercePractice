import {TextStyle} from 'react-native';
import {spacing} from '@shopify/restyle';
import {palette} from './palette';

export type TThemeProps = {
  spacing: typeof spacing;
  colors: typeof palette;
  breakpoints: {
    phone: number;
    tablet: number;
    largeTablet: number;
  };
  textVariants: {
    header: IHeader;
    subHeader: ISubHeader;
    heroTitle: IHeroTitle;
    button: IButton;
    body: IBody;
    textInputVariants: ITextInputVariants;
  };
  textInputVariants: {
    customTextInput?: TextStyle;
    defaults?: TextStyle | any;
    padding?: TextStyle | any;
    paddingVertical?: TextStyle;
    paddingHorizontal?: TextStyle;
    borderRadius?: TextStyle;
    marginBottom?: TextStyle;
  };
};

export interface IBreakPoints {
  phone: number;
  tablet: number;
  largeTablet: number;
}
export interface IHeader {
  fontSize: number;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: number;
  fontStyle: string;
}
export interface ISubHeader {
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: number;
}
export interface IHeroTitle {
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: number;
}

export interface IButton {
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
}

export interface IBody {
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  letterSpacing: number;
  lineHeight: number;
}

export interface ITextInputVariants {
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: number;
}

export interface ISpacing {
  none: number;
  xs: number;
  s: number;
  sm: number;
  m: number;
  l: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface IBoxVariants {
  elevated: {
    padding: {
      phone: string;
      tablet: string;
    };
    shadowColor: string;
    shadowOpacity: number;
    shadowOffset: {width: number; height: number};
    shadowRadius: number;
    elevation: number;
  };
}
