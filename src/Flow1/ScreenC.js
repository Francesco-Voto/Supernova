import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useFlowMaster} from '../services/FlowMasterService';

const ScreenC = () => {
  const {endFlow} = useFlowMaster();
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Screen C Flow 1</Text>
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
    backgroundColor: 'green',
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
export default ScreenC;
