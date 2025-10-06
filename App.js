import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductList.js';
function name(user) {
  return user.First + ' ' + user.Last;
}

export default function App() {
  const user = {
    First: 'Ton',
    Last: 'trinh'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Shopping Bunnii, {formatName(user)}</Text>
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
  textStyle: {
    fontSize: 50
  }

});