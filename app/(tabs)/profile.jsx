// Profile.jsx
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

//This is the only dependency that you need to install: npm install react-native-qrcode-svg
import QRCode from 'react-native-qrcode-svg'; 
const profilePic = require('../../assets/free-images.jpg'); 

const Profile = () => {
  // Sample data for the profile
  const user = {
    name: 'Donovan Castellon',
    description: 'A brief description about the Don. This can include interests, hobbies.',
    preferences: 'Favorite places: El Elotero Man, My mom\'s restaurant, Anime Expo, Spontaneous Anime Santa Monica',
    qrCodeValue: 'https://venmo.com' 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.profileContainer}>
        <Image
          source={profilePic} 
          style={styles.profileImage}
        />

        <View style={{alignItems: 'center', justifyContent: 'center', width: 450}}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>{user.description}</Text>
        </View>


        <View style={styles.preferencesContainer}>
          <Text style={styles.preferences}>{user.preferences}</Text>
        </View>

        <View style={styles.qrCodeContainer}>
          <QRCode
            value={user.qrCodeValue}
            size={100} // Adjust size as needed
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333333',
    padding: 100,
  },
  profileContainer: {
    alignItems: 'center',
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
  preferencesContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 400,
  
  },
  preferences: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 20,
  },
  qrCodeContainer: {
    marginTop: 20,
  },
 
});

export default Profile;