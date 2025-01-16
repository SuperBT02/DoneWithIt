import { StyleSheet, Platform, } from "react-native";

const styles = StyleSheet.create({
    Text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

export default styles;