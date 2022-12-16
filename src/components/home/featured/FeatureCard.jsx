import React from 'react'
import "./Featured.css"
import { featured } from '../../data/Data'
export default function FeatureCard() {
  return (
    <>
     <div className="content grid5 mtop5">
     { featured.map((items,index)=>(
        
        <div className="box" key={index}>
            <img src={items.cover} />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
        </div>
        

      ))}
     </div>
    </>
  )
}
