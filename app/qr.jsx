import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function QR() {
    const qrCodeValue = 'https://venmo.com';
    return (
        <View style={styles.container}>
            <QRCode
                value={qrCodeValue}
                size={350} // Adjust size as needed
            />
        </View>
    );
}

export default QR;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
    }
});