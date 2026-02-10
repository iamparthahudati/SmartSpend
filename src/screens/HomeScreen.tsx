import React from 'react';
import { View } from 'react-native';
import { useAppStore, useThemeStore } from '../store';

const HomeScreen = () => {
  const { hasOnboarded, setOnboarded } = useAppStore();
  const { mode, setMode } = useThemeStore();

  return <View />;
};
export default HomeScreen;
