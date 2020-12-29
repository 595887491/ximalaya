import React from 'react';
import {Provider} from 'react-redux';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
import '@/config/http';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
      <StatusBar
        backgroundColor="transpanent"
        barStyle="dark-content"
        translucent
      />
    </Provider>
  );
};

export default App;
