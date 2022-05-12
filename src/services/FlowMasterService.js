import {useNavigation} from '@react-navigation/native';
import {useResetStack} from '../utils';

function gateKeeper() {
  return {
    askKeys: () => {
      return ['1', '2'];
    },
  };
}
let mainResolve = [];

function keysServiceGenerator(navigation, reset) {
  const launchFlow = flow =>
    new Promise(resolve => {
      mainResolve.push(resolve);
      if (flow === '1') {
        navigation('Flow1');
        return;
      } else if (flow === '2') {
        navigation('Flow2');
        return;
      }
      reset('LaunchScreen');
      return;
    });

  const endFlow = () => {
    const currentResolve = mainResolve.pop();
    currentResolve && currentResolve();
  };
  return {
    launchFlow,
    endFlow,
  };
}

export function useFlowMaster() {
  const {navigate} = useNavigation();
  const {resetTo} = useResetStack();

  const {launchFlow, endFlow} = keysServiceGenerator(navigate, resetTo);
  const {askKeys} = gateKeeper();

  const startFlow = async flow => {
    const flows = askKeys();
    for (flow of flows) {
      await launchFlow(flow);
    }
    resetTo('LaunchScreen');
  };

  return {
    startFlow,
    endFlow,
  };
}
