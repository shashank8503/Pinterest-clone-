import React from 'react'
import './Image.css'


function Images(props) {
    let {urls} = props;
    return (
        <div className="images">
            <div className="con1">
                <img className="img1" src={urls?.regular} alt="pin"/>
                
                
                
                
                

            </div>

        </div>
    )
}

export default Images
