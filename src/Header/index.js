import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import EstiloHeader from './style'
import style from './style';

export default function Header() {
    return (
        <View style={EstiloHeader.header}>
            
            <TouchableOpacity>

            <Image 
            source={require("../img/logo.png")} 
            style={EstiloHeader.logo}
            />

            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                 source={require("../img/send.png")}
                 style={EstiloHeader.send}
                />


            </TouchableOpacity>
           
                
        </View>
    );
}
