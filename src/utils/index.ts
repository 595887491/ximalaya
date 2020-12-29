import {NavigationState} from '@react-navigation/native';
import {Dimensions} from 'react-native';
// import {NavigationState} from 'react-native-tab-view';

//获取手机屏幕宽高
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

//根据百分比获取宽度
const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
//根据百分比获取高度
const hp = (percentage: number) => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};
function getActiveRouteName(state: NavigationState) {
  let route;
  route = state.routes[state.index];
  while (route.state && route.state.index) {
    route = route.state.routes[route.state.index];
  }
  return route.name;
}
export {viewportWidth, viewportHeight, wp, hp, getActiveRouteName};
