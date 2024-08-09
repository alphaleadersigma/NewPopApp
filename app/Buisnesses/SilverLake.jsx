import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, TouchableOpacity, ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
import CustomerReview from "../../Components/Customerreview";


const openMap = (address) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}';
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};
const Silver = require("../../assets/IMG_9492.webp");
const Silver2 = require("../../assets/image.png");
const Silver3 = require("../../assets/38C0FA27-4FAD-45C4-A637-EF00D5A15DE9.webp")
const BackArrow = require("../../assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Silver, Silver2, Silver3];

  return (
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={({ item }) => (
          <Image source={item} style={styles.carouselImage} />
        )}
        loop
        width={420}
        height={280}
      />
  );
};

const SilverLake = () => {
  const image = require('../../assets/person.png');

  return (
      <ScrollView style={styles.Profile}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <CarouselComponent/>
        </View>

        <Pressable onPress={() => router.navigate('/home')}>
          <Image source={BackArrow} style={styles.BackArrow}/>
        </Pressable>

        <Text style={styles.Title}>Silverlake Flea Market</Text>

        <View style={styles.scheduleContainer}>
          <Text style={styles.ScheduleText}>Friday: 10am - 3:30pm</Text>
          <Text style={styles.ScheduleText}>Saturday: 8:30am - 3:30pm</Text>
          <Text style={styles.ScheduleText}>Sunday: 9:30am - 3:30pm</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.Description}>
            {'\t'}Voted locally as some of the best shopping in Los Angeles and
            conveniently located dead center of Silverlake and Echo Park. The
            Silverlake Flea offers a great shopping experience for some of LA’s best
            vintage finds in the world of sustainable fashion. Check out the new
            flagship brick and mortar DeBRIS @officialdebris located at 1931 West
            Sunset Blvd LA 90026 Debris now serves as an Indoor Extension to ur
            Fleamarket, offering an Air Conditioned environment with music, coffee
            and independent sellers that revolve every Saturday and Sunday!
          </Text>
        </View>

        <TouchableOpacity style={styles.Button} onPress={() => openMap('1911 Sunset Blvd, Los Angeles, CA 90026-3222')}>
          <Text style={styles.Address}>1911 Sunset Blvd, Los Angeles, CA 90026-3222</Text>
        </TouchableOpacity>

        <Text style={styles.Reviews}>Customer Reviews</Text>

        <CustomerReview uri={image} customerReview={'This market is very nice.'}></CustomerReview>
        <CustomerReview uri={image} customerReview={'The price is resonable.'}></CustomerReview>
        <CustomerReview uri={image} customerReview={'Highly recommend. I anjoyed them last time and they have a lot of good stuff.'}></CustomerReview>
      </ScrollView>
  );
};

export default SilverLake;

const styles = StyleSheet.create({
  carouselImage: {
    width: 420,
    height: 280,
    borderRadius: 30,
  },
 
  Profile: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    posiiton: 'absolute',
  },
  BackArrow: {
    position: 'absolute',
    bottom: 180,
    marginLeft: 20,
  },
  Title: {
    fontSize: 32,
    color: "#FFF",
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10
  },
  scheduleContainer: {
    marginLeft: 15,
  },
  ScheduleText: {
    color: "white",
    fontSize: 16,
    lineHeight: 20,
  },
  descriptionContainer: {
    margin: 15,
  },
  Description: {
    lineHeight: 18,
    fontSize: 14,
    color: "#fff",
  },
  Reviews: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
  },
  Button: {  
    backgroundColor: '#474747',
    height: 35,
    borderRadius: 10,
    aligntItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 20,
    marginTop: 5
  },
  Address: {
    color: 'white',
    textAlign: 'center',
  },
});
