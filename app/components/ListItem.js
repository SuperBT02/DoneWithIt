import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, } from "react-native";
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.lightGray}
          onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    minHeight:70
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "600",

  },
  subTitle: {
    color: colors.gray,
    fontSize: 15
  },
});
export default ListItem;
