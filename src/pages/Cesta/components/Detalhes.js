import React from "react";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Texto  from '../../../components/Texto'
import Botao from "./Botao";

import logo from '../../../../assets/logo.png'

export default function Detalhes({nome, nomeFazenda, descricao, preco}) {
    return <>
        <Texto style={estilos.nomeCesta}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <Botao title="Comprar" style={estilos.botao} />
    </>
}

const estilos = StyleSheet.create({
    nomeCesta: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
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
    },
    botao: {
        marginTop: 16,
    },

})
