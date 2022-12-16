import React from 'react'
import Hero from '../hero/Hero'
import Award from './award/Award'
import FeatureCard from './featured/FeatureCard'
import Featured from './featured/Featured'
import Recent from './Recents/Recent'
import Location from "./loacation/Location"
import Price from './price/Price'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Recent/>
      <Award/>
      <Location/>
      <Price/>
    </div>
  )
}
