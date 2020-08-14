import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'

import Carousel from 'react-native-snap-carousel';
 
export default class News extends Component {

    constructor(props){
        super(props)

        this.state = {
            entries:[
                {
                    id:0,
                    image:require('../assets/shoe1.png'),
                    name:"Lorem",
                    desc:"This is main function"
                },
                {
                    id:1,
                    image:require('../assets/shoe2.png'),
                    name:"Lorem",
                    desc:"This is main function"
                },
                {
                    id:2,
                    image:require('../assets/shoq.png'),
                    name:"Lorem",
                    desc:"This is main function"
                },
            ]
        }

    }
 
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} /> 
                <View style={{marginLeft:15 , marginBottom:20}} >
                    <Text style={{color:"white" , fontWeight:"bold" , fontSize:18 , margin:5}}  >{item.name}</Text>
                    <Text style={{color:"white", margin:5 }} >{item.desc}</Text>
                </View>
            </View>
        );
    }
 
    render () {
        return ( 
            <View style={styles.root} >
                <Text style={{color:"white" , fontWeight:"bold"  ,marginLeft:20 , marginBottom:20}} >NEWS</Text>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={400}
                    itemWidth={290}
                /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#020222",
        height:"100%"
    },
    slide:{
        backgroundColor:"#171732",
        borderRadius:20,
        alignItems:"flex-start",
        justifyContent:"center",
    },
    title:{

    },
    image:{
        width:290,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:430
    }
})