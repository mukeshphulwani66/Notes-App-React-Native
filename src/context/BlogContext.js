import React,{useReducer} from 'react'
import {reducer,initalState} from '../reducer/reducer'

export const BlogContext = React.createContext()

export const BlogProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initalState)
    return(
       <BlogContext.Provider value={{state,dispatch}}>
        {children}
    </BlogContext.Provider> 
    ) 
}