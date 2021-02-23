import React from 'react';
import { View } from 'react-native';
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './style/style'

export default class App extends React.component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <Header />
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
