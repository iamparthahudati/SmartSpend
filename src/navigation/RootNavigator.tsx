import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CardsByCategoryListingScreen from '../screens/CardListingScreen';
import CategoryListingScreen from '../screens/CategoryListing';
import { CategoryData } from '../screens/HomeScreen/type';
import SplashScreen from '../screens/SplashScreen';
import MainTabs from './MainTabs';

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: undefined;
  CategoryListing: { categories: CategoryData[] };
  CardsByCategory: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="CategoryListing" component={CategoryListingScreen} />
      <Stack.Screen
        name="CardsByCategory"
        component={CardsByCategoryListingScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
