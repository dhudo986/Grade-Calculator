// Was uncertain how to split the components between Courses and Calculate
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Input sanitizer from Add-Calculator in Course Content
const inputSanitizer = (text, setter) => {
  if (text.length === 0 || Number.isNaN(text)) {
    setter(0);
    return 0;
  }
  return parseFloat(text);
};

const Courses = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
        }}
      >
        Grade Calculator
      </Text>
      <Text>Course 1</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: 130,
          marginBottom: 5,
          paddingLeft: 5,
          borderRadius: 5,
        }}
        value={num1.toString()}
        onChangeText={
          (text) => {
            setNum1(text);
          }
        }
      />
      <Text>Course 3</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: 130,
          marginBottom: 5,
          paddingLeft: 5,
          borderRadius: 5,
        }}
        value={num2.toString()}
        onChangeText={
          (text) => {
            setNum2(text);
          }
        }
      />
      <Text>Course 3</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: 130,
          marginBottom: 5,
          paddingLeft: 5,
          borderRadius: 5,
        }}
        value={num3.toString()}
        onChangeText={
          (text) => {
            setNum3(text);
          }
        }
      />
      <Button
        onPress={() => {
          setAverage((inputSanitizer(num1, setNum1)
          + inputSanitizer(num2, setNum2)
          + inputSanitizer(num3, setNum3)) / 3);
        }}
        title="Average"
      />
      <Text style={{ padding: 20 }}>
        Your average is:
        {' '}
        {+average.toFixed(2)}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Courses />
    </View>
  );
}
