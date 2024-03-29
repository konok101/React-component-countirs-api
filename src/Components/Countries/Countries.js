import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

 

const Countries = () => {
 
    const [country, setCountry]= useState([]);
    console.log(country)
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))

    }, [])

    return (
        <div  >
 <h1>country total {country.length}</h1>
 
{/*  {
     country.map(c=> <Country name={c.name} population={c.population}></Country>)
 } */}

   <div className="countries">
   {
     country.map(country=> <Country country={country}  key={country.population}>
         
     </Country>)
 }
   </div>
 
           
        </div>
    );
};

export default Countries;