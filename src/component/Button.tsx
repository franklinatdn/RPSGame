import React from 'react';
import styled from 'styled-components/native';
import {convertWidth, convertHeight} from '../utils/convertSize';
import colors from '../utils/color';
import ImageView from './Fastimage';

type Props = {
  text?: string;
  color?: string;
  icon?: any;
  width?: number;
  height?: number;
  iconWidth?: number;
  iconHeight?: number;
  disabled: boolean;
  onPress: () => any;
};

const ButtonBox = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  flex-direction: row;
  width: ${props => convertWidth(props.width || 200)}px;
  border-radius: ${props => convertWidth(props.width / 2 || 100)}px;
  height: ${props => convertHeight(props.height || 60)}px;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.color || colors.buttonColor};
  shadowColor: ${colors.black};
  shadowOffset: {width: 0px, height: -2px};
  shadowOpacity: 0.1;
  shadowRadius: 5px;
  elevation: 2;
`;

const ButtonText = styled.Text`
  color: white;
  font-family: 'Montserrat-Medium';
  font-size: ${convertWidth(30)}px;
`;

const Button = ({
  text,
  color,
  onPress,
  icon,
  iconWidth,
  iconHeight,
  disabled,
}: Props) => (
  <ButtonBox disabled={disabled} onPress={onPress} color={color}>
    {text && <ButtonText>{text}</ButtonText>}
    {icon && <ImageView source={icon} width={iconWidth} height={iconHeight} />}
  </ButtonBox>
);

export default Button;
