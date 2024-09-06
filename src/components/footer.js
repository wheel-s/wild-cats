import React from 'react'
import logo from './images/twitter.svg'



const Footer = () => {
  return (
    <div className='footer'>
      <p> A pride of lions roamed freely under the yellow sun 
        With eyes as sharp as diamonds, it moved with stealth, 
        blending seamlessly with the shadows
      </p>
      <a href='https://x.com/fractalwildcats?s=21'><img src={logo} alt='twitter' height={100}/></a>
    </div>
  )
}

export default Footer
