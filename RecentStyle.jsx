import { StyleSheet } from 'react-native';

const recentStyles = StyleSheet.create({
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
    backgroundColor: '#fff', // Card background
    borderRadius: 8, // Rounded corners
  },
  documentCard: {
    backgroundColor: '#fff', // White background for documents
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light gray border for definition
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
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 4,
    color: '#333', // Dark color for text
  },
  redText: {
    color: 'red',
  },
});

export default recentStyles;
