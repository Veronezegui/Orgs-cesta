import React from 'react'
import {View, StyleSheet, ScrollView, FlatList } from 'react-native'

import  Topo  from './components/Topo'
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Texto from '../../components/Texto';

export default function Cesta({topo, detalhes, itens}) {
	return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View style={estilos.container}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.title}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />       
	</>
}


const estilos = StyleSheet.create({

    container: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        marginTop: 32,
        fontWeight: "bold",
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        color: "#464646",
    },
    
})
