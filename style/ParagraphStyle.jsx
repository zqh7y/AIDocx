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
    padding: 10,
    paddingBottom: 20,
    backgroundColor: "#fff",
    height: height * 0.4,
    fontSize: 20,
    fontFamily: "Kan",
    marginBottom: 3,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  inputAi: {
    backgroundColor: "#fff",
    height: height * .1,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 13,
    fontSize: 18,
    color: "#222",
    borderWidth: 1.5,
    borderColor: "black",
    fontFamily: "Kan",
    borderTopWidth: 30,
    paddingTop: 31,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  aiText: {
    fontFamily: "Kan",
    marginLeft: 20,
    letterSpacing: 1.5,
    color: "#fff",
    top: 22,
    zIndex: 992,
  }
})

export default paragraphStyle;