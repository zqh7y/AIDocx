import { StyleSheet, Dimensions } from 'react-native';

const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    position: "absolute",
    top: 45,
    width: Dimensions.get('window').width,
    zIndex: 992,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Pac',
    bottom: 2,
  },
  redText: {
    color: 'red',
  },
  saveButton: {
    marginTop: 2,
    padding: 9,
    paddingHorizontal: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#EA5F28"
  },
  saveText: {
    color: "#000",
    fontFamily:"Kan"
  }
});

export default headerStyle;
