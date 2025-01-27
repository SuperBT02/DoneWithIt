import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from "../components/Icon";
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "my Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Rayen Boubtane"
                    subTitle="rayenboubtane71@gmail.com"
                    image={require("../assets/mosh.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor} />
                            } />}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex:0.2
    },
    screen: {
        backgroundColor: colors.primary,
    }
})
export default AccountScreen;