import React from 'react';
import { View } from 'react-native';
import { repositories } from '../data';
import  RepositoryItem  from './RepositoryItem'



const RepositoryList = () => {

	return (
		<View>
			{repositories.map( item => <RepositoryItem key= {item.id} item={item}  />	)}
		</View>
	
	);
};

export default RepositoryList;

