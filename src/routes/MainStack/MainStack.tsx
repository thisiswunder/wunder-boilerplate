import { createStackNavigator } from '@react-navigation/stack';

import { ListPage } from '@/src/pages/List/List';
import { MainPage } from '@/src/pages/Main/Main';

type MainStackParamList = {
  Main: undefined;
  List: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainPage} />
      <Stack.Screen name="List" component={ListPage} />
    </Stack.Navigator>
  );
};
