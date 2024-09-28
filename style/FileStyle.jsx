import { StyleSheet } from 'react-native';

const fileStyles = StyleSheet.create({
  container: {
    marginTop: -150
  },
  title: {
    fontSize: 16,
    fontFamily: "Kan",
    paddingHorizontal: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cardContainer: {
    alignItems: 'center', // Center items horizontally
    margin: 0, // Adjust margin as needed
  },
  card: {
    width: 140,
    height: 200,
    margin: 3,
    padding: 3,
    justifyContent: 'flex-start',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  addCard: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addSymbol: {
    height: 40,
    width: 5,
    backgroundColor: '#b0bec5',
    margin: 2,
    borderRadius: 992,
  },
  addSymbol2: {
    width: 40,
    height: 5,
    backgroundColor: '#b0bec5',
    margin: 2,
    bottom: 27,
    borderRadius: 992,
  },
  documentCard: {
    backgroundColor: '#fff',
  },
  spreadsheetCard: {
    backgroundColor: '#fff',
  },
  lines: {
    height: 13.5,
    width: '100%',
    backgroundColor: '#c9c9c9',
    marginBottom: 5,
  },
  lines1: {
    height: 20,
    width: '60%',
    backgroundColor: '#b0bec5',
    marginLeft: 7,
    marginTop: 5,
    marginBottom: 7,
  },
  linesNd: {
    height: 78,
    width: '100%',
    backgroundColor: '#c9c9c9',
    marginBottom: 5,
    borderRadius: 2,
  },
  fileText: {
    fontSize: 14,
    fontFamily: "Kan",
    marginTop: 5,
    marginBottom: 4,
  },
  redText: {
    color: 'red',
  },
});

export default fileStyles;
