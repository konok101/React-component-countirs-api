 import React from 'react';
 import './Country.css'
 
 const Country = (props) => {
     const { name, population, area, flags }= props.country;
     console.log(props.country)
     return (
         <div className='country'>
              <h5>{ name}</h5>
              <img src={flags.png} alt="" />
              <h5>{ population}</h5>
              <h5>{  area}</h5>
         
        
         </div>
     );
 };
 
 export default Country;
 