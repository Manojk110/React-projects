import React from 'react'
import PathConstants from '../routes/pathConstants'
import { Link } from 'react-router-dom'
export default function () {
  return (
    <div>
       <center>
        <h1>Offer on CLIQ's Top 4</h1>
      </center>
      <div className='deal'>
        <Link to={PathConstants.BIBA}>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/48134533906462.jpg'/>
        </Link>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/48134533971998.jpg'/>
      </div>
      <div className='deal'>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/48134534037534.jpg'/>
        <img className='img' src='https://assets.tatacliq.com/medias/sys_master/images/48134534103070.jpg'/>
      </div>
      {/* <div className='art'>
      <center><h1>Wearable Art</h1>
      <img  src='https://assets.tatacliq.com/medias/sys_master/images/48134534496286.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134534430750.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134534365214.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134534234142.jpg'/>
      </center>
      </div>
      <div className='art'>
      <center><h1>CartWorthy Categories</h1>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134535348254.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134535577630.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134535708702.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134535774238.jpg'/>
      </center>
      </div>
      <div className='art'>
      <center><h1>CLiQ's Favourite Styles</h1>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134536626206.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134536691742.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134536822814.jpg'/>
      <img src='https://assets.tatacliq.com/medias/sys_master/images/48134536822814.jpg'/>
      </center>
     
      </div> */}

    </div>
  )
}
