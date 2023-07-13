import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const variable: string = "variable";

  return (
    <View style={styles.container}>
      <Text>Anyone in here got blackops? now with typescript</Text>
      <TextInputMod/>
      <StatusBar style="auto" />
    </View>
  );
}

const TextInputMod = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.

  // automatically saves text to data in onChangeText?

  return (
      <View
          style={{
            backgroundColor: value,
            borderBottomColor: '#000000',
            borderBottomWidth: 0,
          }}>
        <TextInput
            editable={true}
            multiline={true}
            numberOfLines={30}
            maxLength={2000}
            onChangeText={text => onChangeText(text)}
            placeholder={'Useless Multiline Placeholder'}
            value={value}
            style={{}}
        />
      </View>
  );
};

function SaveToData(inputText: string) {
    // take text and save to data automatically (onChangeText?)
    // localStorage?
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});
