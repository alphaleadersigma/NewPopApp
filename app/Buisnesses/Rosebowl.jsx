import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
const Rose = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Rose-Bowl-Flea-Market-1-e1552133799525.webp");
const Rose2 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/945x596-Rose-Bowl-Flea-Market_0003_Layer-8_c3874c415bc6570c0135981023e928db_daae8725-a013-f323-7cebdc163f84a0ba_940f99e66cc86fbdb8e45185a34c0913.webp")
const Rose3 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/pexels-photo-10074785.webp")
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
      <Text style={styles.Title}>Rosebowl Flea Market</Text>
      <Text style={styles.ScheduleTitle}>Schedule:</Text>
      <Text style={styles.Schedule1}>Every Second Sunday Of The Month</Text>
      <Text style={styles.Schedule2}>VIP Entry 4:30am-4:30pm</Text>
      <Text style={styles.Schedule3}>Regular Entry Starting At 9am-4:30pm</Text>
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
    right: 50
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
