import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recentStyles from '../style/RecentStyle';

const Recent = () => {
  const [recentDocuments, setRecentDocuments] = useState([]);

  useEffect(() => {
    const fetchRecentDocuments = async () => {
      try {
        const savedDocs = JSON.parse(await AsyncStorage.getItem('recentDocuments')) || [];
        setRecentDocuments(savedDocs);
      } catch (error) {
        console.error('Error loading recent documents', error);
      }
    };

    fetchRecentDocuments();
  }, []);

  return (
    <View style={recentStyles.container}>
      <Text style={recentStyles.title}>Recent AIDoc<Text style={recentStyles.redText}>X</Text> Documents</Text>
      <FlatList
        data={recentDocuments}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={recentStyles.buttonContainer}
        renderItem={({ item }) => (
          <>
            <View style={recentStyles.card}>
              <Text style={recentStyles.documentTitle}>{item.title}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Recent;
