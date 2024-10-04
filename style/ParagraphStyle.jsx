import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const paragraphStyle = StyleSheet.create({
  container: {
    width: width * 0.92,
    marginLeft: width * 0.04,
    marginTop: height * .15
  },
  input: {
    width: width * 0.92,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    height: height * 0.42,
    fontSize: 20,
    fontFamily: "Kan",
    marginBottom: 3,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: -10,
    borderBottomWidth: 1.5
  },
  inputAi: {
    backgroundColor: "#fff",
    height: height * .1,
    paddingVertical: 3,
    paddingHorizontal: 13,
    fontSize: 18,
    color: "#222",
    borderBottomWidth: 1.5,
    borderColor: "black",
    fontFamily: "Kan",
    borderBottomWidth: 31,
    paddingBottom: 31,
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  aiText: {
    fontFamily: "Kan",
    marginLeft: 20,
    letterSpacing: 1.5,
    color: "#fff",
    top: 22,
    zIndex: 992,
  },
  sendButton: {
    backgroundColor: '#000',
    padding: 5,
    width: Dimensions.get('window').width * 0.43,
    zIndex: 992,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
    marginBottom: 0,
    fontFamily: "Kan"
  },
  zoomButton: {
    backgroundColor: '#000',
    padding: 5,
    width: Dimensions.get('window').width * 0.43,
    zIndex: 992,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 25,
  },
  zoomButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 0,
    fontFamily: "Kan"
  },
  buttonsContainer: { 
    flexDirection: "row", 
    top: 412, 
    position: "absolute", 
  }
})

export default paragraphStyle;
