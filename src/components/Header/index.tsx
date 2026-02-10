import { Text, View } from 'react-native';
import styles from '../AppButton/styles';
interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  shouldShowBackButton?: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};
export default Header;
