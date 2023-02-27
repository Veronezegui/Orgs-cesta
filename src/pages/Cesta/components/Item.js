import React from 'react'

import { StyleSheet, Image, View, FlatList } from 'react-native'

import Texto from '../../../components/Texto'

export default function Item({item: {nome, imagem}}) {
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={imagem}/>
        <Texto style={estilos.nome} >{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})
