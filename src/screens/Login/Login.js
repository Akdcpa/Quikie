import React, { Component } from 'react'
import { Text, View , TextInput ,Image, StyleSheet, Button ,BackHandler } from 'react-native'
import Logo from '../../assets/main.png' 
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }
    

    handleInput = () =>{
        // this.setState({[event.target.name]:[event.target.value]})
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    
    onBackPress = () => {
        return true
    }
    

    render() {
        return (
            <View style={styles.root} >
                <View style={styles.img} >
                    <Image source={Logo} style={{margin:80 , width:80,height:80}} />
                </View>
                <View style={{width:300,marginTop:80}} >
                    <View style={{flexDirection:'row',alignItems:"center"}} >
                        <TextInput  placeholder="EMAIL"  
                                    placeholderTextColor="white"
                                    keyboardType="email-address" 
                                    onChange={this.handleInput}
                                    style={styles.input}
                                    underlineColorAndroid="white"
                                    />
                        <MaterialCommunityIcons style={{marginLeft:-30}} name="check" color="white" size = {23} />
                    </View>
                    <View style={{flexDirection:'row',alignItems:"center"}} >
                        <TextInput  placeholder="PASSWORD" 
                                secureTextEntry
                                placeholderTextColor="white" 
                                onChange={this.handleInput}
                                style={styles.input}
                                underlineColorAndroid="white"
                                />
                        <MaterialCommunityIcons style={{marginLeft:-30}} name="check" color="white" size = {23} />
                    </View>
                    
                    <TouchableOpacity>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:13,marginLeft:4,marginTop:10}} >Forget Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress = {()=>this.props.navigation.navigate("Main")} >
                        <Text style={{fontWeight:"bold",color:"white"}} >Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',bottom:0,position:"absolute",marginBottom:20}} >
                    <Text style={{color:"white"}} >Don't have an account ? </Text>
                    <Text style={{color:"white",fontWeight:"bold"}} >Register</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flexGrow:1,
        alignItems:"center",
        // justifyContent:"space-evenly",
        flexDirection:"column",
        backgroundColor:"#00001F"
    },
    button:{ 
        backgroundColor:"#5098F2",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        height:35,
        marginTop:25
    },
    input:{
        backgroundColor:'transparent',
        color:"white",
        width:"100%"
    },
    img:{
        borderWidth:2,
        borderColor:"#1A97B9",
        borderRadius:120,
        marginTop:40
        // margi
    }
})