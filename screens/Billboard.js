import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { style } from "../style";
const MovieCard = (props) => {
  return (
    <View style={[style.flexCenter, style.movieCard]}>
      <Image source={require("../assets/avengers.png")} />
      <Text style={style.movieTitle}>{props.title}</Text>
      {props.subTitle && (
        <Text style={style.movieSubTitle}>{props.subTitle}</Text>
      )}
    </View>
  );
};

const Billboard = (props) => {
  const [active, setActive] = useState(false);
  return (
    <View style={style.container}>
      <View style={[style.flexCol, style.headline]}>
        <View style={[style.flexRow, style.headlineElements]}>
          <View>
            <Text style={style.activeText}>Choose Cinema</Text>
            <Text>Alem Cinema</Text>
          </View>
          <View style={[style.flexRow, style.buttonContainer]}>
            <View style={[style.searchButtons, style.flexCenter]}>
              <Ionicons name="md-search-outline" size={24} color="#F1F1F1" />
            </View>
            {/* <View style={[style.searchButtons, style.flexCenter]}>
                  <Text> 0</Text>
                </View> */}
          </View>
        </View>
        <View style={[style.promotionCard, style.flexRow]}>
          <View style={style.flexCenter}>
            <Text style={style.promoText}>Know the Promotion of</Text>
            <Text style={style.promoTextBold}>Tuesdays & Mondays</Text>
          </View>
          <View style={[style.flexCenter, style.promoCardArrow]}>
            <Feather name="arrow-down-right" size={40} color="white" />
          </View>
        </View>
        <View style={[style.flexRow, style.navigateContainer]}>
          <Text
            onPress={() => setActive(!active)}
            style={
              active == false
                ? [
                    style.navigateText,
                    style.flexCenter,
                    style.navigateTextActive,
                  ]
                : [style.navigateText, style.flexCenter]
            }
          >
            Services
          </Text>
          <Text
            onPress={() => setActive(!active)}
            style={
              active == true
                ? [
                    style.navigateText,
                    style.flexCenter,
                    style.navigateTextActive,
                  ]
                : [style.navigateText, style.flexCenter]
            }
          >
            Theaters
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} style={style.movieContainer}>
        <MovieCard title="Avengers" subTitle="End Game" />
        <MovieCard title="Avengers" subTitle="End Game" />
        <MovieCard title="Avengers" subTitle="End Game" />
      </ScrollView>
    </View>
  );
};

export default Billboard;
