import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Icons } from '../assets';
import AppButton from '../components/AppButton';

export default function FindBestCardScreen() {
  const [amount, setAmount] = useState('0.00');
  const [category, setCategory] = useState('Shopping & Lifestyle');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.headerTitle}>Find Best Card</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Optimize your <Text style={styles.highlight}>rewards.</Text>
      </Text>

      <Text style={styles.subtitle}>
        Enter your monthly spending habits and we'll calculate the perfect card
        for you.
      </Text>

      {/* Category */}
      <View style={styles.card}>
        <View>
          <Text style={styles.label}>SELECT CATEGORY</Text>
          <Text style={styles.value}>{category}</Text>
        </View>

        <View style={styles.rightRow}>
          <View style={styles.popularBadge}>
            <Text style={styles.popularText}>POPULAR</Text>
          </View>
        </View>
        <Image source={Icons.downArrow} style={{ width: 20, height: 20 }} />
      </View>

      {/* Amount */}
      <View style={styles.card}>
        <Text style={styles.label}>MONTHLY SPEND AMOUNT</Text>

        <View style={styles.amountRow}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={styles.amountInput}
          />
        </View>
      </View>

      {/* Tip */}
      <View style={styles.tipRow}>
        <View style={styles.bulb}>
          <Text>💡</Text>
        </View>
        <Text style={styles.tipText}>
          Higher spends in <Text style={{ fontWeight: '600' }}>Travel</Text>{' '}
          typically unlock premium airport lounge access and 5x reward points.
        </Text>
      </View>

      <View style={{ flex: 1 }} />
      <AppButton title="FIND BEST CARD" style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF9',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  back: {
    fontSize: 22,
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginTop: 20,
  },

  highlight: {
    color: '#1E7F6D',
  },

  subtitle: {
    marginTop: 10,
    color: '#6B7280',
    lineHeight: 22,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  label: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 6,
  },

  value: {
    fontSize: 18,
    fontWeight: '600',
  },

  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  popularBadge: {
    backgroundColor: '#FFF4E5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },

  popularText: {
    fontSize: 10,
    color: '#F59E0B',
    fontWeight: '600',
  },

  arrow: {
    fontSize: 18,
  },

  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rupee: {
    fontSize: 22,
    marginRight: 6,
    color: '#1E7F6D',
  },

  amountInput: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1E7F6D',
  },

  tipRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-start',
  },

  bulb: {
    backgroundColor: '#E6F2EF',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },

  tipText: {
    flex: 1,
    color: '#374151',
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#1E7F6D',

    borderRadius: 28,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
