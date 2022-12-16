import React from 'react'
import Heading from '../Common/Heading'
import "./Hero.css"
export default function Hero() {
  return (
    <div>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search your next home' subtitle='Find new and featured propert location 
          in your local city'/>
            <form action='' className='flex'>
                <div className='box'>
                    <span>City/street</span>
                    <input type='text' placeholder='location'></input>
                </div>
                <div className='box'>
                    <span>prooperty type</span>
                    <input type='text' placeholder='property type'></input>
                </div>
                <div className='box'>
                    <span>price range</span>
                    <input type='text' placeholder='price range'></input>
                </div>
                <div className='box'>
                  <h4>
                    Advance filter
                  </h4>
                </div>
                <div className="btn">
                  <i className='fa fa-search'></i>
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}
