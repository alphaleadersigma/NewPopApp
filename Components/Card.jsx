import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({uri, name}) => {
    return (
        <View style={styles.container}>
            <Image source={uri} style={styles.image}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4f4f4f',
        width: 180,
        height: 180,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        padding: 5,
        margin: 10
    },
    image: {
        width: 170,
        height: 120,
        borderRadius: 4,
    },
    textContainer: {
        width: 180,
        alignItems: 'left',
        marginLeft: 10,
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10,
    },
});