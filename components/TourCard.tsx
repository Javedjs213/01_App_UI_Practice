import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const TourCard = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>Tour Card</Text>
      <View style={styles.cardBox}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1648576814471-366d3a890751?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>The Team Zone</Text>
        <Text style={styles.cardContent}>6 Days ▪ From $830</Text>
      </View>

      <View style={styles.cardBox}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1722673784698-696a3119754a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Tokyo, Japan</Text>
        <Text style={styles.cardContent}>5 Days ▪ From $550</Text>
      </View>

      <View style={styles.cardBox}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1608453162650-cba45689c284?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Study Center</Text>
        <Text style={styles.cardContent}>30 Days ▪ From $1050</Text>
      </View>

      <View style={styles.cardBox}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1750729058168-9cc8090ae2ec?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Photography Learn</Text>
        <Text style={styles.cardContent}>7 Days ▪ From $380</Text>
      </View>
      <View style={styles.cardBox}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1750409221671-d925a6d7126c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Shibuya, Japan</Text>
        <Text style={styles.cardContent}>6 Days ▪ From $650</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    marginBottom: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B11363',
    marginBottom: 10,
  },

  cardBox: {
    // marginLeft: '5%',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: 20,
    borderTopRightRadius: 31,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderWidth: 2,
    // backgroundColor: 'pink'
    // elevation: 5
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131AA5',
    marginTop: 10,
    marginLeft: 10,
  },
  cardContent: {
    fontWeight: 'bold',
    color: '#626262',
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default TourCard;
