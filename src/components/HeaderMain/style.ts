import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: "#f7d102",
    height: height * 0.064,
  },
  headerOne: {
    width: "80%",
    backgroundColor: "#fff",
    height: height * 0.064,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTwo: {
    width: "25%",
    height: height * 0.064,
    paddingLeft: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
    paddingLeft: 6,
    borderLeftColor: "#f3f2fd",
    borderLeftWidth: 2,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default styles;
