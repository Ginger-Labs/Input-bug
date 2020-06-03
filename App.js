import React from 'react';
import Main from './Main';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 8,
    }}>
      <Main />
    </View>
  );
};

export default App;