import React,{useState,useContext} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import {NotesContext} from '../context/NotesContext'
import {Feather} from '@expo/vector-icons'

const ShowNote = ({route,navigation}) => {

    const {id} = route.params
    const {state,dispatch} = useContext(NotesContext)

    const note = state.find((record) => {
        return record.id === id
    })

    return (
        <View style={{flex:1,marginTop:10}}>
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

                onPress={() => navigation.navigate("edit",{id})}
                >
                    <Feather name="edit" size={30} color="white" />
                </TouchableOpacity>

            </View>
            <Text style={styles.mytext}>{note.title}</Text>
            <Text style={styles.mytext}>{note.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mytext:{
        fontSize:22,
        textAlign:"center"
    }
})


export default ShowNote