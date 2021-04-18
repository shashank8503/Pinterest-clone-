import React, { useState } from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom';
import  './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

  


function Header(props) {
   
    const [input,setInput] = useState("");
    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
        
        

    }
    return (
       
        <div className="header">
            <IconButton>

            <PinLogo>
               <div className="pinButton">
                   < PinterestIcon/>
                </div>

            </PinLogo>
            </IconButton>
            <NavLink to="/homepage" style={{ textDecoration: 'none' }}>
                <div className="hbutton">
                    <div className="htext">
                    Homepage

                    </div>

                </div>
            
            </NavLink>
            <NavLink to="/today">
                <div className="tbutton" style={{ textDecoration: 'none' }}>
                    <div className="ttext">
                    Today

                    </div>

                </div>
            
            </NavLink>
            <div className="searchwrapper">

                <div className="SearchBarWrapper">
                    <IconButton>
                    <SearchIcon/>

                    </IconButton>
                 
                    
                    <form className="form">
                        <input className="input" type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button className="button" type="submit"onClick={onSearchSubmit} ></button>


                    </form>
                </div>
            
            </div>
            <div className="allico">
                <IconButton>
                    <NotificationsIcon/>

                </IconButton>
                <IconButton>
                    <TextsmsIcon/>
                    
                </IconButton>
                <IconButton>
                    <FaceIcon/>
                    
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon/>
                    
                </IconButton>
                
            </div>

           
           
          
            
            
        </div>
    )
}

export default Header

const PinLogo = styled.div`
.MuiSvgIcon-root {
    color:#e00623;
    font-size:32px;
    cursor:pointer;
}

`

  


