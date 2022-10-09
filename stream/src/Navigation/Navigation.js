import React from 'react';
import {Image, Text} from 'react-native';
import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Proxs from '../screens/Proxs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#D99F7E',
        },
      })}>
      <Tab.Screen
        name="Peliculas"
        component={Peliculas}
        options={{
          headerStyle: {
            backgroundColor: '#D99F7E',
          },
          tabBarLabel: () => <Text style={{color: 'black'}}>Peliculas</Text>,
          tabBarIcon: () => (
            <Image source={require('../img/nav/film-line.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          headerStyle: {
            backgroundColor: '#D99F7E',
          },
          tabBarLabel: () => <Text style={{color: 'black'}}>Series</Text>,
          tabBarIcon: () => (
            <Image source={require('../img/nav/tv-line.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Próximos estrenos"
        component={Proxs}
        options={{
          headerStyle: {
            backgroundColor: '#D99F7E',
          },
          tabBarLabel: () => <Text style={{color: 'black'}}>Pronto</Text>,
          tabBarIcon: () => (
            <Image source={require('../img/nav/star-line.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
