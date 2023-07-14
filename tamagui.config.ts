import { config } from '@tamagui/config';
import { createTamagui, setupReactNative } from '@tamagui/core'; // or '@tamagui/core'
import { createInterFont } from '@tamagui/font-inter';
import { Text, View } from 'react-native';
// if using only @tamagui/core with `react-native` components
// if using `tamagui` this isn't necessary as it does this setup for you (for most components)
setupReactNative({
  Text,
  View,
});

const defaultFont = createInterFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 15,
    5: 17,
    6: 18,
    7: 20,
    8: 21,
    9: 38,
    10: 44,
    11: 68,
    12: 76,
  },
  lineHeight: {
    1: 15,
    2: 20,
    3: 23,
    4: 25,
    5: 30,
    6: 31,
    7: 35,
    8: 42,
    9: 48,
    10: 56,
    11: 75,
    12: 88,
  },
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: {
    4: 0,
    7: -1,
    9: -2,
    10: -3,
    12: -4,
  },
  face: {
    100: { normal: 'Inter-Thin', italic: 'Inter-ThinItalic' },
    200: { normal: 'Inter-ExtraLight', italic: 'Inter-ExtraLightItalic' },
    300: { normal: 'Inter-Light', italic: 'Inter-LightItalic' },
    400: { normal: 'Inter-Regular', italic: 'Inter-Italic' },
    500: { normal: 'Inter-Medium', italic: 'Inter-MediumItalic' },
    600: { normal: 'Inter-SemiBold', italic: 'Inter-SemiBoldItalic' },
    700: { normal: 'Inter-Bold', italic: 'Inter-BoldItalic' },
    800: { normal: 'Inter-ExtraBold', italic: 'Inter-ExtraBoldItalic' },
    900: { normal: 'Inter-Black', italic: 'Inter-BlackItalic' },
  },
});

const appConfig = createTamagui({
  ...config,
  fonts: {
    // noto: notoFont as any,
    heading: defaultFont,
    body: defaultFont,
    title: defaultFont,
  },
});

export const appFonts = {
  'Inter-Black': require('./assets/fonts/regular/Inter-Black.otf'),
  'Inter-Bold': require('./assets/fonts/regular/Inter-Bold.otf'),
  'Inter-ExtraBold': require('./assets/fonts/regular/Inter-ExtraBold.otf'),
  'Inter-ExtraLight': require('./assets/fonts/regular/Inter-ExtraLight.otf'),
  'Inter-Light': require('./assets/fonts/regular/Inter-Light.otf'),
  'Inter-Medium': require('./assets/fonts/regular/Inter-Medium.otf'),
  'Inter-Regular': require('./assets/fonts/regular/Inter-Regular.otf'),
  'Inter-SemiBold': require('./assets/fonts/regular/Inter-SemiBold.otf'),
  'Inter-Thin': require('./assets/fonts/regular/Inter-Thin.otf'),
  'Inter-BlackItalic': require('./assets/fonts/italic/Inter-BlackItalic.otf'),
  'Inter-BoldItalic': require('./assets/fonts/italic/Inter-BoldItalic.otf'),
  'Inter-ExtraBoldItalic': require('./assets/fonts/italic/Inter-ExtraBoldItalic.otf'),
  'Inter-ExtraLightItalic': require('./assets/fonts/italic/Inter-ExtraLightItalic.otf'),
  'Inter-LightItalic': require('./assets/fonts/italic/Inter-LightItalic.otf'),
  'Inter-MediumItalic': require('./assets/fonts/italic/Inter-MediumItalic.otf'),
  'Inter-Italic': require('./assets/fonts/italic/Inter-Italic.otf'),
  'Inter-SemiBoldItalic': require('./assets/fonts/italic/Inter-SemiBoldItalic.otf'),
  'Inter-ThinItalic': require('./assets/fonts/italic/Inter-ThinItalic.otf'),
};

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}
export default appConfig;
