import React from 'react'
import './BackToTop.css'

const BackToTop = () => {
  const backToTop=()=> {
    window.scrollTo({left:0,top:0,behavior:'smooth'})
  }
  return (
    <>
      <div className='top-btn text-end'>
         <button className='btn btn-primary back-to-top' onClick={backToTop}>Top</button>
      </div>
    </>
  )
}

export default BackToTop
