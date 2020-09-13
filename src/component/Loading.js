import React from 'react'

function renderDots(){
  const result = [];
  for(let i = 0; i < 6; i++){
    result.push(<div key={i} className='clock__dots'/>);
  }
  return result
}
function checkImage(){
  if(JSON.parse(localStorage.getItem('myimage'))){
    return JSON.parse(localStorage.getItem('myimage'))+" Image Loading......"
  }else{
    return "Loading......"
  }
}
const Loading=()=>{
    return (
      <div className='preloader'>
        <div className='preloader__container'>
          <div className='preloader__img-container'>
            <div className='preloader__item'></div>
            <div className='preloader__item preloader__item--mid'></div>
            <div className='preloader__item preloader__item--inner'></div>
            <div className='preloader__clock clock'>
              <i className='clock__center'/>
              {renderDots()}
            </div>
          </div>
    <h3 className="preloader__mesage">{checkImage()}</h3>
        </div>
      </div>
    );
  }


export default Loading