// Profile.jsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import {Image} from 'expo-image';
import { router } from 'expo-router';

//This is the only dependency that you need to install: npm install react-native-qrcode-svg
// import QRCode from 'react-native-qrcode-svg'; 
import Card from '../../Components/Card';
const profilePic = require('../../assets/catdonovan.jpg'); 

const Profile = () => {
  // Sample data for the profile
  const user = {
    name: 'Donovan Castellon',
    description: 'A brief description about the Don. This can include interests, hobbies.',
    preferences: 'Favorite places: El Elotero Man, My mom\'s restaurant, Anime Expo, Spontaneous Anime Santa Monica',
    qrCodeValue: 'https://venmo.com' 
  };

  const fakeFavorites = [
    {id:1, uri:require('../../assets/o.jpg'), name:'Spontaneous Anime Santa Monica', toPage: '/Buisnesses/Alameda'},
    {id:2, uri:require('../../assets/o(2).jpg'), name:'El Elotero Man', toPage: '/Buisnesses/Melrose'},
    {id:3, uri:require('../../assets/melrose3.webp'), name:'Anime Expo', toPage: '/Buisnesses/Rosebowl'},
    {id:4, uri:require('../../assets/pexels-photo-10074785.webp'), name:'Mom\'s Restaurant', toPage: '/Buisnesses/SilverLake'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={profilePic} 
          style={styles.profileImage}
        />

        <View style={{alignItems: 'center', justifyContent: 'center', width: 450}}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>{user.description}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        {fakeFavorites.map(place => (
          <Pressable onPress={() => {router.push(place.toPage)}}>
            <Card key={place.id} uri={place.uri} name={place.name} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  profileContainer: {
    alignItems: 'center',
    height: 380,
    backgroundColor: '#4f4f4f',
    paddingTop: 70,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, //image circular
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 10,
    marginLeft:5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF'
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  // qrCodeContainer: {
  //   marginTop: 20,
  // },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
 
});

export default Profile;