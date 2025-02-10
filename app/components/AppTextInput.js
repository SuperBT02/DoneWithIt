import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';


import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} colors={defaultStyles.colors.mediumGray} styles={styles.icon} />}
                <TextInput styles={defaultStyles.text}{...otherProps} />
            </View>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems:'center'
    },
    
    icon: {
        marginRight: 15,
    },
})

export default AppTextInput;