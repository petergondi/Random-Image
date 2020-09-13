import React,  {useState} from 'react'
import useInput from './useInput'

const Form=()=>{
    const [myName, bindmyName,resetmyName] = useInput('')
    const [myCategory, bindmyCategory,resetmyCategory] = useInput('')
    const submitHandler = e=>{
        e.preventDefault()
       if(myCategory){
        resetmyName()
        resetmyCategory()
        localStorage.clear();
        const json = JSON.stringify(myCategory);
        localStorage.setItem("myimage", json);
        window.location.reload();
       }else{
        resetmyName()
        resetmyCategory()
        window.location.reload();
       }  
       
    }
    const Home=e=>{
        localStorage.clear(); 
        window.location.reload();
    }
    return(
<div>

<div className="myform" id="image"> 
<form onSubmit={submitHandler}>
<div className="col-sm-12">
<div className="row">
        <div className="col-sm-3">
            <p>Enter Your Name:</p>
            <input type="text" className="form-control" placeholder="enter your name"  {...bindmyName} />
            </div>
            <div className="col-sm-3">
            <p>Enter Image Category:</p>
            <input type="text" className="form-control" placeholder="enter image category"  {...bindmyCategory} />
            </div>
               <div className="col-sm-3">
               <p>Submit to view image</p>
                <button type="submit" className="btn btn-warning" >
                                Submit</button>
            </div>
            <div className="col-sm-3">
            <p>Back Home</p>
          <button onClick={Home} className="btn btn-info">Home</button>
        </div>
        </div>
        </div>
 </form>

 </div>


</div>

    )

}

export default Form