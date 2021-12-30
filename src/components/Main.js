import React from 'react';
import {  StyleSheet, View , Text} from 'react-native';
import RepositoryList  from './RepositoryList';
//import PressableText  from './PressableText';
import AppBar from './AppBar';
import { Link, Route,  Routes } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {   
    flexGrow: 1,
    flexShrink: 1,
	backgroundColor: "#e1e4e8",
  },
  appBar: {
	color: "white",
	fontSize: 20
  },
  textWhite: {
	color: "white",
	fontSize: 20,
	padding: 10
  }
});

const Main = () => {
  return (
    <View style={styles.container}>	
		<AppBar>
			<>
				<Link to="/" ><Text style={styles.textWhite} >Repositories</Text></Link>
				<Link to="/signin" ><Text style={styles.textWhite} >Sign in</Text></Link>
			</>
		</AppBar>
		

		<>
			<Routes>
				<Route path="/"  element ={<RepositoryList />}  />		
				<Route path="/signin"  element ={<SignIn />}  />	
				
			</Routes>
		</>

	
	
	 
    </View>

  );
};

export default Main;