import React, { Component } from 'react'
import { Text, View, StyleSheet , Image ,TouchableOpacity , TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  BottomNavigator,
  Login,
  Main,
  Splash
} from './src/screens/index'
import Modal from 'react-native-modal';
import {
   Profile,
   Edit
} from './src/components/index'

import profile from './src/assets/man.png'
import main from './src/assets/main.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
// import { TouchableOpacity } from 'react-native-gesture-handler'
const Stack = createStackNavigator();
const Prof = createStackNavigator();

class Rounded extends Component{
  render(){
    return(
      <View style={{alignItems:"center"}} >
        <View style={{borderWidth:3,borderColor:"#181835" , borderRadius:60}} >
          <View style={{width:60,height:60,borderRadius:30,backgroundColor:"#181835" , margin:20 ,alignItems: 'center',justifyContent:"center"}} >
            <Text style={{color:"white"}} >{this.props.count}</Text> 
          </View>
        </View>
        <Text style={{color:"white" , width:70,marginTop:8 ,textAlign:"center"}} >{this.props.title}</Text>
      </View>
    )
  }
}


class Head extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       open:false,
       edit:false
    }
  }

  toggleModal = () => {
    this.setState({open: !this.state.open});
  };
  toggleEdit = () => {
    this.setState({edit: !this.state.edit});
  };

  
  render(){
    return(
      <View style={styles.header} > 
      <View>
        <TouchableOpacity style={styles.comp} onPress={this.toggleModal} >
          <Image source={profile} style={styles.img}  />
          <Text style={{color:"white" , marginLeft:5 , fontSize:20}} >DavidW</Text>
        </TouchableOpacity> 
        </View>
        <View style={styles.comp} >
          <View style={{flexDirection:'column' , alignItems:"center" , marginRight:10}} >
            <Text style={{color:"white" , marginLeft:5}} >Points</Text>
            <Text style={{color:"white" , marginLeft:5 , fontSize:20}} >40</Text>
          </View>
          <Image source={main} style={styles.img}  />
        </View>

        <Modal animationType={"fade"} onBackButtonPress={this.toggleModal} backdropOpacity={1} backdropColor="#00001F" style={{backgroundColor:"#00001F"}} isVisible={this.state.open}>
          <View style={{flex: 1}}>
            <View style={{justifyContent:"space-between" , flexDirection:"row" , alignItems:"center"}} >
              <TouchableOpacity onPress={this.toggleModal} >
                <View style={{flexDirection:"row",alignItems: 'center',}}  > 
                    <MaterialCommunityIcons name="arrow-left" color="white" size={30} /> 
                  <Text style={{color:"white" , fontSize:16, marginLeft:4}} >PROFILE</Text>
                </View>
              </TouchableOpacity>
              <Text style={{color:"white" , fontSize:16}} >LOG OUT</Text>
            </View> 
            <View style={{alignItems:"center"}} >
              <View style={{borderWidth:2 , borderColor:"#181835" , borderRadius:70}} >
                <Image source={profile} style={{borderRadius:40 , width:80 , height:80 , margin:30}}  />
              </View>
              <TouchableOpacity onPress={this.toggleEdit} >
                <View style={{flexDirection:"row" , alignItems:"center",marginTop:10}} >
                    <Text style={{color:"white",marginRight:5}} >David Welberg</Text>
                    <MaterialIcons style={{marginLeft:4}} color="white" size={17} name="edit" />
                </View>
              </TouchableOpacity>
              <View style={{flexDirection:"column" , justifyContent:"space-evenly",width:"100%"}} >
                <View style={{flexDirection:"row" , justifyContent:"space-evenly" , marginTop:40}} >
                  <View style={{alignItems:"center"}} >
                  <View style={{borderWidth:3,borderColor:"#181835" , borderRadius:60}} >
                    <View style={{width:60,height:60,borderRadius:30 , margin:20 ,alignItems: 'center',justifyContent:"center"}} > 
                      <Image source={main}  style={{height:40,width:40}} />
                    </View>
                  </View>
                  <Text style={{color:"white" , width:70,marginTop:8 ,textAlign:"center"}} >LEVEL</Text>
                </View>
                  <Rounded title="POINTS" count={40} />
                </View>
                <View style={{flexDirection:"row" , justifyContent:"space-evenly" , marginTop:70}} >
                  <Rounded title="MONTHLY RANKING" count={40} />
                  <Rounded title="YEARLY RANKING" count={40}  />
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <Modal animationType={"fade"} onBackButtonPress={this.toggleEdit} backdropOpacity={1} backdropColor="#00001F" style={{backgroundColor:"#00001F"}} isVisible={this.state.edit}>
          <View style={{flex: 1}}>
            <View style={{justifyContent:"space-between" , flexDirection:"row" , alignItems:"center"}} >
              <View style={{flexDirection:"row",alignItems: 'center',}}  > 
                <TouchableOpacity onPress={this.toggleEdit} >
                  <MaterialCommunityIcons name="close" color="white" size={30} /> 
                  </TouchableOpacity>
                <Text style={{color:"white" , fontSize:16, marginLeft:4}} >EDIT PROFILE</Text>
              </View>
              <TouchableOpacity onPress={this.toggleEdit} >
                  <MaterialCommunityIcons name="check" color="white" size={30} /> 
                  </TouchableOpacity>
            </View> 
            <View style={{alignItems:"center"}} >
              <View style={{flexDirection:"row",alignItems:"center"}} >
                <View style={{borderWidth:2 , borderColor:"#181835" , borderRadius:70}} >
                  <Image source={profile} style={{borderRadius:40 , width:80 , height:80 , margin:30}}  />
                </View> 
                <MaterialCommunityIcons style={{marginLeft:-19}} name="camera-outline" color="white" size={30}  />
              </View>
              <View style={{flexDirection:"column" , justifyContent:"space-evenly",width:"100%",marginTop:20}} >
                <View  style={{flexDirection:'row',width:"100%",justifyContent:"space-between"}} >
                  <TextInput placeholder="FIRST NAME"  
                             placeholderTextColor="white" 
                             style={{width:"48%" , backgroundColor:'transparent',color:"white", }}
                             underlineColorAndroid="white"
                                />
                  <TextInput  placeholder="LAST NAME"  
                              placeholderTextColor="white" 
                              style={{width:"48%" , backgroundColor:'transparent',color:"white", }}
                              underlineColorAndroid="white"
                                />
                </View>
                <TextInput  placeholder="USERNAME"  
                            placeholderTextColor="white" 
                            style={styles.input}
                            underlineColorAndroid="white"
                              />
                <TextInput  placeholder="EMAIL ID"  
                            placeholderTextColor="white" 
                            style={styles.input}
                            underlineColorAndroid="white"
                              />
                <TextInput  placeholder="PHONE NUMBER"  
                            placeholderTextColor="white" 
                            style={styles.input}
                            underlineColorAndroid="white"
                              />
                <TextInput  placeholder="Address"  
                            placeholderTextColor="white" 
                            style={styles.input}
                            underlineColorAndroid="white"
                              />
                <TextInput  placeholder=" "  
                            placeholderTextColor="white" 
                            style={styles.input}
                            underlineColorAndroid="white"
                              />  
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
} 

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" >
          <Stack.Screen name="Splash" 
                        options={{headerShown:false}} 
                        component={Splash} /> 
          <Stack.Screen name="Main" 
                        component={Main} 
                        options={{ 
                          header:()=><Head/>
                        }}
                        />  

          <Stack.Screen name="Login" 
                        options={{headerShown:false}} 
                        component={Login} />    
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    height:93,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#00001F",
    alignItems: 'center',
  },
  img:{
    width:60,
    height:60,
    borderRadius:60/2,
    borderWidth:2,
    // borderRightColor:"blue",
    // borderColor:"white"
  },
  comp:{
    flexDirection:"row",
    alignItems:"center"
  },
  input:{
    backgroundColor:'transparent',
    color:"white", 
    marginTop:30
},
})