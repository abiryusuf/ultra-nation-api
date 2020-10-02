import React from 'react';

const Country = (props) => {
    const {name, population, flag} = (props.country);
    const styleImg ={
        height: "50px"
    }
    return (
        <div>
            <h1>Country: {name}</h1>
            <img src={flag} alt="" style ={styleImg}/>
            <h2>population: {population}</h2>
        </div>
    );
};

export default Country;