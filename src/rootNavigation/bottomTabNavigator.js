import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/homeScreen';
import HulaScreen from '../screens/hulaScreen';
import SurfingScreen from '../screens/surfingScreen';
import VulcanoScreen from '../screens/vulcanoScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarItemStyle: {paddingBottom: 5},
        tabBarLabelStyle: {fontFamily: 'Poppins_Medium'},
        tabBarStyle: {
          borderColor: '#000000',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={24} />
          ),
        }}
      />
 <Tab.Screen
        name="Surfing"
        component={SurfingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Surfing',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="kitesurfing" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Hula"
        component={HulaScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Hula',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="music-circle-outline" color={color} size={24} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Vulcano"
        component={VulcanoScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Vulcano',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="triangle-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
