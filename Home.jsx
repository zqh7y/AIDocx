import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../style/HomeStyle';
import Header from '../component/Header';
import File from '../component/File';
import Recent from '../component/Recent';

const Home = () => {
  return (
    <View style={homeStyle.container}>
      <Header />
      <File />
      {/* <Recent /> */}
    </View>
  );
}

export default Home;
