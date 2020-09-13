import React, { useState, useEffect } from "react";
import axios from 'axios';
import Message from '../component/Message'
const Image=()=>{
   
  const [hasError, setErrors] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [apistatus, setMystatus] = useState({});

  useEffect(() => {
    axios.get("http://covid19.assets.co.ke/api/hidden",{
      headers: {
         authorization: ' xxxxxxxxxx' ,
         'Content-Type': 'application/json'
      } 
   }).then(response => {
      setMystatus(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Message status="1"/>
    
  }
  const mystate=JSON.stringify(apistatus.status);
  const url=apistatus.url;
  const unsplashimg = {
    src: url+JSON.parse(localStorage.getItem('myimage')),
    alt: 'random unsplash image'
  };
  
  const myimage=()=>{
    return (
<div id="imageframe">
          
          <figure>
          <img 
            src = {unsplashimg.src}
            alt = {unsplashimg.alt} 
          />
             <figcaption>Image Generated for :<strong>{JSON.parse(localStorage.getItem('myimage'))}</strong></figcaption>
         </figure>
          </div>
    )

  }
  const checkstatus=()=>{
    if(mystate){
        return myimage()
    }else{
      return (
      <Message status="0"/>
      )
    }
}   

      return (
        checkstatus()
          )
}

export default Image