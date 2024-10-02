import { StyleSheet } from 'react-native';

const EditStyle = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#EA5F28',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 15,
    position: "absolute",
    bottom: -320,
    width: 380,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
    fontWeight: '500',
    fontFamily: "Kan"
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sizeSymbol: {
    fontSize: 20,
    marginHorizontal: 15,
    color: '#333',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  textStyleOptions: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  styleButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
  },
  selectedStyle: {
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
  },
  styleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    marginVertical: 10,
    marginVertical: -5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  colorButton: {
    width: 30, // Adjusted size for the color buttons
    height: 30,
    borderRadius: 5, // Rounded corners for color buttons
    margin: 5,
  },
  alignRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
    marginLeft: 10,
  },
  alignButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Added for rounded corners
  },
  alignIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default EditStyle;
