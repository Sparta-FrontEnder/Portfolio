import React from 'react'
import HolidayCards from './HolidayCards'
import './HolidayDesign.css'

const src = "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const holidayNmae = "Halloween";
const desc = "This is Halloween";

const cardList = {
    card1 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },
    card2 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },
    card3 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },
    card4 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },
    card5 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },
    card6 : {
        src : "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title : "Halloween",
        desc : "This is Halloween",
    },

};


const HolidayDesign = () => {
  return (
    <div className='card-container'>
        <h1>Hello Holiday</h1>
        <ul className='cardList'>
            <li>
                <HolidayCards {...cardList.card1}/>
            </li>
            <li>
                <HolidayCards {...cardList.card2}/>
            </li>
            <li>
                <HolidayCards {...cardList.card3}/>
            </li>
            <li>
                <HolidayCards {...cardList.card4}/>
            </li>
            <li>
                <HolidayCards {...cardList.card5}/>
            </li>
            <li>
                <HolidayCards {...cardList.card6}/>
            </li>
        </ul>
      
    </div>
  )
}

export default HolidayDesign
