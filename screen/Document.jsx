import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import documentStyle from '../style/DocumentStyle';
import Header from '../component/Header';
import Paragraph from '../component/Paragraph';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Document = ({ navigation }) => {
  const [text, setText] = useState('');

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
      <Paragraph setText={setText} />
    </View>
  );
};

export default Document;
