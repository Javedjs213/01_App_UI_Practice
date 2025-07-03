import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ScrollContainer = () => {
  return (
    <View>
      <Text style={styles.title}>ScrollContainer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#B11363",
        marginBottom: 5,
    }
})

export default ScrollContainer;