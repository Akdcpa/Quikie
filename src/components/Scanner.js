import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import scan from '../assets/scanner.png'

export default class Scanner extends Component {
    render() {
        return (
            <View style={{backgroundColor:"#00001F" , height:"100%"}} >
                <Text style={{color:"white" , fontWeight:'bold' , marginTop:20}} > DIGITAL MEMBER CARD </Text>
                <View style={{backgroundColor:"#00001F" , height:"100%" , alignItems:'center' , justifyContent: 'center',}} >
                    <Image style={{borderWidth:6 , borderColor:"gray" , borderRadius:10}} source={scan} />
                </View>
            </View>
        )
    }
}
