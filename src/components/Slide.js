import React from 'react'
import { useState } from 'react'
import right from './/images/right.png'
import left from './/images/arrow.png'


 
const Slide = ({img}) => {
 const [Index, setIndex] = useState(3)

const Previous = () => {
    const firstSlide = Index  === 0;
    const  newIndex = firstSlide ? img.length -1 : Index -1
    setIndex(newIndex)
}
const Next =()=>{
    const lastSlide = Index  ===  img.length -1;
    const  newIndex = lastSlide ?  0 : Index +1
    setIndex(newIndex)
}
 
   
    return (
    <div className='wrapper'>
        <img src={left} alt='left' className='prev' onClick={Previous} height={30}/>
        <img src={right} alt='right' height={30} className='next' onClick={Next}/>
            <div className='images'>
                <img src={img[Index]} alt='Img' className='images'/>
            </div>
        
        
    </div>
  )
}

export default Slide
