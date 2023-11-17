import React from 'react'
import './plant.scss'
function Plant() {  
    const style={
        color:'red'
    }
    const plant='palm'
  return (
    <div>
        <div style={style}>Plant name is {plant}🌳</div>
        <div className='parent'>this is my face {name("tomato")}</div>
    </div>
  )
}


const name=function plant1(data) {
  return (
    <span>{data}</span>
  )
}

export default Plant