import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import HorizontalView from "./components/HorizontalView";
import ScrollContainer from "./components/ScrollContainer";
import TourCard from "./components/TourCard";


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
          {/* <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" , color: "black"}}>Hello World</Text>
            </View> */}
          <HorizontalView />
          <ScrollContainer />
          <TourCard />
        </ScrollView>
    </SafeAreaView>
  )
}

export default App;