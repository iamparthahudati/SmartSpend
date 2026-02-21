import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  backBtn: { marginBottom: 12 },
  backText: { fontSize: 16, color: '#6C63FF' },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  row: { justifyContent: 'space-between', marginBottom: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 12,
  },
  icon: { fontSize: 28 },
  name: { flex: 1, fontSize: 15, fontWeight: '500' }, // flex:1 pushes arrow to the right
  arrow: { fontSize: 24, color: '#999' },
});
