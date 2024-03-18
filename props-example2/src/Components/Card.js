import React from 'react'

export const Card = ({img,name,details}) => {
  return (
    <div>
        <div class="card" style={{width:"250px"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{details}</p>
  </div>
</div>
    </div>
  )
}
