import React from 'react'
import Heading from '../../Common/Heading'
import RecentCard from './RecentCard'
import"./Recent.css"
export default function Recent() {
  return (
    <div>
      <section className='recent padding'>
              <div className="container">
                <Heading title='Recent propeert listed' subtitle='kuchni'/>
                <RecentCard/>
              </div>
      </section>
    </div>
  )
}
