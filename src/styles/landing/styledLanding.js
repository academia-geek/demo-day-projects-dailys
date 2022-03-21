import styled from 'styled-components'

export const Qualities= styled.div`
display: flex ;
margin-top: 1.5em ;
@media (max-width: 600px) {
 flex-direction: column ;
}
`

export const SubQualities= styled.div`
width: 30%;
margin: auto;
margin-top: 1.5em;


@media (max-width: 600px) {
    width: 50%;
}

p{
    font-size: 16px;
    color: #626262;
}
`

export const H5= styled.h5`
margin-top: 1.5em;
font-size: 20px;
color: #372e4d ;
@import url('https://fonts.googleapis.com/css2?family=Arsenal:ital@1&family=Domine&family=Oswald:wght@300&family=Patua+One&family=Raleway:wght@200&family=Roboto:wght@500&family=Rubik:ital,wght@0,500;1,400&display=swap');
font-family: 'Patua One', cursive;
`


export const DivFooter = styled.div`
background-color: hsl(216, 53%, 9%) ;
height: 70vh;
padding: 10em 5em 2em 5em;
@media (max-width: 600px) {
   text-align: left ;
height: 70em;
padding: 2em;
}
`

export const ImgLogo = styled.img`
display: block ;
@media (max-width: 600px) {
  margin-top: 8em;
   
}
`

export const DivColumnFoo = styled.div`
display: flex ;
width: 32% ;
margin-top: 3.5em;
margin-right: 2em ;
p{
    margin-left: 1.3em;
    text-align: left ;
}
@media (max-width: 600px) {
   width: 100%;
   }
`
export const  DivFlex = styled.div`
display: flex ;
p{
    margin-left: 1.3em;
    text-align: left ;
}
`

export const  DivContCol = styled.div`
display: flex ;
flex-direction: row ;
@media (max-width: 600px) {
   flex-direction: column;
   
}
`

export const  DivCols = styled.div`
margin-top: 3.5em;
margin-right: 4em ;
h6, img{
    cursor: pointer ;
}
`
export const ImgRedes= styled.img`
margin-right: 0.7em;
`
