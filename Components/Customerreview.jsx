import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export default function CustomerReview({ uri, customerReview }) {
  return (
    <View style={styles.descriptionBoxContainer}>
    <Image
      source={uri} // Replace with dynamic image source
      style={styles.smallProfileImage}
    />
    <View style={styles.descriptionBox}>
      <Text style={styles.bottomDescription}>{customerReview}</Text>
    </View>
  </View>

  );
}

const styles = StyleSheet.create({
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
        backgroundColor: '#474747',
        borderColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
      },
      bottomDescription: {
        fontSize: 14,
        color: '#FFF',
      },
 
});
