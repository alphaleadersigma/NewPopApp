import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
const Rose = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/o.jpg");
const Rose2 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/o(2).jpg")
const Rose3 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/o (1).jpg")
const BackArrow = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Rose, Rose2, Rose3];

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
  return (
    <View style={styles.Profile}>
      <CarouselComponent />
      <Pressable onPress={() => router.navigate('/home')}>
        <Image source={BackArrow} style={styles.BackArrow}/>
      </Pressable>
      <Text style={styles.Title}>Alameda Swapmeet</Text>
      <Text style={styles.ScheduleTitle}>Schedule:</Text>
      <Text style={styles.Schedule1}>Monday: 8:00am - 6:30pm </Text>
      <Text style={styles.Schedule4}>Tuesday: Closed</Text>
      <Text style={styles.Schedule2}>Wed: 8:00 AM - 6:30 PM</Text>
      <Text style={styles.Schedule3}>Thu: 8:00 AM - 6:30 PM</Text>
      <Text style={styles.Schedule5}>Fri: 8:00 AM - 6:30 PM</Text>
      <Text style={styles.Schedule6}>Sat: 7:00 AM - 6:30 PM</Text>
      <Text style={styles.Schedule7}>Sun: 7:00 AM - 6:30 PM</Text>

      <Text style={styles.Description}>
      Vintage treasure hunters and bargain seekers flock to the legendary Rose Bowl Flea Market. Held the second Sunday of every month. Experience over 2,500 vendors full of antiques, vintage clothing, local art, and specialty products. The legendary Rose Bowl Flea Market is celebrating over 55 years of continued success. The flea market attracts 20,000 buyers, including celebrities and interior designers. Concession stands are sprinkled throughout the market, offering food and drinks.
      </Text>
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
  Title: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 22,
    color: "#FFF",
    top: -90,
    
    fontFamily: "Inter",
    textAlign: 'center',
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
    top: -255,
  },
  
  ScheduleTitle: {
    fontSize: 18,
    top: -90,
    width: 355,
    height: 200,
    color: '#fff',
    
  },
  
  Schedule1 : {
    color: "white",
    fontSize: 16,
    fontWeight:  "400",
    wordWrap: "break-word",
    top: -265,
    right: 75
  
  },
  Schedule4: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -265,
    right: 116
  },
  Schedule2: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -265,
    right: 85
  },
  
  
  Schedule3 : {
    color: "white",
    fontSize: 16,
    fontWeight:  "400",
    wordWrap: "break-word",
    top: -265,
    right: 85
  
  },
  Schedule5: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -265,
    right: 85
  },
  Schedule6: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -265,
    right: 85
  },
  Schedule7: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -265,
    right: 85
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
    top: -210,
    right: 160,
    height: 35,
    width:40,
  },
});
