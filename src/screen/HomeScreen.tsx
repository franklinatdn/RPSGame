import React from 'react';
import {View} from 'react-native';
import Button from '../component/Button';
import ImageView from '../component/Fastimage';
import {NavigationScreenProp} from 'react-navigation';

const IC = require('../assets/icon.png');

interface Props {
  navigation: NavigationScreenProp<any>;
}
class HomeScreen extends React.Component<Props> {
  navigateToPlaying = () => this.props.navigation.navigate('Playing');
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
        <ImageView source={IC} width={200} ratio={1} />
        <Button text="Play" onPress={this.navigateToPlaying} />
      </View>
    );
  }
}
export default HomeScreen;
