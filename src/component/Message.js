import React from 'react'

const Message=(props)=>{
    let message
    if(props.status=="1"){
        message=(<div className="imageframe"><h4 style={{color:"white"}}>Loading your image please wait......</h4></div>)
    }else{
        message=(<h3 style={{color:"red"}}>Please pay your client for the site to work!!</h3>)
    }
    return (
        message
    )}
export default Message