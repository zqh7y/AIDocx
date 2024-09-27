import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import headerStyle from '../style/HeaderStyle';

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.title}>
        AIDoc<Text style={headerStyle.redText}>X</Text> v1.0.0
      </Text>
      <TouchableOpacity>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
