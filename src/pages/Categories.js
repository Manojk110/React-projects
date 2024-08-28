import React from 'react'
import { Link } from 'react-router-dom'
export default function Categories() {
  return (
    <div>
    <center><h1>Women's Fashion</h1></center>
    <Link to="/Biba">
    <img src='https://assets.tatacliq.com/medias/sys_master/images/48134533316638.jpg'/>
    </Link>
    <center><h1>Men's Fashion</h1></center>
    <img src='https://assets.tatacliq.com/medias/sys_master/images/48190417207326.jpg'/>
    <center><h1>Kid's Fashion</h1></center>
    <img src='https://assets.tatacliq.com/medias/sys_master/images/47650793455646.jpg'/>
    <center><h1>Home & Kitchen</h1></center>
    <img src='https://assets.tatacliq.com/medias/sys_master/images/48161141817374.jpg'/>
    </div>
  )
}
