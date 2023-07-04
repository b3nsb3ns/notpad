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
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
      <View
          style={{
            backgroundColor: value,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}>
        <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={{padding: 10}}
        />
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
