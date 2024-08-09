import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking, ScrollView, Animated, Pressable} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router'

const AppMark = require('../../assets/CustomMarker.png');

// Function to handle opening the map app with the address
const openMap = (address) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}';
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};

const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));

  // Function to handle scroll event
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.044727,
          longitude: -118.249283,
          latitudeDelta: 0.2,
          longitudeDelta: 0.03,
        }}
      >
        <Marker coordinate={{ latitude: 34.088119, longitude: -118.275494 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>SilverLake FleaMarket</Text>
              <Text style={styles.calloutDescription}>
                Silverlake Flea voted best Indie Flea Market in Los Angeles by the LA Weekly. Shop the best Handmade, Vintage, Home Decor, Repurposed Furniture, Collectibles, DIY, Crafts, Etsy Makers, and find the best Food Trucks in Los Angeles.
              </Text>
              <TouchableOpacity onPress={() => openMap('1911 Sunset Blvd, Los Angeles, CA 90026-3222')}>
                <Text style={styles.calloutAddress}>1911 Sunset Blvd, Los Angeles, CA 90026-3222</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.1598, longitude: -118.1667 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Rosebowl FleaMarket</Text>
              <Text style={styles.calloutDescription}>
                Vintage treasure hunters and bargain seekers flock to the legendary Rose Bowl Flea Market. Held the second Sunday of every month. Experience over 2,500 vendors full of antiques, vintage clothing, local art, and specialty products. The legendary Rose Bowl Flea Market is celebrating over 55 years of continued success. The flea market attracts 20,000 buyers, including celebrities and interior designers. Concession stands are sprinkled throughout the market, offering food and drinks.
              </Text>
              <TouchableOpacity onPress={() => openMap('1001 Rose Bowl Dr, Pasadena, US')}>
                <Text style={styles.calloutAddress}>1001 Rose Bowl Dr, Pasadena, US</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.0024, longitude: -118.2403 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Alameda SwapMeet</Text>
              <Text style={styles.calloutDescription}>
                The Alameda Swap Meet is an iconic shopping destination known for its diverse selection of goods from over 800 vendors. Nestled amidst the vibrant culture of LA, this market offers an extensive array of products, including clothing, footwear, accessories, furniture, home decor, electronics, toys, collectibles, and even food.
              </Text>
              <TouchableOpacity onPress={() => openMap('4501 S Alameda St, Los Angeles')}>
                <Text style={styles.calloutAddress}>4501 S Alameda St, Los Angeles</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 33.97412, longitude: -118.14667 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Open Air Market</Text>
              <Text style={styles.calloutDescription}>
                Open Air Swapmeet with primarily Hispanic culture, having good products and prices located between the city of Commerce, CA and Bell Gardens, CA.
              </Text>
              <TouchableOpacity onPress={() => openMap('6360 Garfield Ave Bell Gardens CA')}>
                <Text style={styles.calloutAddress}>6360 Garfield Ave, Bell Gardens, CA, United States</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.065570, longitude: -118.247460 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Los Feliz Flea/Vintage Land</Text>
              <Text style={styles.calloutDescription}>
                The Los Feliz Flea has relocated! Vintage Land is LA's only rooftop flea market, situated on the border of DTLA and Echo Park. With over 200 sellers, they've got everything you could possibly dream of as a vintage collector you have to see it for yourself. Theres no better venue in town with tons of free garage parking, a full bar, fantastic music, and friendly people and pets
              </Text>
              <TouchableOpacity onPress={() => openMap('1030 Alpine St. Los Angeles, CA 90012')}>
                <Text style={styles.calloutAddress}>1030 Alpine St Los Angeles, CA 90012</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.081970, longitude: -118.359910 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Melrose Trading Post</Text>
              <Text style={styles.calloutDescription}>
                If you're looking for the trendiest vintage pieces to add to your wardrobe, Melrose Trading Post is definitely the place to make your next stop. Melrose Trading Post is highly curated, with lots of different independent designers setting up shop each Sunday. Pop by to browse, or to check out the street style of attendees this is trend hunting at its finest.
              </Text>
              <TouchableOpacity onPress={() => openMap('7850 Melrose Ave Los Angeles, CA 90046')}>
                <Text style={styles.calloutAddress}>7850 Melrose Ave Los Angeles, CA 90046</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
 <Marker coordinate={{ latitude: 34.088119, longitude: -118.275494 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>SilverLake FleaMarket</Text>
              <Text style={styles.calloutDescription}>
                Silverlake Flea voted best Indie Flea Market in Los Angeles by the LA Weekly. Shop the best Handmade, Vintage, Home Decor, Repurposed Furniture, Collectibles, DIY, Crafts, Etsy Makers, and find the best Food Trucks in Los Angeles.
              </Text>
              <TouchableOpacity onPress={() => openMap('1911 Sunset Blvd, Los Angeles, CA 90026-3222')}>
                <Text style={styles.calloutAddress}>1911 Sunset Blvd, Los Angeles, CA 90026-3222</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.1598, longitude: -118.1667 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Rosebowl FleaMarket</Text>
              <Text style={styles.calloutDescription}>
                Vintage treasure hunters and bargain seekers flock to the legendary Rose Bowl Flea Market. Held the second Sunday of every month. Experience over 2,500 vendors full of antiques, vintage clothing, local art, and specialty products. The legendary Rose Bowl Flea Market is celebrating over 55 years of continued success. The flea market attracts 20,000 buyers, including celebrities and interior designers. Concession stands are sprinkled throughout the market, offering food and drinks.
              </Text>
              <TouchableOpacity onPress={() => openMap('1001 Rose Bowl Dr, Pasadena, US')}>
                <Text style={styles.calloutAddress}>1001 Rose Bowl Dr, Pasadena, US</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.0024, longitude: -118.2403 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Alameda SwapMeet</Text>
              <Text style={styles.calloutDescription}>
                The Alameda Swap Meet is an iconic shopping destination known for its diverse selection of goods from over 800 vendors. Nestled amidst the vibrant culture of LA, this market offers an extensive array of products, including clothing, footwear, accessories, furniture, home decor, electronics, toys, collectibles, and even food.
              </Text>
              <TouchableOpacity onPress={() => openMap('4501 S Alameda St, Los Angeles')}>
                <Text style={styles.calloutAddress}>4501 S Alameda St, Los Angeles</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 33.97412, longitude: -118.14667 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Open Air Market</Text>
              <Text style={styles.calloutDescription}>
                Open Air Swapmeet with primarily Hispanic culture, having good products and prices located between the city of Commerce, CA and Bell Gardens, CA.
              </Text>
              <TouchableOpacity onPress={() => openMap('6360 Garfield Ave Bell Gardens CA')}>
                <Text style={styles.calloutAddress}>6360 Garfield Ave, Bell Gardens, CA, United States</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.065570, longitude: -118.247460 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Los Feliz Flea/Vintage Land</Text>
              <Text style={styles.calloutDescription}>
                The Los Feliz Flea has relocated! Vintage Land is LA's only rooftop flea market, situated on the border of DTLA and Echo Park. With over 200 sellers, they've got everything you could possibly dream of as a vintage collector you have to see it for yourself. Theres no better venue in town with tons of free garage parking, a full bar, fantastic music, and friendly people and pets
              </Text>
              <TouchableOpacity onPress={() => openMap('1030 Alpine St. Los Angeles, CA 90012')}>
                <Text style={styles.calloutAddress}>1030 Alpine St Los Angeles, CA 90012</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={{ latitude: 34.081970, longitude: -118.359910 }}>
          <Image source={AppMark} style={styles.customMarker} />
          <Callout>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutTitle}>Melrose Trading Post</Text>
              <Text style={styles.calloutDescription}>
                If you're looking for the trendiest vintage pieces to add to your wardrobe, Melrose Trading Post is definitely the place to make your next stop. Melrose Trading Post is highly curated, with lots of different independent designers setting up shop each Sunday. Pop by to browse, or to check out the street style of attendees this is trend hunting at its finest.
              </Text>
              <TouchableOpacity onPress={() => openMap('7850 Melrose Ave Los Angeles, CA 90046')}>
                <Text style={styles.calloutAddress}>7850 Melrose Ave Los Angeles, CA 90046</Text>
              </TouchableOpacity>
            </View>
          </Callout>
        </Marker>

      </MapView>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust the throttle for smoother scrolling
      >
        <Image
          source={require('../../assets/Rectangle 55.png')}
          style={styles.rectangle}
        />
        <Pressable onPress={() => router.push('/Buisnesses/SilverLake')}>
        <Image 
          source={require('../../assets/IMG_9492.webp')}
          style={styles.SilverLake}
        />
        </Pressable>
        <Pressable onPress={() => router.push('/Buisnesses/Rosebowl')}>
          <Image source={require('../../assets/pexels-photo-10074785.webp')}
          style={styles.Rosebowl}/>
        </Pressable>
        <Pressable onPress={() => router.push('/Buisnesses/Alameda')}>
          <Image source={require('../../assets/o.jpg')}
           style={styles.Alameda}/>

        </Pressable>
        <Pressable onPress={() => router.push('/Buisnesses/Melrose')}>
        <Image source={require('../../assets/melrose.webp')}
        style={styles.Melrose}/>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484F4C',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
    position: 'absolute',
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContent: {
    alignItems: 'center',
  },
  rectangle: {
    borderRadius: 20,
    width: 395,
    height: 1000,
  },
  customMarker: {
    width: 30, // Adjust width to desired size
    height: 30, // Adjust height to desired size
  },
  calloutContainer: {
    width: 200, // Increased width for better readability
    padding: 10,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 14, // Adjust font size as needed
  },
  calloutDescription: {
    fontSize: 12,
  },
  calloutAddress: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'blue',
  },
  SilverLake: {
    width: 350,
    height: 110,
    marginTop: -200, // Adjust as needed
    borderRadius: 20,
    top: -720,
    right: 0,
  },
  Rosebowl: {
    width: 350,
    height: 110,
    marginTop: -200, // Adjust as needed
    borderRadius: 20,
    top: -590,
    right: 0,
  },
    Alameda: {
    width: 350,
    height: 110,
    marginTop: -200, // Adjust as needed
    borderRadius: 20,
    top: -460,
    right: 0,
  },
  Melrose: {
    width: 350,
    height: 110,
    marginTop: -200, // Adjust as needed
    borderRadius: 20,
    top: -330,
    right: 0,
  },
});

export default Home;