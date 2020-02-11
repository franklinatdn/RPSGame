import {Dimensions} from 'react-native';
import {baseWidth, baseHeight} from '../constant';

const {width, height} = Dimensions.get('window');

export const convertWidth = (size: number) => {
  return Math.floor((size / baseWidth) * width);
};

export const convertHeight = (size: number) => {
  return Math.floor((size / baseHeight) * height);
};

export const converPercenttWidth = (percent: number) => {
  return Math.floor((percent / 100) * baseWidth);
};

export const converPercenttHeight = (percent: number) => {
  return Math.floor((percent / 100) * baseHeight);
};
