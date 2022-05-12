import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScreenA = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Screen A Flow 2</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('ScreenB')}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'azure',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(96, 103, 112)',
    fontSize: 16,
  },
  pressable: {
    margin: 16,
  },
});
export default ScreenA;
