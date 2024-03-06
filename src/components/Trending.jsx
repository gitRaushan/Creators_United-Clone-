import React from 'react'
import '../styles/Trending.css'

const Trending = () => {
  return (
    <div className='trending'>
           
        <div className="tiptop">
          <div className='nothing'>   <span> <img src="./images/fire.webp" alt="fire" /></span>
        <span className='hot' >Hot</span> 
        
        <span>& Trending</span></div>
     

        <div className='line'></div>
       

        </div>
     
            <div className="main">

                <div className='invited'>
                    <img src="./images/invited.webp" alt="invited" />
                    <p>Social Ketchup invited Agency Professionals for a Roundtable</p>

                </div>
                <div className="gallery">
                 <div>
                    <img src="./images/card8.webp" alt="" />
                    <p>Dolly Singh All Set To Make Her Cannes Debut</p>
                 </div>
                 <div>
                 <img src="./images/anushka.webp" alt="" />
                 <p>Anushka Sen wins an Award at Seoulcon</p>
                 </div>
                 <div>
                 <img src="./images/ankush.webp" alt="" />
                 <p>Star Wars x Fossil Collection Launch ft. Ankush.</p>
                 </div>
                 <div>
                 <img src="./images/ankush1.webp" alt="" />
                 <p>Ankush Bahuguna Stuns as the Showstopper for Elle</p>
                 </div>
                 <div>
                 <img src="./images/viraj.webp" alt="" />
                 <p>Viraj Ghelani engaged to Palak Khimavat</p>
                 </div>
                 <div>
                 <img src="./images/bluesky.webp" alt="" />
                 <p>Bluesky Social: Everything You Need To Know About</p>
                 </div>
                 <div>
                 <img src="./images/stars.webp" alt="" />
                 <p>Tis the Season of Mistletoes with our Digital Stars</p>
                 </div>
                 <div>
                 <img src="./images/riva.webp" alt="" />
                 <p>Riva Arora Is One Busy Social Media Star</p>
                 </div>

                </div>
            </div>
        
</div>

    
  )
}

export default Trending