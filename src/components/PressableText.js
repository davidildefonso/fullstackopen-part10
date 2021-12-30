import React from 'react';
import { Text, Pressable, Alert } from 'react-native';



const PressableText = () => {
  return (
    <Pressable
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text>You can press me</Text>
    </Pressable>
  );
};


export default PressableText;