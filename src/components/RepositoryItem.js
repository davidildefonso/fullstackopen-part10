import React from 'react';
import { Text, View } from 'react-native';




const RepositoryItem = ({item}) => {

	return (
		<View style={{margin: 8}} key= {item.id}  >
			<View><Text>{item.fullName} </Text></View>
			<View><Text>{item.description} </Text></View>
			<View><Text>{item.language} </Text></View>
			<View><Text>{item.forksCount} </Text></View>
			<View><Text>{item.stargazersCount} </Text></View>
			<View><Text>{item.ratingAverage} </Text></View>
			<View><Text>{item.reviewCount} </Text></View>	
			<View><Text>{item.ownerAvatarUrl} </Text></View>	
		</View>
	);

}

export default RepositoryItem;