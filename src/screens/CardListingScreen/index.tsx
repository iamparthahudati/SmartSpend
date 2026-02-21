import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { getCardsByCategory } from '../../services/homeServices';
import { CardsByCategoryResponse } from '../HomeScreen/type';
import { styles } from './styles';
type CategoryListingRouteProp = RouteProp<
  RootStackParamList,
  'CardsByCategory'
>;

const CardsByCategoryListingScreen = () => {
  const { params } = useRoute<CategoryListingRouteProp>();
  const { categoryId } = params;
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<CardsByCategoryResponse>();

  useEffect(() => {
    fetchCardsByCategory(categoryId);
  }, [categoryId]);

  const fetchCardsByCategory = async (id: string) => {
    try {
      const res = await getCardsByCategory(id);
      console.log(res);
      if (res) setResponse(res);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{response?.message}</Text>
      <Text>{response?.description}</Text>
    </View>
  );
};

export default CardsByCategoryListingScreen;
