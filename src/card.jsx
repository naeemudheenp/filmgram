import React from 'react';

export default function CardSingle({movie}){
    return (<div className="cardSingle" >
        <div className="cardSingle__img">
            <img   src={movie.Poster}></img>
        </div>
        <div className="cardSingle__text">
            <h3>{movie.Title}</h3>
        </div>
    
</div>);

}