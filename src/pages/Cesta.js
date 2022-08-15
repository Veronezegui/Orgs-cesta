import React from 'react'
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native'

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
	return <>
		<Image source={topo} style={estilos.topo}/>
        <Text style={estilos.title}>Detalhes da cesta</Text>
        <View style={estilos.container}>
            <Text style={estilos.nomeCesta}>Cesta de Verduras</Text>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados
             cuidadosamente da fazenda 
             direto para sua cozinha</Text>
            <Text style={estilos.preco}>R$40,00</Text>
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
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,

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
