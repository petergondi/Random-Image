import React from 'react'
import Image from '../component/Image'
import Form from '../component/Form'

const subject=()=>{
    if(JSON.parse(localStorage.getItem('myimage'))){
    return   <a href="#imageframe"><i className="fa fa-hand-o-down"></i>Image generated for a {JSON.parse(localStorage.getItem('myimage'))}</a>
    }
    return   <a href="#image">Go To Image generator</a>
}

const option=()=>{
    if(JSON.parse(localStorage.getItem('myimage'))){
        return <Image/>
    }
}
const Header=()=>{
    return (<div>
        <div className="fixed-side-navbar">
        <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link" href="#home"><span>Home</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#services"><span>How to Use</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#image"><span>Generate Image</span></a></li>
        </ul>
    </div>

    <div className="parallax-content baner-content" id="home">
        <div className="container">
            <div className="first-content">
                <span><em>Image </em> Generator</span>
                <Form/>
               {option()}
            </div>
        </div>
        </div>
    </div>
    )}
export default Header