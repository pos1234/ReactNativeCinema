import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { style } from "../style";
const MenuItems = (props) => {
  return (
    <View
      style={
        props.active == true
          ? [style.flexCenter, style.activeButtons]
          : [style.flexCenter, style.inActiveButtons]
      }
    >
      <View
        style={
          props.active == true
            ? [style.flexCenter, style.activeText]
            : [style.flexCenter, style.inActiveText]
        }
      >
        {props.icons}
      </View>
      <Text
        style={
          props.active == true
            ? [style.flexCenter, style.activeText]
            : [style.flexCenter, style.inActiveText]
        }
      >
        {props.text}
      </Text>
    </View>
  );
};
const Navigation = () => {
  const [active, setActive] = useState(false);
  return (
    <View style={style.navigation}>
      <MenuItems
        active={true}
        text="Billboard"
        icons={
          <MaterialIcons
            name="movie"
            size={24}
            style={active == false ? style.activeText : style.inActiveText}
          />
        }
      />
      <MenuItems
        text="Coming Soon "
        icons={
          <MaterialCommunityIcons
            name="movie-roll"
            size={24}
            style={active == true ? style.activeText : style.inActiveText}
          />
        }
      />
      <MenuItems
        text="Food"
        icons={
          <MaterialCommunityIcons
            name="hamburger"
            size={24}
            style={active == true ? style.activeText : style.inActiveText}
          />
        }
      />
      <MenuItems
        text="Profile"
        icons={
          <Ionicons
            name="person"
            size={24}
            style={active == true ? style.activeText : style.inActiveText}
          />
        }
      />
    </View>
  );
};

export default Navigation;
