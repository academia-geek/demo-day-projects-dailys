import styled from "styled-components"


export const DivInicio = styled.div`
justify-content: center;
text-align: center;

`

export const SubDiv = styled.div`
width: 30%;
margin: auto;
background-color: #ffff;
border:  solid 1px lightgray;
height: 77vh;
border-radius: 15px;

padding: 2em;
text-align: left;
line-height: 17px;
h3{
    margin-top: 1em;
    font-weight: normal;
    font-size: 28px;
    color: #1e1732;
}
label{
    font-weight: bold;
    color: #77767c;
}

@media (max-width: 720px) {
       width: 80%;
       height: 33em;
     }
`


export const ButtonInicio = styled.button`
border-style: none;
border-radius: 5px;
font-weight: bold;
width: 100%;
background-color: #6a659d;
color: white;
height: 3em;
margin-top: 2em;
`

