import React from 'react';
//import ReactDOM from 'react-dom';
import {  Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const Greeting = ({name}) => {
  //console.log('Loading greeting');
  if(name.length >0){
    return(
    <Jumbotron>
        <h1>Bonjour,{name} !  Quoi de neuf?</h1>
      </Jumbotron>
    );
  }else{
    return ( 
      <Jumbotron>
      <h1>Bonjour, ! Quoi de neuf?</h1>
    </Jumbotron>      
    );

  }

  
};

export default Greeting;













/*import React from 'react';
//import ReactDOM from 'react-dom';
import { Container, Jumbotron } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { First } from 'react-bootstrap/lib/pagination';

const Greeting = ({name}) => {
  //console.log('Loading greeting');
  if(name.length >0){
    <Container>
    <Jumbotron>
          <h1>"Hi, {name}! I hope you have a pleasant day!"</h1>
      </Jumbotron>
      </Container>
  }else{
    return (
        <Container>
      <Jumbotron>
          <h1>"Hi, {name}! I hope you have a pleasant day!"</h1>
      </Jumbotron>
      </Container>
    );

  }

  
};

export default Greeting;
*/

