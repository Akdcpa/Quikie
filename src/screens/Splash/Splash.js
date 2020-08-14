import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native' 
import Logo from '../../assets/main.png'

export default class Splash extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Login');
        } , 3000)
    }

    render() {
        return (
            <View style={styles.root} > 
                <View style={styles.img} >
                    <Image source={Logo} style={{margin:80 , width:80,height:80}} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flexGrow:1 ,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#00001F"
    },
    img:{
        borderWidth:2,
        borderColor:"#1A97B9",
        borderRadius:120,
        marginTop:40
        // margi
    }
})
