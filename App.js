import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductList.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shopping Bunnii</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});