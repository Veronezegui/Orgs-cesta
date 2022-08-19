import React from 'react'

import {Image, StyleSheet, Dimensions} from 'react-native'

import Texto from '../../../components/Texto'

import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.title}>{titulo}</Texto>
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
