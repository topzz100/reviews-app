import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0)
  
  const {id, name, job, image, text} = people[index]

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index+1
    
     return changeNumber(newIndex)
    })
  }
  const prevReview = () => {
    setIndex((index) => {
       let newIndex = index - 1
       return changeNumber(newIndex)
    })
  }
   const ranNumber = () => {
    const ranIndex = Math.floor(Math.random()*people.length)
    setIndex(() => {
      return ranIndex
    })
  }

  const changeNumber = (index) => {
    if(index < 0){
       return index = people.length - 1
    }
    if(index > people.length -1){
      return index = 0
    }
    return index
  }


  return <div className = "section">
  <div className = "review">
    <div className = "img-container">
      <img className = "person-img" src={image} alt = {name}></img>
      <FaQuoteRight className = "quote-icon"/>
    </div>
    <h4 className = "author">{name}</h4>
    <h4 className = "job">{job}</h4>
    <p className = "info">{text}</p>
    <button className ="prev-btn" onClick = {prevReview}><FaChevronLeft/></button>
    <button className ="next-btn"  onClick = {nextReview}><FaChevronRight/></button>
    <button className ="random-btn" onClick = {ranNumber}>random</button>
    
  </div>
  </div>
    

  
};

export default Review;
