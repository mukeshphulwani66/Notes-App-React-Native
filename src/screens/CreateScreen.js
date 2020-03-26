import React,{useContext,useState} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context/BlogContext'



const CreateScreen = ({route,navigation})=>{
    const[title,setTitle] = useState("")
    const[content,setContent] = useState("")
    const {state,dispatch} = useContext(BlogContext)
    return(
        <View style={{margin:3}}>
            <Text style={{fontSize:22}}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={{fontSize:22}}>Enter Context</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button
             title="Add blog post"
             onPress={()=>{
                 dispatch({type:"ADD_POST",payload:{title,content}})
                 navigation.goBack()
                }}
             />
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8
    }
})

export default CreateScreen