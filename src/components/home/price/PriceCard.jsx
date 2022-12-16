import React from 'react'
import { price } from '../../data/Data'

export default function PriceCard() {
  return (
    <div>
      <div className="content flex mtop">
        {price.map((items,index)=>{
            
          return(
               <div className="box shadow" key={index}>
                <div className="topbtn">
                    <button className='btn3'>{items.best}</button>
                </div>
                <h3>{items.plan}</h3>
                <h1><span>$</span>{items.ptext}</h1>


                
            <ul>
              {items.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: items.plan === "Standard" ? "#27ae60" : "#fff",
                color: items.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {items.plan}
            </button>
               </div>
               
          )


        })}
      </div>
    </div>
  )
}
