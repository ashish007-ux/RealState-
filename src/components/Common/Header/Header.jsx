import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from "../../data/Data"
import "./Header.css"
import { useState } from 'react'
export default function Header() {


const[navList,setNavList]= useState(false);

    return (
        <>
            <header>
                <div className="container flex">
                    <div className="logo">
                        <img src='./images/logo.png' alt=''></img>
                    </div>
                    <div className="nav">
                        <ul className= {navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="button flex">
                        <h4>
                            <span>2</span>MY List
                        </h4>
                        <button className='btn1'>
                            <i className='fa fa-sign-out'></i> Sign in
                        </button>
                    </div>
                    { <div className="toggle">
                       
                        <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
                       

                    </div> }
                </div>
            </header>
        </>
    )
}
