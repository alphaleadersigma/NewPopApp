import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtcontainer}>My name is donovan</Text>
    </View>
 
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    height: 700
  },


  txtcontainer: {
    color:'black',
  }

  
})

