import React, { Component } from 'react'
import { Text, View, DynamicColorIOS } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    News,
    Rank,
    Scanner,
    Shop, 
} from '../../components/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

export default class Main extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#D93069"
                inactiveColor="white"
                barStyle={{ backgroundColor: '#020222' }}
                tabBarOptions={{
                    activeTintColor: '#D93069',
                  }}
                >
                <Tab.Screen name="News" 
                            component={News}
                            options = {{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons style={{textAlign:"left"}} name="trackpad" color={color} size={25} />
                                  ),
                                  title:"",
                            }}
                             />
                <Tab.Screen name="Scanner" 
                            component={Scanner}
                            options = {{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons style={{textAlign:"left"}} name="vector-square" color={color} size={25} />
                                  ),
                                  title:"",
                                  
                            }}
                             />
                <Tab.Screen name="Rank" 
                            component={Rank}
                            options = {{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons style={{textAlign:"left"}} name="medal-outline" color={color} size={25} />
                                  ),
                                  title:"",
                                  
                            }}
                             />
                <Tab.Screen name="Shop" 
                            component={Shop}
                            options = {{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons style={{textAlign:"left"}} name="cart" color={color} size={25} />
                                  ),
                                  title:"",
                                  
                            }}
                             />      
            </Tab.Navigator>
        )
    }
}
