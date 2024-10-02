import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import paragraphStyle from '../style/ParagraphStyle';
import { queryOpenAI } from '../util/openai'; // Import your utility function

const Paragraph = ({ setText, textStyle }) => {
  const [inputText, setInputText] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleTextChange = async (text) => {
    setInputText(text); // Update local input text
    setText(text); // Update the main text

    if (text.trim()) { // Check if the input is not empty
      const response = await queryOpenAI(text); // Fetch AI response based on current input text
      setAiResponse(response); // Set the AI response
    } else {
      setAiResponse(''); // Clear response if input is empty
    }
  };

  return (
    <View style={paragraphStyle.container}>
      <TextInput
        style={[paragraphStyle.inputAi, textStyle]} // Use appropriate styles for AI response
        placeholderTextColor="#222"
        multiline={true}
        textAlignVertical='top'
        value={aiResponse} // Display AI response
        editable={false} // Make this input read-only
      />
      <Text style={paragraphStyle.aiText}>Your AI assistant.</Text>
      <TextInput
        style={[paragraphStyle.input, textStyle]} // Use appropriate styles for user input
        placeholderTextColor="#111"
        multiline={true}
        onChangeText={handleTextChange} // Move this here to handle text input
        textAlignVertical='top'
        value={inputText} // Bind input text
      />
    </View>
  );
};

export default Paragraph;
