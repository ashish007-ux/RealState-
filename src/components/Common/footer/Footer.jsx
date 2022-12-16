import React from 'react'
import './Footer.css'
import { footer } from '../../data/Data'
export default function Footer() {
  return (
    <div>
      <section className='footerContact'>
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Do you HAVE question</h1>
                    <p>We are here to help you to grow  your career and growth.</p>
                </div>
                <button className='btn5'>Contact us today</button>
            </div>
        </div>
      </section>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
