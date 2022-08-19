import React from 'react'
import {View, StyleSheet } from 'react-native'

import  Topo  from './components/Topo'
import Detalhes from './components/Detalhes';

export default function Cesta({topo, detalhes}) {
	return <>
        <Topo {...topo}/>
        <View style={estilos.container}>
            <Detalhes {...detalhes} />
        </View>
	</>
}


const estilos = StyleSheet.create({

    container: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    
})
