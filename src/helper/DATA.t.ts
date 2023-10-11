import {ImageSourcePropType} from 'react-native';

export interface Tproduct {
  id: number | string;
  image: ImageSourcePropType;
  title: string;
  DiscountPrice: number;
  price: number;
  discount: number;
}
