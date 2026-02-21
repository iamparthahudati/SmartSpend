import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { CategoryData } from '../HomeScreen/type';
import { styles } from './styles';

type CategoryListingRouteProp = RouteProp<
  RootStackParamList,
  'CategoryListing'
>;

const CategoryListingScreen = () => {
  const { params } = useRoute<CategoryListingRouteProp>();
  const navigation = useNavigation();
  const { categories } = params;

  const handleCategoryPress = (item: CategoryData) => {
    navigation.navigate('CardsByCategory', {
      categoryId: item.category.toLocaleLowerCase(),
    });
    // TODO: navigate to cards filtered by category
    console.log('Selected category:', item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>All Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.category}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryListingScreen;
