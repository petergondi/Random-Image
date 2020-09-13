import React from 'react'

const Help=()=>{
    return ( 
    <div className="service-content" id="services">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="left-text">
                        <h4>More About Image Generator</h4>
                        <div className="line-dec"></div>
                        <p>If you're in search of random pictures, you should love all of the random images we've collected in this random picture generator. With over 1000 pictures in the database, you're sure to find some that meet your particular needs. One of the best aspects of this free image tool is that you can determine the exact number of random pictures you want to see at one time. This allows you to digest the photos in the number that best suits your needs 
                            and it can make finding what you want a lot easier. Click on the 
                            <a rel="nofollow" href="#image"> Link</a> to try it out.</p>
                        <ul>
                            <li>- Static Random Image</li>
                            <li>-  Specific Image</li>
                            <li>-  Advanced Usage</li>
                        </ul>
                        <div className="primary-button">
                            <a href="#image">generate</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="service-item">
                                <h4>Enter Your name</h4>
                                <div className="line-dec"></div>
                                <p>Enter your name in the first placeholder</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <h4>Enter the image category </h4>
                                <div className="line-dec"></div>
                                <p>Enter the image category that you want to view in the category placeholder</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <h4>Submit</h4>
                                <div className="line-dec"></div>
                                <p>Submit the information you have input to generate an image of the input category</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <h4>Refresh/generate same category</h4>
                                <div className="line-dec"></div>
                                <p>Click on submit again without any input to generate a new image of similar category as previously entered. or click home button to start a fresh </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    )}
export default Help