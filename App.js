import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Cesta from './src/pages/Cesta';

export default function App() {
    const [fontsLoaded] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    })

    if (!fontsLoaded) {
        <View />
    }
    return (
        <SafeAreaView>
            <StatusBar />
            <Cesta />
        </SafeAreaView>
  );
}
