import React from 'react'
import { useState } from 'react'

const Modal = () => {

  const [input, setinput] =useState('')
  const [error, seterror] = useState('')

    const post = (e)=>{
      e.preventDefault()          
      if (input==='') {
        seterror('Please enter wallet address')

        setTimeout(()=>{seterror('')}, 3000)
      } 
       else{

       const tweet = `i made my application for the fractal wildcats whitelist! 
     if you want to join wild cats apply here:
        'https://x.com/fractalwildcats?s=21'.`
       const twitterUrl =`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`

       window.open(twitterUrl, "_blank")}
         
    }

  return (
    <div className='modal'>
       <div className='write'>
       <p>First Pixel Cats collection on fractal bitcoin</p>
       <p> Unique way to appreciate the cat Kingdom through art 🦁</p>
        </div>
        <form className='form'>
            <p></p>
            <div className='input'>
                <input  value={input}  onChange={(e)=>setinput(e.target.value)} placeholder='ordinals/runes address' />
               <p>{error}</p>
            </div>
            <button className='btn' onClick={post}>Submit Wallet </button>
        </form>

    </div>
  )
}

export default Modal
