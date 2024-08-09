import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
import CustomerReview from "../../Components/Customerreview";



const openMap = (address) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}';
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};
const Silver = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Rectangle 72.png");
const BackArrow = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Silver];

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={({ item }) => (
          <Image source={item} style={styles.carouselImage} />
        )}
        loop
        width={428}
        height={308}
      />
    </View>
  );
};

const SilverLake = () => {
  const image = require('../../assets/favicon.png');
  return (
    <View style={styles.Profile}>
      <CarouselComponent />
      <Pressable onPress={() => router.navigate('posting/home')}>
        <Image source={BackArrow} style={styles.BackArrow}/>
      </Pressable>
      <Text style={styles.Title}>The Roadium</Text>
      <Text style={styles.ScheduleTitle}>Schedule:</Text>
      <Text style={styles.Schedule1}>7AM-3PM</Text>
      <Text style={styles.Schedule2}>Every Day, Monday-Sunday</Text>
      <Text style={styles.Description}>
      The Roadium is located in Torrance, CA—just a heartbeat away from El Camino College. It's a great place for families and friends to explore, bargain hunt, and make memories. Feel the excitement of a 15-acre outdoor swap meet that offers an eclectic mix of new & used furniture, clothing, jewelry, and so much more. We are OPEN EVERYDAY except Christmas and New Years Day from 7am until 3pm.
      </Text>
      <Text style={styles.Reviews}>
        Customer Reviews
      </Text>
      <Text style={styles.Sigma}>
        No Reviews Available! 
      </Text>
      <TouchableOpacity style={styles.Button} onPress={() => openMap('2500 W Redondo Beach Blvd, Torrance, CA 90504')}>
        <Text style={styles.Address}>2500 W Redondo Beach Blvd, Torrance, CA 90504</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SilverLake;

const styles = StyleSheet.create({
 
 
  Profile: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    justifyContent: "center",
    alignItems: "center",
  },
  Reviews: {
    color: 'white',
    bottom: 480,
    fontSize: 18,
    marginBottom: -10,    fontWeight: 'bold'

  },

  Sigma: {
    color: 'white',
    fontSize: 16,
    bottom: 420
  },
  Button: 
  {  
  backgroundColor: '#474747',
  height: 35, 
  marginTop: -270,
  borderRadius: 10,
  aligntItems: 'center',
  justifyContent: 'center',
  padding: 5,
  bottom: 300,

  },
  ReviewContainer: {
    width: 370,
    bottom: 30
  },
  Address: {
    color: 'white'

  },
  Title: {
    fontSize: 18,
    lineHeight: 22,
    color: "#FFF",
    top: -385,
    fontFamily: "Inter",
    textAlign: 'center',
    fontWeight: 'bold'
  },

  Description: {
    width: 355,
    height: 200,
    flexShrink: 0,
    fontWeight: "400",
    lineHeight: 18.2,
    wordWrap: "break-word",
    fontSize: 13,
    color: "#fff",
    top: -500,
  },

  ScheduleTitle: {
    fontSize: 18,
    top: -380,
    width: 355,
    height: 200,
    color: '#fff',
    right: 5,
  },

  Schedule1: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -545,
    right: 145
  },
  Schedule2: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -535,
    right: 82
  },

  Schedule3 : {
    color: "white",
    fontSize: 16,
    fontWeight:  "400",
    wordWrap: "break-word",
    top: -305,
    right: 47

  },
  carouselContainer: {
    width: 458,
    alignItems: "center",
    flex: 1,
    borderRadius: 20, // Add this line
    overflow: "hidden", // Add this line
  },
  carouselImage: {
    width: 420,
    height: 220,
    resizeMode: "cover",
    top: -20,
    position: 'center',
    borderRadius: 30,
    left: 2,
  },

  BackArrow: {
    top: -500,
    right: 160,
    height: 35,
    width:40,

  }
});
