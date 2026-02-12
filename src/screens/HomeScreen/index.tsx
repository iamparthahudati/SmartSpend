import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getHomeBanner } from '../../services/homeServices';
import { useAppStore, useThemeStore } from '../../store';
import { HomeCardResponse } from './type';

const HomeScreen = () => {
  const { hasOnboarded, setOnboarded } = useAppStore();
  const { mode, setMode } = useThemeStore();
  const [banners, setBanners] = useState<HomeCardResponse['data']>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    console.log('Fetching home banner data...');
    try {
      const res = await getHomeBanner();
      console.log('API response2:', res);
      if (res.success) {
        console.log('Home banner data2:', res.data);
        setBanners(res.data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={banners}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default HomeScreen;
