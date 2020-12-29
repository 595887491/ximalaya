import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
} from 'react-native-tab-view';
import Introduction from './Introduction';
import List from './List';

const initialLayout = {width: Dimensions.get('window').width};
interface IRoute {
  key: string;
  title: string;
}
interface IState {
  routes: IRoute[];
  index: number;
}
interface IProps {}
export default class Tab extends React.Component<IProps, IState> {
  state = {
    routes: [
      {key: 'introduction', title: '简介'},
      {key: 'album', title: '节目'},
    ],
    index: 1,
  };
  setIndex = (index: number) => {
    this.setState({
      index,
    });
  };
  renderScene = SceneMap({
    introduction: Introduction,
    album: List,
  });
  renderTabBar = (props: SceneRendererProps & {navigationState: IState}) => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        tabStyle={styles.tabStyle}
        labelStyle={styles.labelStyle}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
      />
    );
  };
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.setIndex}
        initialLayout={initialLayout}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabStyle: {
    width: 80,
  },
  labelStyle: {
    color: '#000',
  },
  tabBar: {
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        //去掉安卓默认阴影
        elevation: 0,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    }),
  },
  avtiveColor: {},
  indicator: {
    backgroundColor: '#ebd648',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderColor: '#fff',
  },
});
