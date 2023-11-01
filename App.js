import { useState } from "react";
import { View } from "react-native";

import Billboard from "./screens/Billboard";
import Navigation from "./components/Navigation";
import MovieDetail from "./screens/MovieDetail";
import SelectDate from "./screens/SelectDate";
import Checkout from "./screens/Checkout";

export default function App() {
  const [billboard, setBillboard] = useState(false);
  return (
    <View>
      {billboard && <Billboard />}
      {billboard && <MovieDetail />}
      {billboard && <SelectDate />}
      {!billboard && <Checkout />}
      {billboard && <Navigation />}
    </View>
  );
}
