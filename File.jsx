import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import fileStyles from '../style/FileStyle';

const File = () => {
  const Lines = ({ count }) => (
    <>
      {Array.from({ length: count }, (_, index) => (
        <View key={index} style={fileStyles.lines} />
      ))}
    </>
  );

  return (
    <View style={fileStyles.container}>
      <Text style={fileStyles.title}>
        Choose your AIDoc<Text style={fileStyles.redText}>X</Text> type
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={fileStyles.buttonContainer}>
        <View style={fileStyles.cardContainer}>
          <TouchableOpacity style={[fileStyles.card, fileStyles.addCard]}>
            <View style={fileStyles.addSymbol}></View>
            <View style={fileStyles.addSymbol2}></View>
          </TouchableOpacity>
          <Text style={fileStyles.fileText}>Add New</Text>
        </View>

        <View style={fileStyles.cardContainer}>
          <TouchableOpacity style={[fileStyles.card, fileStyles.documentCard]}>
            <View style={fileStyles.lines1}></View>
            <Lines count={9} />
          </TouchableOpacity>
          <Text style={fileStyles.fileText}>Document</Text>
        </View>

        <View style={fileStyles.cardContainer}>
          <TouchableOpacity style={[fileStyles.card, fileStyles.spreadsheetCard]}>
            <View style={fileStyles.lines1}></View>
            <View style={fileStyles.linesNd}></View>
            <View style={fileStyles.linesNd}></View>
          </TouchableOpacity>
          <Text style={fileStyles.fileText}>Spreadsheet</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default File;
