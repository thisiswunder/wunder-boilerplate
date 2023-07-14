import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { TamaguiProvider } from 'tamagui';

import { MainStack } from '@/src/routes/MainStack/MainStack';

import config, { appFonts } from './tamagui.config';

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
