import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Images } from '../../assets';
import { RootStackParamList } from '../../navigation/RootNavigator';
import {
  getHomeBanks,
  getHomeBanner,
  getHomeCategories,
  getHomeEditorChoice,
} from '../../services/homeServices';
import { useAppStore, useThemeStore } from '../../store';
import { styles } from './styles';
import {
  BankData,
  CategoryData,
  EditorChoiceApiResponse,
  HomeCardResponse,
} from './type';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { hasOnboarded } = useAppStore();
  const { mode } = useThemeStore();
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [banks, setBanks] = useState<BankData[]>([]);

  const [banners, setBanners] = useState<HomeCardResponse['data']>([]);
  const [editorChoice, setEditorChoice] = useState<
    EditorChoiceApiResponse['data'] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const carouselRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchBanners();
    fetchEditorChoice();
    fetchCategories();
    fetchBanks();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % banners.length;
      carouselRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, banners]);
  const fetchBanners = async () => {
    try {
      const res = await getHomeBanner();
      if (res.success) setBanners(res.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const fetchEditorChoice = async () => {
    try {
      const res = await getHomeEditorChoice();
      if (res.success) setEditorChoice(res.data);
    } catch (err: any) {
      setError(err.message);
    }
  };
  const fetchCategories = async () => {
    try {
      const res = await getHomeCategories();
      if (res.success) setCategories(res.data);
    } catch (err: any) {
      setError(err.message);
    }
  };
  const fetchBanks = async () => {
    try {
      const res = await getHomeBanks();
      console.log(res);

      if (res.success) setBanks(res.data);
    } catch (err: any) {
      console.log('error: ', err);
      setError(err.message);
    }
  };

  const handleApplyNow = () => {
    const link = editorChoice?.cardDetails?.applyLink;
    if (link) Linking.openURL(link);
  };
  const handleViewAll = (categories: CategoryData[]) => {
    navigation.navigate('CategoryListing', {
      categories: categories,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          ref={carouselRef}
          data={banners}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / SCREEN_WIDTH,
            );
            setActiveIndex(index);
          }}
          renderItem={({ item }) => (
            <View
              style={{
                width: SCREEN_WIDTH,
                height: 100,
                padding: 10,
                backgroundColor: 'green',
              }}
            >
              <Text>{item.title}</Text>
              {/* Add your banner image/content here */}
            </View>
          )}
        />

        {/* Dot Indicators */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 8,
          }}
        >
          {banners.map((_, index) => (
            <View
              key={index}
              style={{
                width: activeIndex === index ? 16 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeIndex === index ? '#6C63FF' : '#ccc',
                marginHorizontal: 4,
              }}
            />
          ))}
        </View>
      </View>
      {/* Best Card by Category */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Card by Category</Text>
          <TouchableOpacity onPress={() => handleViewAll(categories)}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories.slice(0, 5)}
          keyExtractor={item => item.id}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryName}>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Editor's Choice</Text>

        <Image
          source={Images.hdfc_millenia}
          resizeMode="contain"
          style={styles.cardImage}
        />

        <View style={styles.benefitsList}>
          {editorChoice?.cardDetails?.benifits.map((benefit, index) => (
            <View key={index} style={styles.benefitRow}>
              <View
                style={[
                  styles.benefitIcon,
                  { backgroundColor: benefit.background },
                ]}
              >
                <Text>✓</Text>
              </View>
              <Text style={styles.benefitTitle}>{benefit.title}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.applyButton} onPress={handleApplyNow}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Card by Bank</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={banks.slice(0, 5)}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
              <Text style={styles.categoryName}>{item.bank}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
