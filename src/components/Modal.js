import React from 'react'


const Modal = () => {

  
    const post = (e)=>{
      e.preventDefault()          
  

       const tweet = ` i'll be on inscribenow on 21000 fractal block height  to mint Fractal Wild cats;
        Will you be there  
      'https://x.com/fractalwildcats?s=21'.`
       const twitterUrl =`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`

       window.open(twitterUrl, "_blank")
         
    }

  return (
    <div className='modal'>
       <div className='write'>
       <p>First Pixel Cats collection on fractal bitcoin</p>
       <p> Unique way to appreciate the cat Kingdom through art 🦁</p>
        </div>
        <form className='form'>
            <p></p>
          
            <button className='btn' onClick={post}>Make a cat post </button>
        </form>

    </div>
  )
}

export default Modal
