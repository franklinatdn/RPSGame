import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Button from '../component/Button';
import ImageView from '../component/Fastimage';
import CustomText from '../component/CustomText';
import colors from '../utils/color';
import {convertWidth} from '../utils/convertSize';
import {NavigationScreenProp} from 'react-navigation';

const IC_PAPER = require('../assets/ic_paper.png');
const IC_ROCK = require('../assets/ic_rock.png');
const IC_SCISSORS = require('../assets/ic_scissors.png');
const IC_AGAIN = require('../assets/ic_replay.png');
const ARRAY_IC = [IC_SCISSORS, IC_ROCK, IC_PAPER];
interface Props {
  navigation: NavigationScreenProp;
}

interface State {
  computerIconSelected: number;
  userIconSelected: number | undefined;
  result: string;
}

const INIT_STATE = {
  computerIconSelected: 0,
  userIconSelected: undefined,
  result: undefined,
};

class PlayingScreen extends React.Component<Props, State> {
  interval: any;
  constructor(props: Props) {
    super(props);
    this.state = Object.assign({}, INIT_STATE);
  }
  componentDidMount() {
    this.interval = this.setTime();
  }
  setTime = () =>
    setInterval(
      () =>
        this.setState((prev: State) => ({
          computerIconSelected: ++prev.computerIconSelected % 3,
        })),
      500,
    );
  reset = () => {
    this.setState(Object.assign({}, INIT_STATE));
    this.interval = this.setTime();
  };
  pickOnce = (index: number) => {
    clearInterval(this.interval);
    let computerIconSelected = Math.floor(Math.random() * 3);
    let result = null;
    if (index === computerIconSelected) {
      result = 'DRAW';
    } else if (
      computerIconSelected - index === 1 ||
      computerIconSelected - index === -2
    ) {
      result = 'LOSE';
    } else {
      result = 'WIN';
    }
    this.setState({userIconSelected: index, computerIconSelected, result});
  };
  render() {
    const {computerIconSelected, userIconSelected, result} = this.state;
    console.log(userIconSelected);
    const iconShowing =
      userIconSelected !== undefined ? [ARRAY_IC[userIconSelected]] : ARRAY_IC;
    const colorText = result ? colors[`${result}`] : colors.DRAW;
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <ImageView
          source={ARRAY_IC[computerIconSelected]}
          width={200}
          ratio={1}
        />
        <View style={style.result}>
          <CustomText color={colorText} size={result ? 50 : 30}>
            {result ? `YOU ${result}` : 'Pick one'}
          </CustomText>
          {!!result && (
            <Button
              disabled={false}
              text="Again"
              onPress={this.reset}
              icon={IC_AGAIN}
              iconWidth={24}
              iconHeight={30}
            />
          )}
        </View>
        <View style={style.buttons}>
          {iconShowing.map((icon, index) => (
            <Button
              disabled={!!result}
              icon={icon}
              iconWidth={75}
              iconHeight={96}
              onPress={() => this.pickOnce(index)}
              color={colors.transparent}
            />
          ))}
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  buttons: {
    width: convertWidth(365),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PlayingScreen;
