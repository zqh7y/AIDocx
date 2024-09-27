import { StyleSheet, Dimensions } from 'react-native';

const headerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    position: "absolute",
    top: 45,
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Pac',
    bottom: 2,
  },
  redText: {
    color: 'red',
  },
});

export default headerStyle;
