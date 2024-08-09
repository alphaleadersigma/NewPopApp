import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, Pressable, Linking, TouchableOpacity, ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from 'expo-router'
import CustomerReview from "../../Components/Customerreview";


const Rose = require("../../assets/Rose-Bowl-Flea-Market-1-e1552133799525.webp");
const Rose2 = require("../../assets/945x596-Rose-Bowl-Flea-Market_0003_Layer-8_c3874c415bc6570c0135981023e928db_daae8725-a013-f323-7cebdc163f84a0ba_940f99e66cc86fbdb8e45185a34c0913.webp")
const Rose3 = require("../../assets/pexels-photo-10074785.webp")
const BackArrow = require("../../assets/Back Arrow.png")
const CarouselComponent = () => {
  const carouselRef = useRef(null);

  const images = [Rose, Rose2, Rose3];

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

const Rosebowl = () => {
  const image = require('../../assets/person.png');
  return (
    <ScrollView style={styles.Profile}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <CarouselComponent/>
      </View>

      <Pressable onPress={() => router.navigate('/home')}>
        <Image source={BackArrow} style={styles.BackArrow}/>
      </Pressable>

      <Text style={styles.Title}>Rosebowl Flea Market</Text>

      <View style={styles.scheduleContainer}>
        <Text style={styles.ScheduleText}>Every Second Sunday Of The Month</Text>
        <Text style={styles.ScheduleText}>VIP Entry 4:30am-4:30pm</Text>
        <Text style={styles.ScheduleText}>Regular Entry Starting At 9am-4:30pm</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.Description}>
          {'\t'}Vintage treasure hunters and bargain seekers flock to the legendary Rose Bowl
          Flea Market. Held the second Sunday of every month. Experience over 2,500 vendors
          full of antiques, vintage clothing, local art, and specialty products. The legendary
          Rose Bowl Flea Market is celebrating over 55 years of continued success. The flea
          market attracts 20,000 buyers, including celebrities and interior designers.
          Concession stands are sprinkled throughout the market, offering food and drinks.
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

export default Rosebowl;

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
