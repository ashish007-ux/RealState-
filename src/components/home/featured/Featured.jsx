import React from 'react'
import Heading from '../../Common/Heading'
import FeatureCard from './FeatureCard'
import "./Featured.css"
export default function Featured() {
    return (
        <div>
            <section className='featured background '>
                <div className="container">
                    <Heading title='Featured Property Type' subtitle='Find all types of property' />
                    <FeatureCard/>
                </div>
            </section>
        </div>
    )
}
