import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
const App = ({}) => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
