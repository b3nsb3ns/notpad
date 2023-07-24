import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const topBarText: string = ' Anyone in here got blackops? now with typescript';
  const [value, onChangeText] = React.useState('');
  const backgroundColour: string = '#353935';

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
          value={value}
        />
      </View>
    </View>
  );
}

function SaveToData(inputText: string) {
    // take text and save to data automatically (onChangeText?)
    // localStorage?
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
