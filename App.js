import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  let url = "http://192.168.147.15:3000/users";
  let url2 = "http://192.168.147.15:3000/users";
  const data = {
    name: "Sam",
    age: 34,
    email: "sam@test.com"

  };
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const savedAPIData = async () => {
    console.log(name);
    console.log(age);
    console.log(email); let url = "http://192.168.147.15:3000/users";
    let result = await fetch(url, {

      method: "POST",  //JAISa bhi chaaho method mai post likh sakte hoo 
      headers: {    //yaha pe paas type of data 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: email, age: age })
    })
    result = await result.json();
    console.log(result);


  }

  return (
    <View>
      <TextInput style={styles.input} placeholder='Enter name' placeholderTextColor={"black"} value={name} onChangeText={(text) => { setName(text) }} />
      <TextInput style={styles.input} placeholder='Enter age' placeholderTextColor={"black"} value={age} onChangeText={(text) => { setAge(text) }} />
      <TextInput style={styles.input} placeholder='Enter email' placeholderTextColor={"black"} value={email} onChangeText={(text) => { setEmail(text) }} />
      <Button title="Save" onPress={() => savedAPIData()} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  input: {

    backgroundColor: "white",
    margin: 10,
    borderBottomColor: "red",
    borderWidth: 2,
  }
})