import React from 'react';
import styled from 'styled-components';

function  Section({title, leftBtnText, rightBtnText, description, backgroundImage}) {
  return (
    <Wrap bgImage={backgroundImage}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {
                rightBtnText && <RightButton>{rightBtnText}</RightButton>
                }

            </ButtonGroup>
            <DownArrow src='/images/down-arrow.svg'/>
        </Buttons>
    </Wrap>
  )
}


export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-image: url('/images//model-s.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    
    font-family: 'Rubik';
    background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
    padding-top:10vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:30px;

    @media(max-width:768px){
        flex-direction:column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color:#fff;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background:#fff;
    color:black;
    opacity:0.65;
`

const DownArrow = styled.img`
    margin-top:20ox;
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
    display:flex;
    flex-direction:column;    
`

