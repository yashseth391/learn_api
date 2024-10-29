import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(undefined);
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
            ? <FlatList data={data}
              renderItem={({ item }) =>

                <View>
                  <Text style={{ color: "red" }}>{item.id}</Text>
                </View>
              }

            />
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
