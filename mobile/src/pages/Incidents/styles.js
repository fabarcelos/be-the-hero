import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

export default StyleSheet.create({
container: {
    flex:1,
    paddingHorizontal: 24
},
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20,

    },
    hearderText: {
        fontSize:15,
        color: '#737380',
    },
    hearderTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    
    desciption: {
        fontSize: 16,
        lineHeight: 24,
        color:'#737380'
    },

    incidentList:{
        marginTop: 32,
    },
    
    incident:{
        padding: 24,
        borderRadius:8,
        backgroundColor: '#FFF',
        marginBottom:16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 9,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});