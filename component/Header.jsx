import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import headerStyle from '../style/HeaderStyle';

const Header = ({ title, onSave }) => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.title}>
        AIDoc<Text style={headerStyle.redText}>X</Text> {title ? ">" + title : 'v1.0.0'}
      </Text>
      {title && (
        <TouchableOpacity style={headerStyle.saveButton} onPress={onSave}>
          <Text style={headerStyle.saveText}>Save</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
