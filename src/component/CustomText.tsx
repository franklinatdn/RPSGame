import styled from 'styled-components/native';
import {convertWidth} from '../utils/convertSize';

export default styled.Text`
  color: ${props => props.color};
  font-size: ${props => convertWidth(props.size || 50)}px;
  textAlign: center;
`;
