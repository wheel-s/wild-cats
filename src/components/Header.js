import React from 'react'
import twiter from './/images/twitter.svg'

const Header = () => {
  return (
    <div className='header'>
      <h1>THE Wild Cats</h1>
      <a href='https://x.com/fractalwildcats?s=21' ><img src={twiter} alt='eleonr' height={100} className='img'></img></a>
    
    </div>
  )
}

export default Header

