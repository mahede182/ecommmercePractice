import {ImageSourcePropType} from 'react-native';

export interface TofferData {
  id?: number;
  title: string;
  desc: string;
  date: string;
}

export interface TfeedData {
  id: number;
  imgSource: ImageSourcePropType;
  title: string;
  desc: string;
  date: string;
}

export interface TactivityData {
  id: number;
  title: string;
  desc: string;
  date: string;
}
