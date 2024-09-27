import React from 'react';
import { View, Text, FlatList } from 'react-native';
import recentStyles from '../style/RecentStyle';

const recentDocuments = [
  { id: '1', title: 'Document 1' },
  { id: '2', title: 'Spreadsheet 1' },
  { id: '3', title: 'Presentation 1' },
  { id: '4', title: 'Form 1' },
  { id: '5', title: 'Document 2' },
];

const Recent = () => {
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
          <View style={recentStyles.card}>
            <Text style={recentStyles.documentTitle}>{item.title}</Text>
            <View style={recentStyles.lines1} />
            <View style={recentStyles.lines} />
          </View>
        )}
      />
    </View>
  );
};

export default Recent;
