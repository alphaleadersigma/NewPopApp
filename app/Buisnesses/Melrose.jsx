import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, TouchableOpacity, ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
import CustomerReview from "../../Components/Customerreview";


const Melrose1 = require("../../assets/melrose3.webp");
const Melrose2 = require("../../assets/melrose2.webp")
const Melrose3 = require("../../assets/melrose3.webp")
const BackArrow = require("../../assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Melrose1, Melrose2, Melrose3];

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

const Melrose = () => {
  const image = require('../../assets/person.png');
  return (
    <ScrollView style={styles.Profile}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <CarouselComponent/>
      </View>

      <Pressable onPress={() => router.back()}>
        <Image source={BackArrow} style={styles.BackArrow}/>
      </Pressable>

      <Text style={styles.Title}>Melrose Trading Post</Text>

      <View style={styles.scheduleContainer}>
        <Text style={styles.ScheduleText}>Every Sunday Of The Month, Open Until 10am-5pm</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.Description}>
          {'\t'}The Melrose Trading Post is operated by Greenway Arts Alliance, a community-based
          nonprofit organization whose mission is to unite communities through art, education and
          enterprise. gaa-logo Every Sunday, the Melrose Trading Post offers a constantly evolving
          experience, with a curated selection of handcrafted artisan goods, eclectic art and craft,
          vintage fashion, antique furniture and one-of-a-kind treasures.
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

export default Melrose;

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
