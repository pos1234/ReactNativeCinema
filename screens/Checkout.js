import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { style } from "../style";
import {
  Ionicons,
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
const DateCard = (props) => {
  return (
    <TouchableOpacity
      style={
        props.last
          ? [style.flexRow, style.payCard, { borderBottomWidth: 0 }]
          : [style.flexRow, style.payCard]
      }
      onPress={() => props.handleClick(props.text)}
    >
      <View style={[style.flexRow, style.textIconContainer]}>
        {props.icon}
        <Text
          style={
            props.checked
              ? [style.payText, { color: "white" }]
              : [style.payText]
          }
        >
          {props.text}
        </Text>
      </View>
      <View style={[style.payCheckBox, style.flexCenter]}>
        {props.checked ? (
          <FontAwesome name="check" size={15} color="#F74346" />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
const Checkout = () => {
  const [activeCheck, setActiveCheck] = useState("Credit Card");
  return (
    <View style={style.container}>
      <View style={[style.flexRow, style.sdHeader, { marginBottom: 20 }]}>
        <View style={[style.searchButtons, style.flexCenter, style.rotateIcon]}>
          <Ionicons name="play" size={24} color="#F1F1F1" />
        </View>
        <Text style={[style.sdText]}>Checkout</Text>
      </View>
      <View style={[style.flexRow, style.checkoutImageContainer]}>
        <Image
          source={require("../assets/avengers.png")}
          style={style.checkoutImage}
        />
        <View style={[style.flexCol, style.checkoutTextContainer]}>
          <Text style={style.checkoutMovieTitle}>Avengers: EndGame</Text>
          <Text style={style.checkoutGenerText}>Action,Sci-fi, Fantasy</Text>
          <View style={style.checkoutMoiveLocation}>
            <EvilIcons name="location" size={28} color="white" />
            <Text style={style.checkoutLocationText}> Medellin, Colombia</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[style.sdText, { textAlign: "center" }]}>Pay method</Text>
        <View style={[style.flexCol, style.payListContainer]}>
          <DateCard
            handleClick={setActiveCheck}
            icon={
              <FontAwesome
                name="credit-card-alt"
                size={24}
                color={activeCheck == "Credit Card" ? "#F74346" : "#4A4B56"}
              />
            }
            text="Credit Card"
            checked={activeCheck == "Credit Card" ? true : false}
          />
          <DateCard
            handleClick={setActiveCheck}
            icon={
              <MaterialCommunityIcons
                name="bank"
                size={30}
                color={activeCheck == "Bank Account" ? "#F74346" : "#4A4B56"}
              />
            }
            text="Bank Account"
            checked={activeCheck == "Bank Account" && true}
          />
          <DateCard
            handleClick={setActiveCheck}
            icon={
              <FontAwesome5
                name="money-check-alt"
                size={24}
                color={activeCheck == "Tele Birr" ? "#F74346" : "#4A4B56"}
              />
            }
            text="Tele Birr"
            checked={activeCheck == "Tele Birr" && true}
          />
          <DateCard
            handleClick={setActiveCheck}
            icon={
              <Entypo
                name="mobile"
                size={30}
                color={activeCheck == "Mobile Banking" ? "#F74346" : "#4A4B56"}
              />
            }
            text="Mobile Banking"
            checked={activeCheck == "Mobile Banking" && true}
            last={true}
          />
        </View>
        <View style={[style.searchButtons, style.booking, style.checkout]}>
          <Text style={style.checkoutText}>$29.1 | Pay</Text>
          <Ionicons name="play" size={20} color="#F1F1F1" />
        </View>
      </View>
    </View>
  );
};

export default Checkout;
