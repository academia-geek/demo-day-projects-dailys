import React from 'react'
import styled from 'styled-components';

const Loading = styled.div`
margin: auto !important;
left: 0;
right: 0;
top: 10px !important;
bottom: 0 !important;
text-align: center;
font-family: "Patua One", cursive !important;
  color: #372e4d !important;
`

export const Load = () => {
  return (
    <div className="w-100 h-100">
        <Loading>
              <img className="rounded-circle mt-5" src="https://res.cloudinary.com/donoutoby/image/upload/v1649297076/peach-cat-study-peach_j9xr1c.gif" alt="cargando"/>
              <h1>Cargando...</h1>
        </Loading>
    </div>
  )
}
