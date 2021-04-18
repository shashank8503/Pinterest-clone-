import React from 'react'
import "./Home.css"
import Images from './Images';



function Home(props) {
    let { pins } = props;
    
    return (
        
        <div className="home">
            <div className="container">
            {pins.map((image, index) => {
                   let {urls} = image;
                    return <Images key={index} urls={urls} />
               })}
                
              
             
                
                
                

            </div>
           
            
            
            
            
            
            
            
            
        </div>
    )
}

export default Home



