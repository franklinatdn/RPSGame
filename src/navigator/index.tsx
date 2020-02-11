import {
  createAppContainer,
  createSwitchNavigator,
  NavigationRouteConfigMap,
  CreateNavigatorConfig,
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import PlayingScreen from '../screen/PlayingScreen';

const rotueConfigMap: NavigationRouteConfigMap = {
  Home: HomeScreen,
  Playing: PlayingScreen,
};

const stackConfig: CreateNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

export default createAppContainer(
  createSwitchNavigator(rotueConfigMap, stackConfig),
);
