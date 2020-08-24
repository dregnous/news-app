import React from 'react';
import './Card.css';

export const Card = props => (
    <div className={ `card-container ${props.className}`}>
        <h4>{props.title}</h4>
        <img src={props.img} alt={props.alt}/>
        <p>{props.excerpt}</p>
        <strong>{props.category}</strong>
    </div>
)