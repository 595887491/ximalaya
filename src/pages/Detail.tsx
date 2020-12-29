import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '@/navigator/index';

interface Iprops {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

const Detail: Iprops = (props) => {
  const {route} = props;
  return (
    <View>
      <Text>detail</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default Detail;
