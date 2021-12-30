import React from 'react';
import { View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
	paddingBottom: 10,
	backgroundColor: "#000",
  },
 
});

const AppBar = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppBar;