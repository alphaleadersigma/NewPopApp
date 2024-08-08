// Profile.jsx
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

//This is the only dependency that you need to install: npm install react-native-qrcode-svg
import QRCode from 'react-native-qrcode-svg'; 
const profilePic = require('../../assets/favicon.png'); 
const smallProfilePic = require('../../assets/favicon.png'); 

const Profile = () => {
  // Sample data for the profile
  const user = {
    name: 'Donovan',
    description: 'A brief description about the Don. This can include interests, hobbies, or anything else that describes the user.',
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

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.description}>{user.description}</Text>

        <TextInput
          style={styles.preferences}
          value={user.preferences}
          multiline
          editable={true} // Set to false if you don't want to allow editing
        />

        <View style={styles.qrCodeContainer}>
          <QRCode
            value={user.qrCodeValue}
            size={100} // Adjust size as needed
          />
        </View>

      {/* Profile pic on left with description on right*/}
      <View style={styles.descriptionBoxContainer}>
        <Image
          source={smallProfilePic} // Replace with dynamic image source
          style={styles.smallProfileImage}
        />
        <View style={styles.descriptionBox}>
          <TextInput style={styles.bottomDescription}>{user.bottomDescription}</TextInput>
        </View>
      </View>

      {/* Again, Profile pic on left with description on right*/}
      <View style={styles.descriptionBoxContainer}>
        <Image
          source={smallProfilePic} // Replace with dynamic image source
          style={styles.smallProfileImage}
        />
        <View style={styles.descriptionBox}>
          <TextInput style={styles.bottomDescription}>{user.bottomDescription}</TextInput>
        </View>
      </View>



      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
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
  preferences: {
    fontSize: 14,
    color: '#FFF',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    textAlignVertical: 'top', // Align text to the top in multiline mode
  },
  qrCodeContainer: {
    marginTop: 20,
  },
  descriptionBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  smallProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes the image circular
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 10,
  },
  descriptionBox: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
  },
  bottomDescription: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default Profile;