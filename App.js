import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image} from 'react-native';
import StackNavigator from './src/rootNavigation/stackNavigator';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
}
