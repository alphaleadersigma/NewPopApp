import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, TouchableOpacity, ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
import CustomerReview from "../../Components/Customerreview";



const openMap = (address) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}';
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};
const Silver = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/IMG_9492.webp");
const Silver2 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/image.png");
const Silver3 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/38C0FA27-4FAD-45C4-A637-EF00D5A15DE9.webp")
const BackArrow = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Silver, Silver2, Silver3];

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
      <ScrollView style={styles.Profile}>
      <CarouselComponent/>
      <Pressable onPress={() => router.navigate('/home')}>
        <Image source={BackArrow} style={styles.BackArrow}/>
      </Pressable>
        <Text style={styles.Title}>Silverlake Flea Market</Text>
        <Text style={styles.ScheduleTitle}>Schedule:</Text>
        <Text style={styles.Schedule1}>Friday, Time Open: 10am-3:30pm</Text>
        <Text style={styles.Schedule2}>Saturday, Time Open: 8:30am-3:30pm</Text>
        <Text style={styles.Schedule3}>Sunday, Time Open: 9:30am-3:30pm</Text>
        <Text style={styles.Description}>
          Voted locally as some of the best shopping in Los Angeles and
          conveniently located dead center of Silverlake and Echo Park. The
          Silverlake Flea offers a great shopping experience for some of LA’s best
          vintage finds in the world of sustainable fashion. Check out the new
          flagship brick and mortar DeBRIS @officialdebris located at 1931 West
          Sunset Blvd LA 90026 Debris now serves as an Indoor Extension to ur
          Fleamarket, offering an Air Conditioned environment with music, coffee
          and independent sellers that revolve every Saturday and Sunday!
        </Text>
        <Text style={styles.Reviews}>
          Customer Reviews
        </Text>
        <TouchableOpacity style={styles.Button} onPress={() => openMap('1911 Sunset Blvd, Los Angeles, CA 90026-3222')}>
          <Text style={styles.Address}>1911 Sunset Blvd, Los Angeles, CA 90026-3222</Text>
        </TouchableOpacity>
      <View style={styles.ReviewContainer}>
        <CustomerReview uri={image} customerReview={'Reviews'}></CustomerReview>
        <CustomerReview uri={image} customerReview={'Reviews'}></CustomerReview>
        <CustomerReview uri={image} customerReview={'Reviews'}></CustomerReview>
      </View>
     </ScrollView>
  );
};

export default SilverLake;

const styles = StyleSheet.create({
 
 
  Profile: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    // justifyContent: "center",
    // alignItems: "center",
  },
  Reviews: {
    color: 'white',
    // bottom: 130,
    fontSize: 20,
  },
  Button: 
  {  
  backgroundColor: '#474747',
  height: 35, 
  borderRadius: 10,
  aligntItems: 'center',
  justifyContent: 'center',
  padding: 5,
  // bottom: 120,
  },
  ReviewContainer: {
    width: 380,
    // bottom: 80
  },
  Address: {
    color: 'white'
  },
  Title: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 22,
    color: "#FFF",
    // top: -168,
    fontFamily: "Inter",
    textAlign: 'center',
    fontWeight: 'bold,'
  },

  Description: {
    width: 355,
    height: 200,
    // flexShrink: 0,
    fontWeight: "400",
    lineHeight: 18.2,
    // wordWrap: "break-word",
    fontSize: 13,
    color: "#fff",
    // top: -300,
  },

  ScheduleTitle: {
    fontSize: 18,
    // top: -155,
    width: 355,
    height: 200,
    color: '#fff',
    // right: 5,
  },

  Schedule1: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    // wordWrap: "break-word",
    // top: -325,
    // right: 60
  },
  Schedule2: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    // top: -315,
    // right: 42
  },

  Schedule3 : {
    color: "white",
    fontSize: 16,
    fontWeight:  "400",
    // wordWrap: "break-word",
    // top: -305,
    // right: 47

  },
  carouselContainer: {
    width: 458,
    alignItems: "center",
    flex: 1,
    borderRadius: 20, // Add this line
    // overflow: "hidden", // Add this line
    // zIndex: 0
  },
  carouselImage: {
    width: 420,
    height: 220,
    resizeMode: "cover",
    // top: -20,
    // position: 'center',
    borderRadius: 30,
    // left: 2,
  },

  BackArrow: {
    // top: -300,
    right: 160,
    height: 35,
    width:40,

  }
});
