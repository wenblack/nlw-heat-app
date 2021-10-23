import React from 'react';
import { Home } from './src/pages/Home';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontesLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontesLoaded) {
    return <AppLoading />
  }


  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}