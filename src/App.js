import React, {Component} from 'react';
import './App.css';
import './loader.scss';
import Form from './component/Form'
import Image from './component/Image'
import Loading from './component/Loading'
import Header from './component/Header'
import Help from './component/Help'
import Footer from './component/Footer'

import  './css/bootstrap.min.css'
import  './css/fontAwesome.css'
// import './css/hero-slider.css'
import './css/templatemo-main.css'
import  './css/owl-carousel.css'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {image: '',  loading: true,apiLoaded:''};

    this.handleChange = this.handleChange.bind(this);
    
     
  }
  handleChange(){
    this.setState({ image: JSON.parse(localStorage.getItem('myimage'))});
   
  }
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
   
    
  }
  componentWillUnmount() {
     clearTimeout(this.isLoading);
  }
  hasLoaded=()=>{
    this.setState({apiLoaded: JSON.parse(localStorage.getItem('mystate'))})
  }
  
  timer = () => setTimeout(()=>{
    this.setState({loading: false})
  }, 2300);
      
  render(){
    console.log(this.state.apiLoaded);
    if(this.state.loading ){
      return <Loading/>
    }else{
     
        return  [<Header/>,<Help/>,<Footer/>]
        
      
    }
  
  }
}

export default App;
