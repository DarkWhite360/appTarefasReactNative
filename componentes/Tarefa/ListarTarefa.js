import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function ListarTarefa({ route }) {

    const itemRota = route.params;

    const [item, setItem] = useState(itemRota.item);

    return (
        <View style={estilo.container}>

            {/* Cabeçalho */}
            <View style={estilo.topo}>
                <Text style={estilo.textoTopo}>
                    Detalhes da Tarefa
                </Text>
            </View>

            {/* Conteúdo */}
            <ScrollView contentContainerStyle={estilo.conteudo}>

                <View style={estilo.itemLista}>

                    <Text style={estilo.numero}>
                        Tarefa #{item.id}
                    </Text>

                    <Text style={estilo.titulo}>
                        {item.titulo}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Descrição
                    </Text>

                    <Text style={estilo.descricao}>
                        {item.descricao}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Responsável
                    </Text>

                    <Text style={estilo.responsavel}>
                        {item.responsavel?.nome || "Não informado"}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Status
                    </Text>

                    <Text style={estilo.status}>
                        {item.status}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Data de criação
                    </Text>

                    <Text style={estilo.data}>
                        {item.data_criacao}
                    </Text>

                    <Text style={estilo.label}>
                        Última atualização
                    </Text>

                    <Text style={estilo.data}>
                        {item.data_atualizacao}
                    </Text>

                </View>

            </ScrollView>

        </View>
    );
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
    },

    topo: {
        width: '100%',
        height: 80,
        backgroundColor: '#2563eb',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },

    textoTopo: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },

    conteudo: {
        flexGrow: 1,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
    },

    itemLista: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 18,

        borderWidth: 1,
        borderColor: '#e0e0e0',

        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    numero: {
        fontSize: 13,
        color: '#777777',
        fontWeight: '600',
        marginBottom: 8,
    },

    titulo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#222222',
        marginBottom: 12,
    },

    label: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#777777',
        marginBottom: 5,
        marginTop: 5,
    },

    descricao: {
        fontSize: 15,
        color: '#444444',
        lineHeight: 22,
    },

    responsavel: {
        fontSize: 15,
        color: '#555555',
        fontWeight: '600',
    },

    status: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2563eb',
    },

    data: {
        fontSize: 13,
        color: '#555555',
        marginBottom: 8,
    },

    divisor: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 12,
    },

});

export default ListarTarefa;
