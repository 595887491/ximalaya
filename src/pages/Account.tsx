import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface Iprops {
  navigation: RootStackNavigation;
}

const Account: Iprops = (props) => {
  const {navigation} = props;
  return (
    <View>
      <Text>home</Text>
      <Button
        title="跳转到详情页"
        onPress={() => {
          navigation.navigate('Detail', {id: 100});
        }}
      />
    </View>
  );
};

export default Account;
