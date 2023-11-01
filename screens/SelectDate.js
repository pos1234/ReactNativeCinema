import React from "react";
import { Text, View } from "react-native";
import { style } from "../style";
import { Ionicons } from "@expo/vector-icons";
const DateCard = (props) => {
  return (
    <View
      style={
        props.active == "true"
          ? [style.flexCol, style.flexCenter, style.dayCard, style.activeDate]
          : [style.flexCol, style.flexCenter, style.dayCard]
      }
    >
      <Text style={style.monthText}>{props.month}</Text>
      <Text style={style.dayText}>{props.day}</Text>
    </View>
  );
};
const Selected = () => {
  return <View style={[style.avBox, style.sdBox]}></View>;
};
const Reserved = () => {
  return <View style={[style.avBox, style.rsBox]}></View>;
};
const Available = () => {
  return <View style={style.avBox}></View>;
};
const SelectDate = () => {
  const renderComponents = () => {
    const components = [];
    for (let i = 0; i < 24; i++) {
      i % 2 == 0
        ? i < 5
          ? components.push(<Selected key={i} />)
          : components.push(<Available key={i} />)
        : components.push(<Reserved key={i} />);
    }
    return components;
  };
  return (
    <View style={style.container}>
      <View style={[style.flexRow, style.sdHeader]}>
        <View style={[style.searchButtons, style.flexCenter, style.rotateIcon]}>
          <Ionicons name="play" size={24} color="#F1F1F1" />
        </View>
        <Text style={[style.sdText]}>Select Seat</Text>
      </View>
      <View style={style.sdCard}>
        <View style={style.movieScreen}>
          <Text style={style.movieScreenText}>Movie Screen</Text>
        </View>
        <View style={[style.flexRow, style.seatContainer]}>
          <View style={[style.flexRow, style.seatFlex]}>
            {renderComponents()}
          </View>
          <View style={[style.flexRow, style.seatFlex]}>
            {renderComponents()}
          </View>
        </View>
        <View style={[style.flexRow, style.tableIndicatorTab]}>
          <View style={style.flexRow}>
            <View
              style={[style.tableIndicatorBox, style.tableIndicatorSd]}
            ></View>
            <Text style={style.tableIndicator}>Selected</Text>
          </View>
          <View style={style.flexRow}>
            <View
              style={[style.tableIndicatorBox, style.tableIndicatorRs]}
            ></View>
            <Text style={style.tableIndicator}>Reserved</Text>
          </View>
          <View style={style.flexRow}>
            <View
              style={[style.tableIndicatorBox, style.tableIndicatorAv]}
            ></View>
            <Text style={style.tableIndicator}>Available</Text>
          </View>
        </View>
      </View>
      <View style={style.sdCard}>
        <Text style={style.seletDay}>Select Day</Text>
        <View style={[style.flexRow, style.dayContainer]}>
          <DateCard month="May" day="1" />
          <DateCard month="May" day="2" />
          <DateCard month="May" day="3" />
          <DateCard month="May" day="4" active="true" />
          <DateCard month="May" day="5" />
        </View>
        <Text style={style.seletDay}>Time</Text>
        <Text style={style.timeText}>8:45 pm</Text>
        <View style={[style.searchButtons, style.booking, style.checkout]}>
          <Text style={style.checkoutText}>Checkout</Text>
          <Ionicons name="play" size={20} color="#F1F1F1" />
        </View>
      </View>
    </View>
  );
};

export default SelectDate;
