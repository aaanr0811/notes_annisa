import React,{useState,useContext} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import {NotesContext} from '../context/NotesContext'

const CreateNoteScreen = ({navigation}) => {

    const {state,dispatch} = useContext(NotesContext)
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    return (
        <View style={{flex:1, margin:8}}>
            <Text style={{fontSize:22}}>Enter Title</Text>
            <TextInput 
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={style.input}
            />
            <Text style={{fontSize:22}}>Enter Content</Text>
            <TextInput 
            value={content}
            onChangeText={(text) => setContent(text)}
            style={style.input}
            numberOfLines={3}
            multiline={true}
            />
            <TouchableOpacity
            style={{
                marginTop:30,
                backgroundColor:"blue",
                marginHorizontal:30,
                padding:12,
                borderRadius:10
            }}
            onPress={() => {
                dispatch({type:"ADD",payload:{title,content}})
                navigation.goBack()
            }}
            >
                <Text style={{
                    fontSize:22,
                    color:"white",
                    textAlign:"center",
                }}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8
    }
})

export default CreateNoteScreen