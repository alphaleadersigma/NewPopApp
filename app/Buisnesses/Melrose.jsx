import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
const Melrose = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/melrose3.webp");
const Melrose2 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/melrose2.webp")
const Melrose3 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/melrose3.webp")
const BackArrow = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Melrose, Melrose2, Melrose3];

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
      <Text style={styles.Title}>Melrose Trading Post</Text>
      <Text style={styles.ScheduleTitle}>Schedule:</Text>
      <Text style={styles.Schedule1}>Every Sunday Of The Month, Open Until 10am-5pm </Text>
      <Text style={styles.Description}>
      The Melrose Trading Post is operated by Greenway Arts Alliance, a community-based nonprofit organization whose mission is to unite communities through art, education and enterprise. gaa-logo Every Sunday, the Melrose Trading Post offers a constantly evolving experience, with a curated selection of handcrafted artisan goods, eclectic art and craft, vintage fashion, antique furniture and one-of-a-kind treasures
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
    top: -168,
    
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
    top: -300,
  },

  ScheduleTitle: {
    fontSize: 18,
    top: -155,
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
    top: -325,
  },
  Schedule2: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -315,
    right: 85
  },

  Schedule3 : {
    color: "white",
    fontSize: 16,
    fontWeight:  "400",
    wordWrap: "break-word",
    top: -305,
    right: 40

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
    top: -290,
    right: 160,
    height: 35,
    width:40,

  }
});
