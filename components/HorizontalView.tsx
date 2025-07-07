import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const HorizontalView = () => {
  return (
    <View>
        <Text style={styles.title}>Person List</Text>

        <ScrollView 
            contentContainerStyle={styles.container} 
            horizontal 
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.storeContainer}>
                {/* <Text style={styles.storeText}>Store 1</Text> */}
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
                    }}
                    style={styles.StoreImage}
                />
            </View>
            <View style={styles.storeContainer}>
                <Image 
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s'
                    }}
                    style={styles.StoreImage}
                />
            </View>


            <View style={styles.storeContainer}>
                            <Image 
                    source={{
                        uri: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg'
                    }}
                    style={styles.StoreImage}
                />
            </View>


            <View style={styles.storeContainer}>
                <Image 
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg'
                    }}
                    style={styles.StoreImage}
                />
            </View>

            <View style={styles.storeContainer}>
                <Image 
                    source={{
                        uri: 'https://tse3.mm.bing.net/th/id/OIP.xi4h1WZBgj8oaQ83Vnn2sQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
                    }}
                    style={styles.StoreImage}
                />
            </View>

        </ScrollView>
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
        width: 80,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: '#000',
        height: 80,
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
    StoreImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
})

export default HorizontalView;