import logo from './logo.svg';
import './App.css';
import Countryes from './components/Countires/Countryes';
import Person from './components/person/Person';
import Header from './components/header/Header';
 
 
/* //import { useEffect, useState } from 'react'; */
 

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Countryes></Countryes>
     <Person></Person>
    </div>
  );
}

/* function LoadCountries(){
  const [countries, setCountries]= useState([]);
  console.log(countries);

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
  },[])

  return (
    <div>
      <h2>Welcome to my country api from REACT</h2>
      <h5> {countries.length}
      </h5>
       {
         countries.map(country =>  <CountryDetails name={country.name }  population={country.population}></CountryDetails> )
       }
    </div>
  )
}
function CountryDetails(props){
   return (
    <div className='country'>
    <h5>Name: {props.name}</h5>
    <p>Capital: {props.population}</p>
  </div>
   )
} */

export default App;
