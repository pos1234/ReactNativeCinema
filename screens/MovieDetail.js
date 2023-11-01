import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { style } from "../style";
import { Ionicons } from "@expo/vector-icons";
const MovieDetail = (props) => {
  return (
    <View style={style.container}>
      <View style={style.mdTrailerContainer}>
        <Image
          source={require("../assets/avengers.png")}
          style={style.mdMovieImage}
        />
        <View style={[style.searchButtons, style.flexCenter, style.rotateIcon]}>
          <Ionicons name="play" size={24} color="#F1F1F1" />
        </View>
        <View style={[style.searchButtons, style.viewTrailer]}>
          <Ionicons name="play" size={15} style={style.trailerPlayIcon} />
          <Text style={style.trailerText}>Trailer</Text>
        </View>
      </View>
      <View style={style.mdDetailContainer}>
        <View style={style.flexCenter}>
          <Text style={style.movieTitle}>Avengers</Text>
          <Text style={style.movieSubTitle}>EndGame</Text>
        </View>
        <ScrollView
          style={style.genereContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={style.genere}>Action</Text>
          <Text style={style.genere}>Science fiction</Text>
          <Text style={style.genere}>Fantasy</Text>
        </ScrollView>
        <ScrollView
          style={style.genereContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
          <Image
            source={require("../assets/avengers.png")}
            style={style.actorsAvatar}
          />
        </ScrollView>
        <Text style={style.movieDescription}>
          Adrift in space with no food or water, Tony Stark sends a message to
          Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the
          remaining Avengers...
        </Text>
        <View style={[style.searchButtons, style.booking]}>
          <Text style={style.trailerText}>Booking</Text>
          <Ionicons name="play" size={20} color="#F1F1F1" />
        </View>
      </View>
    </View>
  );
};

export default MovieDetail;
