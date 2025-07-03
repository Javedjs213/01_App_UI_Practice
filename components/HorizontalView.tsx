import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HorizontalView = () => {
  return (
    <View>
        <Text style={styles.title}>Storage List</Text>

        <View style={styles.container}>
        <View style={styles.storeContainer}>
            <Text style={styles.storeText}>Store 1</Text>
        </View>
        <View style={styles.storeContainer}>
            <Text style={styles.storeText}>Store 2</Text>
        </View>
        <View style={styles.storeContainer}>
            <Text style={styles.storeText}>Store 3</Text>
        </View>
        <View style={styles.storeContainer}>
            <Text style={styles.storeText}>Store 4</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        // backgroundColor: '#f0f0f0',
        height: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B11363',
        marginBottom: 10,
    },
    storeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        height: 80,
        // width: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    storeText: {
        fontSize: 16,
        color: '#B11363',
    },
})

export default HorizontalView;