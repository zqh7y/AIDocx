import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../style/HomeStyle';
import Header from '../component/Header';
import File from '../component/File';
import Recent from '../component/Recent';

const Home = ({ navigation }) => {
  return (
    <View style={homeStyle.container}>
      <Header />
      <File navigation={navigation} />
      <Recent />
    </View>
  );
}

export default Home;
