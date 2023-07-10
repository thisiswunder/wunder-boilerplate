import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from '@/src/routes/MainStack/MainStack';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font';
import config, { appFonts } from './tamagui.config';

import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(appFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer onReady={onLayoutRootView}>
        <StatusBar style="auto" />
        <MainStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}
