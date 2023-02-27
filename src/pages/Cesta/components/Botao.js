import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import Texto from '../../../components/Texto'

export default function Botao({title, onPress}) {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={onPress}>
            <Texto style={estilos.textoBotao}>{title}</Texto>
        </TouchableOpacity>
    </>
}


const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})
