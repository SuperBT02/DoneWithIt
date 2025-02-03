import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} colors={colors.mediumGray} styles={styles.icon} />}
                <TextInput styles={styles.textInput}{...otherProps} />
            </View>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems:'center'
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {
        marginRight: 15,
    },
})

export default AppTextInput;