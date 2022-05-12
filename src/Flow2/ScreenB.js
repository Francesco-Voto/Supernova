import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useFlowMaster} from '../services/FlowMasterService';

const ScreenB = () => {
  const {endFlow} = useFlowMaster();
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Screen B Flow 2</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          endFlow();
        }}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'orange',
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
export default ScreenB;
