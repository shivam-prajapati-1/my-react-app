import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Dummy = () => {
    let a= useParams()
    let navigate= useNavigate()
    // console.log(useParams());
    setTimeout(()=>{
        navigate('/')
    },5000)
  return (
    <div>{a.data}
        
    </div>
  )
}

export default Dummy