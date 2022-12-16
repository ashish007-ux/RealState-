import React from 'react'
import Heading from '../../Common/Heading'
import "./Location.css"
import {location } from '../../data/Data'
export default function Location() {
  return (
    <div>
      <section className='location padding'>
        <div className="container">
        <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
        <div className="content grid3 mtop">
           {location.map((items,index)=>{
            return(
                 <div className="box" key={index}>
                    <img src={items.cover} alt="" />
                    <div className="overlay">
                        <h5>{items.name}</h5>
                        <p>
                            <label htmlFor="">{items.Villas}</label>
                            <label htmlFor="">{items.Apartments}</label>
                            <label htmlFor="">{items.Offices}</label>
                        </p>
                    </div>
                 </div>
            )
            })}
           
        </div>
        </div>
      </section>
    </div>
  )
}
