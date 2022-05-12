import {useNavigation} from '@react-navigation/native';

export const useResetStack = screenName => {
  const {reset} = useNavigation();

  return {
    resetTo: (...args) => {
      const routes = Array.isArray(args[0]) ? args[0] : [args[0]];
      const params =
        (args[1] && (Array.isArray(args[1]) ? args[1] : [args[1]])) ||
        undefined;

      reset({
        index: routes.length - 1,
        routes: routes.map((name, index) => ({
          name,
          params: (params && params[index]) || undefined,
        })),
      });
    },
  };
};
