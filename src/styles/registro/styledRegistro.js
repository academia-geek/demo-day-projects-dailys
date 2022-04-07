import styled from "styled-components"
export const SubDiv2 = styled.div`
width: 30%;
margin: auto;
border:  solid 1px lightgray;
height: 31em;
border-radius: 15px;
padding: 2em;
text-align: left;
line-height: 20px;
background-color: white;
h3{
    margin-top: 1em;
    font-weight: normal;
    font-size: 28px;
    color: #1e1732;
}
label{
    font-weight: bold;
    color: #77767c;
    font-size: 18px;
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
height: 2em;
margin-top: 1em;
`