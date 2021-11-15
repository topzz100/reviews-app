import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0)
  
  const {id, name, job, image, text} = people[index]

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index+1
      return newIndex

    })
  }
  const prevReview = () => {
    setIndex((index) => {
       let newIndex = index - 1
       return newIndex
    })
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
    <button className ="random-btn">random</button>
    
  </div>
  </div>
    

  
};

export default Review;
