import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFlowMaster} from './services/FlowMasterService';

const LaunchScreen = () => {
  const {startFlow} = useFlowMaster();

  useEffect(() => {
    const a = setTimeout(() => {
      startFlow();
    }, 2000);
    () => a && clearTimeout(a);
  }, [startFlow]);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>I am the LaunchScreen </Text>
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
});

export default LaunchScreen;
