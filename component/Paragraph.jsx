import React from 'react';
import { Text, TextInput, View } from 'react-native';
import paragraphStyle from '../style/ParagraphStyle';

const Paragraph = ({ setText }) => {
  return (
    <View style={paragraphStyle.container}>
      <TextInput 
        style={paragraphStyle.input}
        placeholderTextColor="#222"
        multiline={true}
        textAlignVertical='top'
        onChangeText={setText}
      />
      <Text style={paragraphStyle.aiText}>Your AI assistant</Text>
      <TextInput 
        style={paragraphStyle.inputAi}
        placeholderTextColor="#111"
        multiline={true}
        textAlignVertical='top' 
      />
    </View>
  );
};

export default Paragraph;
