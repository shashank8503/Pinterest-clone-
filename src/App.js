
import { useEffect, useState } from 'react';
import { BrowserRouter  } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import AddIcon from '@material-ui/icons/Add';

import { IconButton} from '@material-ui/core';
import  styled  from 'styled-components';
import unsplash from './unsplash';
import HelpIcon from '@material-ui/icons/Help';




function App() {
  const [pins,setNewPins] = useState([])
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params: {
        query:term
      }
    });
  

  };

  const onSearchSubmit = (term) => {
    console.log("this is the input" , term);
    getImages(term).then((res) => {
      let results =res.data.results;
      let newPins = [
        ...results,
        ...pins,
      ] 
      newPins.sort(function( a,b ){
        return 0.5 - Math.random();
      });
      setNewPins(newPins);

    })

    
  }
  const getNewPins = () => {
    let promises =[];
    let pinData =[];

    let pins = ['ocean', 'Tokyo', 'dogs','cats','lions','India','kitchen','nature','sports']
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
          pinData.sort(function( a,b ){
            return 0.5 - Math.random();
          });
        })
      )
    
    }) 
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    } );

    };
    useEffect(() => {
      getNewPins();
     
     }, [])


  
 
  
  
  return (
    <div className="app">
      <BrowserRouter >
      <div>
      <Header onSubmit ={onSearchSubmit}/>
      
      
      
      
      <div clasName="add">
        <Add >
          

            <IconButton >
                    <AddIcon  />

            </IconButton>
             </Add>
          </div>

           
            <Ques>
            <IconButton className="Ques">
                    <HelpIcon/>

            </IconButton>

            </Ques>
            <Home pins={pins}/>
            
        
        
      </div>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
const Add = styled.div`
.MuiSvgIcon-root {
    color: black;
    font-size:33px;
    
   
    

    
    

    
}

`
const Ques = styled.div`
.MuiSvgIcon-root {
  color: black;
  font-size:33px;
 
    
   
    
}

`

