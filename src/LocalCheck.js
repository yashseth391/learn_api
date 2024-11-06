import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const App = () => {
    let url = "http://192.168.147.15:3000/users";
    let url2 = "http://192.168.147.15:3000/users";
    const data = {
        name: "Sam",
        age: 34,
        email: "sam@test.com"

    };
    const savedAPIData = async () => {
        let result = await fetch(url2, {
            method: "POST",  //JAISa bhi chaaho method mai post likh sakte hoo 
            headers: {    //yaha pe paas type of data 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.log(result); 11

    }

    return (
        <View>
            <TextInput style={styles.input} placeholder='Enter name' placeholderTextColor={"black"} />
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