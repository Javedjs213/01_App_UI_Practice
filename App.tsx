import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HorizontalView from "./components/HorizontalView";
import ScrollContainer from "./components/ScrollContainer";


const App = () => {
  return (
    <SafeAreaView>
      {/* <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" , color: "black"}}>Hello World</Text>
      </View> */}
      <HorizontalView />
      <ScrollContainer />
    </SafeAreaView>
  )
}

export default App;