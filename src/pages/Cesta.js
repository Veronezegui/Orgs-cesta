import React from 'react'
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native'

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
	return <>
		<Image source={topo} style={estilos.topo}/>
        <Text style={estilos.title} >Detalhes da cesta</Text>
	</>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        position: "absolute",
        width: "100%",
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        padding: 16,
        lineHeight: 26
    }
})
