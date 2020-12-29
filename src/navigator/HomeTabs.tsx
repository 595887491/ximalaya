import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {View, StyleSheet} from 'react-native';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import {RootState} from '@/models/index';
import {ConnectedProps, connect} from 'react-redux';
import {ICategory} from '@/models/category';
import {createHomeModel} from '@/config/dva';

export type HomeParamList = {
  [key: string]: {
    namespace: string;
  };
};
const Tab = createMaterialTopTabNavigator();
const mapStateToProps = ({category}: RootState) => {
  return {
    myCategorys: category.myCategorys,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {}
const HomeTabs: IProps = (props) => {
  const renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };

  const {myCategorys} = props;
  const renderScreen = (item: ICategory) => {
    createHomeModel(item.id);
    return (
      <Tab.Screen
        key={item.id}
        name={item.id}
        component={Home}
        options={{
          tabBarLabel: item.name,
        }}
        initialParams={{namespace: item.id}}
      />
    );
  };
  return (
    <Tab.Navigator
      lazy
      tabBar={renderTabBar}
      sceneContainerStyle={styles.sceneContainerStyle}
      tabBarOptions={{
        // 标签页左右超出屏幕宽度后可以左右滚动
        scrollEnabled: true,
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333',
      }}>
      {myCategorys.map(renderScreen)}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  },
});
export default connector(HomeTabs);
