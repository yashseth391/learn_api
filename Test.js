import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState < any > undefined;
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();

    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      {data ? (
        <View>
          {/* <Text>{data.id}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text> */}
          {data.length
            ? data.map(item => (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            ))
            : null}
          <TouchableOpacity onPress={() => console.log(data)}>
            <Text>Log Data</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
