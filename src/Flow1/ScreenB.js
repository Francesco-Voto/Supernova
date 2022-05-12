import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScreenB = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Screen A Flow 1</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('ScreenC')}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  pressable: {
    margin: 16,
  },
});
export default ScreenB;
