import React from 'react'
import Heading from '../../Common/Heading'
import PriceCard from './PriceCard'
import "./Price.css"
export default function Price() {
  return (
    <div>
      <section className='price padding'>
        <div className="container">
            <Heading title='Select your package' subtitle='lorem aa jao na'/>
            <PriceCard/>
        </div>
      </section>
    </div>
  )
}
