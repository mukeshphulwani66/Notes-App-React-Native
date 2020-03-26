import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/BlogContext'



const ShowScreen = ({route})=>{
    const {id}  =  route.params;
    const{state,dispatch} = useContext(BlogContext)
    const BlogPost  = state.find((post)=>{
        return post.id === id
    })
    return(
        <View>
            <Text>{BlogPost.title}</Text>
        </View>
    )
}


export default ShowScreen