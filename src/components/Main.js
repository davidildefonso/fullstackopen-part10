import React from 'react';
import {  StyleSheet, View } from 'react-native';
import RepositoryList  from './RepositoryList';
import PressableText  from './PressableText';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {   
    flexGrow: 1,
    flexShrink: 1,
	backgroundColor: "#e1e4e8",
  },
  appBar: {
	color: "white",
	fontSize: 20
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
		<AppBar><PressableText styles={styles.appBar} text={"Repositories"} /></AppBar>
		<View>
			<RepositoryList/>
		</View>
	 
    </View>

  );
};

export default Main;