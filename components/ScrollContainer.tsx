import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ScrollContainer = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.title}>Flex Property</Text>
      <View style={styles.scrollViewContainer}>
        
        <View style={[styles.scrollBoxs, styles.scrollBox1]}>
          <View style={styles.textView}>
             <Text style={styles.cardTitle}>space-around</Text>
             <Text style={styles.cardContent}>Evenly space off children across the container's main axis</Text>
          </View>
          <Image source={{
            uri: 'https://cdn.sanity.io/images/s7xbv9bz/production/660634f43745aecc178fb11d730a03b8651de3c9-776x776.svg?w=776&h=776&auto=format&fm=webp'
          }} 
          style={styles.scrollImage}
          />
        </View>


        <View style={[styles.scrollBoxs, styles.scrollBox2]}>
          <View style={styles.textView}>
             <Text style={styles.cardTitle}>flex-end</Text>
             <Text style={styles.cardContent}>Align children of a container to the end of the container's main axis</Text>
          </View>
          <Image source={{
            uri: 'https://deepsolver.com/_ipx/f_svg/technology/neutral-net.svg'
          }} 
          style={styles.scrollImage}
          />
        </View>

        <View style={[styles.scrollBoxs, styles.scrollBox3]}>
          <View style={styles.textView}>
             <Text style={styles.cardTitle}>center</Text>
             <Text style={styles.cardContent}>Align children of a container in the center of the container's main axis</Text>
          </View>
          <Image source={{
            uri: 'https://cdn.squareboat.com/img_large_webp/services/FW66YX8lUdX8zJSVtTlTD3X3r3oORCAW460BeFV2.svg'
          }} 
          style={styles.scrollImage}
          />
        </View>

        <View style={[styles.scrollBoxs, styles.scrollBox4]}>
          <View style={styles.textView}>
             <Text style={styles.cardTitle}>space-evenly</Text>
             <Text style={styles.cardContent}>Evenly distribute children within the alignment container along the main axis</Text>
          </View>
          <Image source={{
            uri: 'https://images.ctfassets.net/93e8slakzebf/34OJ9Cso0y7m09CZjnlFNc/97b3b16c044af6602011973d211aba92/18_web-app-pwa.svg?fm=webp&w=1920&q=75'
          }} 
          style={styles.scrollImage}
          />
        </View>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    scrollContainer: {
      marginBottom: 40,
      marginTop: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#B11363",
        marginBottom: 5,
    },

    scrollViewContainer: {
      // height: 600,
      alignItems: 'center',

    },

    scrollBoxs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // marginHorizontal: 5,
        marginVertical: 5,
        paddingHorizontal: 15,
        // padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        height: 120,
        width: '90%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    textView: {
      width: '60%'
    },

    scrollImage: {
      width: 120,
      height: 90,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardContent: {
      marginTop: 5,
      color: '#454545'
    },

    scrollBox1: {
      backgroundColor: '#ff99c8'
    },
    scrollBox2: {
      backgroundColor: '#a9def9'
    },
    scrollBox3: {
      backgroundColor: '#a3b18a'
    },
    scrollBox4: {
      backgroundColor: '#fefae0'
    },
})

export default ScrollContainer;