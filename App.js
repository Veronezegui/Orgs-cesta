import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Cesta from './src/pages/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
