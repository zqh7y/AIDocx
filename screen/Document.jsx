import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import documentStyle from '../style/DocumentStyle';
import Header from '../component/Header';
import Paragraph from '../component/Paragraph';
import Edit from '../component/Edit'; // Import Edit.jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const Document = ({ navigation }) => {
  const [text, setText] = useState('');
  const [textStyle, setTextStyle] = useState({ fontSize: 16, color: '#000', textAlign: 'left' });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Document",
    });
  }, [navigation]);

  const handleSave = async () => {
    try {
      const savedDocs = JSON.parse(await AsyncStorage.getItem('recentDocuments')) || [];
      const newDocument = { id: Date.now().toString(), title: text || 'Untitled Document' };
      const updatedDocs = [newDocument, ...savedDocs];
      await AsyncStorage.setItem('recentDocuments', JSON.stringify(updatedDocs));
      navigation.navigate("Home");
    } catch (error) {
      console.error('Error saving document', error);
    }
  };

  return (
    <View style={documentStyle.container}>
      <Header title="Document" onSave={handleSave} />
      <Paragraph setText={setText} textStyle={textStyle} />
      <Edit setTextStyle={setTextStyle} />
    </View>
  );
};

export default Document;
