import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Home() {
  return <Redirect href="/(tabs)" />;
}
