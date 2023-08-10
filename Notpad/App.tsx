import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function App() {

  const topBarColour: string = '#bbee33'; // top bar stuff
  const topBarText: string = ' Anyone in here got blackops? now with typescript';

  const saveButtonColour: string = '#40e0d0'; // save button stuff
  const unsavedSaveText: string = 'Press here to SAVE';
  const [saveButton, saveButtonPressed] = React.useState(unsavedSaveText);
  const storageKey: string = 'textToSave';

  const backgroundColour: string = '#353935'; // textinput stuff
  const [text, onChangeText] = React.useState('');

  const saveText = async () => {
      try {
          await AsyncStorage.setItem(storageKey, text);
          saveButtonPressed('SAVED');
          // console.log(text[text.length - 1]);
          // console.log(text);
      } catch (error) {
          console.log(error);
      }
  }

  const getText = async () => {
      try {
          // const prevText = await AsyncStorage.getItem('textToSave');
          // onChangeText(prevText);
          // console.log(prevText);
          const prevText = await AsyncStorage.getItem(storageKey);
          if (prevText !== null) {
              onChangeText(prevText);
          }
      } catch (error) {
          console.log(error);
      }
  }

  const setButtonUnsaved = () => {
      saveButtonPressed(unsavedSaveText);
  }

  React.useEffect(() => {
      getText();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{
          flex: 1,
          backgroundColor: topBarColour,
      }}>
        <Text style={styles.baseText}>
            {'\n'}
            {'\n'}
            {topBarText}
        </Text>
      </View>

      <View>
          <Button
              title={saveButton}
              color={saveButtonColour}
              onPress={saveText}
          />
      </View>

      <View style={{
          flex: 11,
          backgroundColor: backgroundColour,
          borderBottomColor: '#a6e3b9',
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
          onChange={setButtonUnsaved}
          onChangeText={inputText => onChangeText(inputText)}
          placeholder={'Write here, bighead'}
          placeholderTextColor={'#bbbbbb'}
          textAlignVertical={'top'}
          selectionColor={topBarColour}
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
