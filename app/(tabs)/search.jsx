import { StyleSheet, Text, View,Image, TextInput, Alert, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Rectangle = require('../../assets/Rectangle 72.png')
const Rectangle2 = require('../../assets/Rectangle 49.png')
const Post = () => {
const [title, onChangeTitle] = React.useState('')
const [description, onChangeDescription] = React.useState('')
const [time, onChangeTime] = React.useState('')
const [date, onChangeDate] = React.useState('')
const [location, onChangeLocation] = React.useState('')
const buttonPress = () => {
  Alert.alert("Post Created")
}
     
  
  return (
    <View style={styles.Post}>
       <Image source={Rectangle}
        style={styles.Rectangle}/>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={Text}
          placeholder="Insert Title Here"
          placeholderTextColor="white"
        >
        </TextInput>
      </View>
      <TextInput
        style={styles.input2}
        onChangeText={onChangeTime}
        value={Text}
        placeholder="Time"
        placeholderTextColor="white"
      >
      </TextInput>  
      <TextInput
        style={styles.input3}
        onChangeText={onChangeDate}
        value={Text}
        placeholder="Date"
        placeholderTextColor="white"
      >
      </TextInput>  
      <TextInput
        editable
        multiline
        numberOfLine={5}
        style={styles.input4}
        onChangeText={onChangeDescription}
        value={Text}
        placeholder="Description"
        placeholderTextColor="white"
      >
      </TextInput> 
       <TextInput
        style={styles.input5}
        onChangeText={onChangeLocation}
        value={Text}
        placeholder="Location"
        placeholderTextColor="white">
      </TextInput>  
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Pressable onPress={buttonPress}
          style={styles.button}
        >
          <Text style={styles.textButton}>Create Post</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
   
Post: {
 backgroundColor: '#1C1C1C',
 flex: 1,
},
Rectangle: {
  height: 210,
},

input: {
  height: 50,
  width: 150,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#474747',
  borderRadius: 10,
  padding: 20,
  marginTop:10,
  color: 'white'
},
input2: {
  height: 50,
  backgroundColor: '#474747',
  marginTop: 10,
  color: 'white',
  padding: 10,
  marginRight: 20,
  marginLeft: 20,
  borderRadius: 10,
},
input3: {
  height: 50,
  backgroundColor: '#474747',
  marginTop:10,
  color: 'white',
  padding: 10,
  marginRight: 20,
  marginLeft: 20,
  borderRadius: 10,
},
input4: {
  height: 150,
  backgroundColor: '#474747',
  marginTop: 35,
  color: 'white' ,
  padding: 10,
  marginRight: 20,
  marginLeft: 20,
  borderRadius: 10,
},
input5: {
  height: 50,
  backgroundColor: '#474747',
  marginTop: 30,
  color: 'white',
  padding: 10,
  marginRight: 20,
  marginLeft: 20,
  borderRadius: 10,
},

button: {
  height: 50,
  width: 100,
  backgroundColor: '#474747',
  aligntItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  marginTop: 100,
},
textButton: {
  color: 'white',
  padding: 10,
  fontWeight: 'bold',

}

})
 
