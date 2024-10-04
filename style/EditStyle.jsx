import { StyleSheet } from 'react-native';

const EditStyle = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    width: 320,
    height: 55,
    position: "absolute",
    bottom: -300,
    left: 42,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorDisplay: {
    width: 40,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#f0f0f0",
    marginRight: 100,
    width: 100,
    height: 32,
    borderRadius: 20,
    justifyContent:'space-between'
  },
  sizeButton: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  alignDisplay: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  colorOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    bottom: 130,
    height: 38,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  colorButton: {
    width: 27,
    height: 27,
    margin: 5,
    borderRadius: 15,
  },
  alignOptions: {
    flexDirection: 'row',
    marginBottom: -10,
    backgroundColor: "#fff",
    width: 130,
    bottom: 50,
    marginLeft: 176,
    paddingTop: 5,
  },
  alignButton: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 4,
    marginRight: 10,
  },
  alignIcon: {
    width: '100%',
    height: '100%',
  },
});

export default EditStyle;
