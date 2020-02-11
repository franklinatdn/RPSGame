import React from 'react';
import FastImage from 'react-native-fast-image';
import {convertWidth, convertHeight} from '../utils/convertSize';

type Props = {
  source: any;
  width: number;
  height?: number;
  ratio?: number;
};

const ImageView = ({source, width, height, ratio}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const style = {
    width: convertWidth(width),
    height: ratio ? convertWidth(ratio * width) : convertHeight(height),
  };
  return <FastImage source={source} resizeMode="contain" style={style} />;
};

export default ImageView;
