import React from 'react';
import { Text, StyleSheet, Platform} from 'react-native';


function AppText({children}) {
    return <Text style={styles.Text}>{children}</Text>;    
}
const styles = StyleSheet.create({
    Text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
});

export default AppText;