import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FindBestCardScreen from '../screens/SearchScreen';
export type TabParamList = {
  Home: undefined;
  Bank: undefined;
  Search: undefined;
  Budget: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bank" component={ExploreScreen} />
      <Tab.Screen name="Search" component={FindBestCardScreen} />
      <Tab.Screen name="Budget" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
