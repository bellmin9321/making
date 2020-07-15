import React from 'react'
import './Poster.css'

function Poster(props){
    return(
        <div className = "poster">
          <img src = {props.image}/>
          <div className="desc">{props.desc}</div>
        </div>
    )
}

export default Poster