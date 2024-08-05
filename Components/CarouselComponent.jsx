import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const CarouselComponent = () => {
    const carouselRef = useRef(null);
  
    const images = [
      require('/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/IMG_9492.webp'),
      require('/Users/txt.hackathon/Desktop/BackUpPopApp/PopApp/POPAP/assets/image.png'),
      // Add more images here...
    ];
  
    return (
      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          data={images}
          renderItem={({ item }) => (
            <Image source={item} style={styles.carouselImage} />
          )}
          loop
          width={300}
          height={308}
        />
      </View>
    );
  };
  

  
  const Home = () => {
    const [scrollY] = useState(new Animated.Value(0));
  

  
    return (
      <View style={styles.container}>
    
        <CarouselComponent />
   
      </View>
    );
  };
  
  // ...
  
  const styles = StyleSheet.create({
    // ...
    carouselContainer: {
      width: 350,
      height: 100,
      alignItems: 'center',
      flex: 1.5,
      borderRadius: 40,
      overflow: 'hidden',
      top: 10,
    },
    
    carouselImage: {
      height: 308,
      width: 430,
      top: -220,
      resizeMode: 'cover',
      borderRadius: 40,
    },
    // ...
  });
  
  // ...