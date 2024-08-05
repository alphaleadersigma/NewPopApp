import React, { useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const Silver = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/IMG_9492.webp");
const Silver2 = require("/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/image.png");

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Silver, Silver2];

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
      <Text style={styles.Title}>Silverlake Flea Market</Text>
      <Text style={styles.ScheduleTitle}>Schedule:</Text>
      <Text style={styles.Schedule1}>Friday, Time Open: 10am-3:30pm</Text>
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
    top: -205,
    right: 90,
    fontFamily: "Inter",
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
    top: -320,
  },

  ScheduleTitle: {
    fontSize: 18,
    top: -203,
    width: 355,
    height: 200,
    color: '#fff',
    right: 5,
    fontStyle: 'italic'
  },

  Schedule1: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    wordWrap: "break-word",
    top: -380,
    right: 60
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
});
