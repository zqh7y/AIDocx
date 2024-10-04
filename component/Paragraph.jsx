import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import paragraphStyle from '../style/ParagraphStyle';
import { queryOpenAI } from '../util/openai';
import Icon from 'react-native-vector-icons/FontAwesome';

const Paragraph = ({ setText, textStyle }) => {
  const [inputText, setInputText] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleSendPrompt = async () => {
    if (inputText.trim()) {
      const response = await queryOpenAI(inputText);
      setAiResponse(response);
      setText(inputText);
    } else {
      setAiResponse('');
    }
  };

  return (
    <View style={paragraphStyle.container}>
      <TextInput
        style={[paragraphStyle.input, textStyle]}
        placeholder=""
        placeholderTextColor="#111"
        multiline={true}
        textAlignVertical="top"
        value={aiResponse}
        onChangeText={setAiResponse}
      />

      <View style={paragraphStyle.buttonsContainer}>
        <TouchableOpacity
          style={paragraphStyle.zoomButton}
          onPress={handleSendPrompt}
        >
          <Icon name="expand" size={10} color="#fff" />
          <Text style={paragraphStyle.zoomButtonText}>Zoom In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={paragraphStyle.sendButton}
          onPress={handleSendPrompt}
        >
          <Text style={paragraphStyle.sendButtonText}>Send AI prompt</Text>
          <Icon name="chevron-right" size={10} color="#fff" />
        </TouchableOpacity>
      </View>

      <TextInput
        onChangeText={setInputText}
        style={[paragraphStyle.inputAi]}
        placeholder="Type your prompt here..."
        placeholderTextColor="#222"
        multiline={true}
        textAlignVertical="top"
        value={inputText}
      />
    </View>
  );
};

export default Paragraph;
