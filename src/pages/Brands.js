import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Brands1.css"
import PathConstants from '../routes/pathConstants'
export default function Brands() {
  return (
    <div className='brand-list'>
      <div className='brand'>
       <Link to="/Puma">
     <img className='images' src={process.env.PUBLIC_URL + '/puma.svg'} alt="My Image"  />
     </Link>
    
     <Link to="/Jockey">
      <img className='images'src={process.env.PUBLIC_URL+'/jockey.svg'}/>
      </Link>
   
     </div>
      <div className='brand'>
        <Link  to={PathConstants.LEVIS}>
     <img className='images'src={process.env.PUBLIC_URL + '/levis-1.svg'} alt="My Image" />
     </Link>
     <Link to={PathConstants.TOMMY}>
      <img className='images'src={process.env.PUBLIC_URL+'/tommy-hilfiger-3.svg'}/>
      </Link>
     </div>
      {/* <div className='brand'>
     <img className='images'src={process.env.PUBLIC_URL + '/forever-21-logo.svg'} alt="My Image" />
      <img className='images'src={process.env.PUBLIC_URL+'/lifestyles.svg'}/>
     </div> */}
    </div>
  )
}
