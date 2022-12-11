import React,{useContext} from 'react';
import {StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import {NotesContext} from '../context/NotesContext';
import {AntDesign} from '@expo/vector-icons'

const ListNotesScreen = ({navigation}) => {
    const {state,dispatch} = useContext(NotesContext)
    return (
        <View style={{flex:1}}>
            <View style={{alignItems:"center"}}>
                <TouchableOpacity
                style={{
                    marginVertical:10,
                    backgroundColor:"blue",
                    width:60,
                    height:60,
                    borderRadius:30,
                    alignItems:"center",
                    justifyContent:"center"
                }}

                onPress={() => navigation.navigate("create")}
                >
                    <AntDesign name="plus" size={30} color="white" />
                </TouchableOpacity>

            </View>
            
            <FlatList 
            data={state}
            keyExtractor={item => item.title}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity
                    onPress={() => navigation.navigate("show",{id:item.id})}
                    >
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            marginHorizontal:10,
                            marginBottom:5,
                            padding:10,
                            backgroundColor:"white",
                            elevation:4
                        }}>
                            <Text style={{fontSize:22}}>{item.title}</Text>
                            <AntDesign name="delete" size={24} 
                            onPress={() => dispatch({type:"REMOVE", payload:item.id})}
                            />
                        </View>

                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

export default ListNotesScreen