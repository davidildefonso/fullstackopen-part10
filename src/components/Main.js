import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList  from './RepositoryList';
import PressableText  from './PressableText';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
		<Text>Rate Repository Application</Text>
		<PressableText/>
		<View>
			<RepositoryList/>
		</View>
	 
    </View>

  );
};

export default Main;