import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "my messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    }
]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title="Rayen Boubtane"
                    subTitle="rayenboubtane71@gmail.com"
                    image={require('../assets/mosh.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={item.icon.name}
                            backgroundColor={item.icon.backgroundColor} />}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }
})
export default AccountScreen;