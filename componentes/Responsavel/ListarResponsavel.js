
import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function ListarResponsavel({ route }) {

    const itemRota = route.params;

    const [item, setItem] = useState(itemRota.item);

    return (
        <View style={estilo.container}>

            {/* Cabeçalho */}
            <View style={estilo.topo}>
                <Text style={estilo.textoTopo}>
                    Detalhes do Responsável
                </Text>
            </View>

            {/* Conteúdo */}
            <ScrollView contentContainerStyle={estilo.conteudo}>

                <View style={estilo.itemLista}>

                    <Text style={estilo.numero}>
                        Responsável #{item.id}
                    </Text>

                    <Text style={estilo.titulo}>
                        {item.nome}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        E-mail
                    </Text>

                    <Text style={estilo.responsavel}>
                        {item.email || "Não informado"}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Telefone
                    </Text>

                    <Text style={estilo.responsavel}>
                        {item.telefone || "Não informado"}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Cargo
                    </Text>

                    <Text style={estilo.responsavel}>
                        {item.cargo || "Não informado"}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Status
                    </Text>

                    <Text style={estilo.status}>
                        {item.status || "Não informado"}
                    </Text>

                    <View style={estilo.divisor} />

                    <Text style={estilo.label}>
                        Departamento
                    </Text>

                    <Text style={estilo.responsavel}>
                        {item.departamento || "Não informado"}
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

    responsavel: {
        fontSize: 15,
        color: '#555555',
        fontWeight: '500',
    },

    status: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2563eb',
    },

    divisor: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 12,
    },

});

export default ListarResponsavel;
