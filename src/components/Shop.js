import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import img1 from '../assets/shop1.png'
import img2 from '../assets/shop2.png'
import img3 from '../assets/shop3.png'


export default class Shop extends Component {
    render() {
        return (
            <View style={{backgroundColor:"#00001F" , height:"100%",width:"100%" ,}} >
                <Text style={{color:"white" , fontWeight:"bold" , marginLeft:30}} >SHOPS</Text>
                <ScrollView>
                    <View style={{flexDirection:"row",justifyContent:"center"}} >
                        <View style={{flexDirection:"column"}} >
                            <Image  source={img1} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#B8B8B8",
                                    width:200,
                                    height:220
                            }} />
                            <Image  source={img2} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#F5F5F5",
                                    width:200,
                                    height:250
                            }} />
                            <Image  source={img3} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#F5F5F5",
                                    width:200,
                                    height:240
                            }} />
                        </View>
                        <View>
                            <Image  source={img3} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#B8B8B8",
                                    width:200,
                                    height:269
                            }} />
                            <Image  source={img1} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#F5F5F5",
                                    width:200,
                                    height:230
                            }} />
                            <Image  source={img2} style={{
                                    borderRadius:30,
                                    margin:5,
                                    marginTop:20,
                                    backgroundColor:"#F5F5F5",
                                    width:200,
                                    height:280
                            }} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        width:200,
        borderRadius:30,
        margin:5,
        marginTop:20,
        // height:"100%"
    }
})
