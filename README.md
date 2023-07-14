## Installation

Run the following command to create a new project with this boilerplate:

```bash
npx create-react-native-app -t https://github.com/thisiswunder/wunder-boilerplate
```

In order to change app's name, please make necessary changes in `app.json` and `package.json`.

After that, make sure to run following command to generate your `/ios` and `/android` folders:

```bash
yarn prebuild
```

## What's inside

- [Expo SDK](https://github.com/expo/expo) - a set of tools and services built around React Native and native platforms.
- [React Navigation (v6)](https://github.com/react-navigation/react-navigation) - routing and navigation for React Native apps.
- [Tamagui](https://github.com/tamagui/tamagui) - Tamagui lets you share more code between web and native apps while improving, rather than sacrificing, DX, performance, and code maintainability.
- [Reanimated 3](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented.
- [Zustand](https://github.com/pmndrs/zustand) - A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native.
- [Generate React CLI](https://github.com/arminbro/generate-react-cli) - To help speed up productivity in React projects and stop copying, pasting, and renaming files each time you want to create a new component.

## Usefull commands

In this template we are using [Generate React CLI](https://github.com/arminbro/generate-react-cli) to generate new components, pages or stores to kickstart your functions. Templates for these generators are located in `./templates` folder. You can modify them to fit your needs. To use it:

```bash
yarn create:component MyComponent
```

```bash
yarn create:page MyPage
```

```bash
yarn create:store MyStore
```

## Design system

This template is using [Tamagui](https://github.com/tamagui/tamagui) as a design system. It's a set of components that are shared between web and native apps. You can configure it to use your own design system or remove it completely. To get started with Tamagui, please refer to [Tamagui's documentation](https://tamagui.dev/docs/intro/introduction).
