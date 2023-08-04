import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function App() {

  const topBarText: string = ' Anyone in here got blackops? now with typescript';
  const [text, onChangeText] = React.useState('');
  const backgroundColour: string = '#353935';

  const saveText = async () => {
      try {
          await AsyncStorage.setItem('textToSave', text);
          // console.log(text[text.length - 1]);
      } catch (error) {
          console.log(error);
      }
  }

  const getText = async () => {
      try {
          const prevText = await AsyncStorage.getItem('textToSave');
          onChangeText(prevText);
          // console.log(prevText);
      } catch (error) {
          console.log(error);
      }
  }

  React.useEffect(() => {
      getText();
  }, []);

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
          onChange={saveText}
          onChangeText={text => onChangeText(text)}
          placeholder={'Write here, bighead'}
          placeholderTextColor={'#bbbbbb'}
          textAlignVertical={'top'}
          selectionColor={'#bbee33'}
          value={text}
        />
      </View>
    </View>
  );
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
