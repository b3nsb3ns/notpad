import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const topBarText: string = ' Anyone in here got blackops? now with typescript';
  const [text, onChangeText] = React.useState('');
  const backgroundColour: string = '#353935';

  // if (typeof window !== 'undefined') {
  //     // Perform localStorage action
  //     const item = localStorage.setItem("value", JSON.stringify(text));
  // }

  // useEffect(() => {
  //     // storing input name
  //     const item = localStorage.setItem("value", JSON.stringify(text));
  // }, [text]);

  // localStorage.setItem('savedText', text);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{
          flex: 1,
          backgroundColor: '#bbee33',
      }}>
        <Text style={styles.baseText}>
            {'\n'}
            {'\n'}
            {topBarText}
        </Text>
      </View>

      <View style={{
          flex: 11,
          backgroundColor: backgroundColour,
          borderBottomColor: '#60966f',
          borderBottomWidth: 5,
      }}>
        <TextInput
          style={{
              margin: 12,
              color: '#f1f1f1',
          }}
          editable={true}
          multiline={true}
          numberOfLines={51}
          maxLength={2000}
          onChangeText={text => onChangeText(text)}
          placeholder={'Write here, bighead'}
          placeholderTextColor={'#bbbbbb'}
          textAlignVertical={'top'}
          value={text}
        />
      </View>
    </View>
  );
}

function SaveToData(inputText: string) {
    // take text and save to data automatically (onChangeText?)
    // localStorage?
    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  baseText: {
    fontSize: 18,
  },
});
