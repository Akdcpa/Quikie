import React, { Component } from 'react'
import { Text, View , StyleSheet , Image, Switch } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    {
      id:1,
      name: 'Peter',
      image:require('../assets/Nathan.png'),
      logo:require('../assets/main.png'),
      star:2020
    }, 
    {
      id:2,
      name: 'Carl',
      image:require('../assets/Carl.png'),
      logo:require('../assets/main.png'),
      star:2020
    },
    {
      id:3,
      name: 'Nathan',
      image:require('../assets/Nathan.png'),
      logo:require('../assets/main.png'),
      star:2020
    },
    {
      id:4,
      name: 'Jade',
      image:require('../assets/Jade.png'),
      logo:require('../assets/main.png'),
      star:2020
    },
    {
        id:5,
        name: 'Hendry ',
        image:require('../assets/man.png'),
        logo:require('../assets/main.png'),
        star:2020
      },
      
  ];

const Item = ({id , name , image , logo , star }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
      <View style={{flexDirection:"row" , marginLeft:-40}} >
        <Image style={styles.image} source={image} />
        <View style={{justifyContent:"space-between" , marginLeft:10}} >
            <Text style={styles.title}>{name}</Text>
            <View style={{flexDirection:"row" , alignItems:"center"}} >
                <MaterialCommunityIcons name="star" color="white" size={15} />
                <Text style={{fontSize:12 , color:"white" , marginLeft:3}}>{star}</Text>
            </View>
        </View>
      </View>
      <Image style={styles.image} source={logo} />
    </View>
);
  

export default class Rank extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             enable:false
        }
    }
    
    toggleSwitch = () => {
        this.setState({enable:!this.state.enable});
    }
    render() {

        const renderItem = ({ item }) => (
            <Item name={item.name} id={item.id} image={item.image} logo={item.logo} star={item.star}  />
          );

        return (
            <View style={{backgroundColor:"#00001F" , height:"100%"}} >
                <View style={{flexDirection:'row' , justifyContent: 'space-between',}} >
                    <Text style={{color:'white' , fontWeight:"bold"}} >RANKING</Text>
                    <View style={{flexDirection:"row", alignItems:"center",marginRight:8}} > 
                        <Switch
                            trackColor={{ false:'#2A2656', true: "#81b0ff" }}
                            thumbColor={this.state.enable ? "#61E4FF" : "#61E4FF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.enable}
                        /> 
                        <Text style={{color:"white"}} >Yearly</Text>
                    </View>
                </View>
                <ScrollView>
                    <FlatList 
                        data = {DATA}
                        renderItem={renderItem}
                         />
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: { 
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
      color:"white"
    },
    image:{
        width:50,
        height:50,
        borderRadius:25
    }
  });
  