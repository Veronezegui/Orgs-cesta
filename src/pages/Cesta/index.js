import React from 'react'
import { Image, View, StyleSheet, Dimensions } from 'react-native'

import  Texto  from '../../components/Texto'
import  Topo  from './components/Topo'


import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
	return <>
        <Topo />
        <View style={estilos.container}>
            <Texto style={estilos.nomeCesta}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados
             cuidadosamente da fazenda 
             direto para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$40,00</Texto>
        </View>
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
    },
    nomeCesta: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },  
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})
