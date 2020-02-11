import React from 'react';
import {View} from 'react-native';
import Button from './component/Button';
import ImageView from './component/Fastimage';
import Application from '../src/navigator';

const IC = require('../src/assets/icon.png');

class App extends React.Component {
  render() {
    return <Application />;
  }
}
export default App;
