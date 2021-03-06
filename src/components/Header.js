import React, {useState} from 'react';
import styled from 'styled-components';
// import MenuIcon from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [burgerState,setBurgerState] = useState(false);

  return (
    <Container>
      <a>
        <img src='images/logo.svg'/>
      </a>
      <Menu>
        <a href=''>Model S</a>
        <a href=''>Model Y</a>
        <a href=''>Model 3</a>
        <a href=''>Model X</a>

      </Menu> 
      <RightMenu>
        <a href=''>Shop</a>
        <a href=''>Tesla Account</a>
        <CoustomMenu onClick={()=>setBurgerState(true)}>
          <MenuIcon/>
        </CoustomMenu>
      </RightMenu>

      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerState(false)} />
        </CloseWrapper>
        <li><a href=''>MODEL S</a></li>
        <li><a href=''>MODEL Y</a></li>
        <li><a href=''>MODEL 3</a></li>
        <li><a href=''>MODEL X</a></li>
        <li><a href=''>Exisiting Inventory</a></li>
        <li><a href=''>Used Inventory</a></li>
        <li><a href=''>Trade-In</a></li>
        <li><a href=''>Cybertruck</a></li>
        <li><a href=''>Roadaster</a></li>
        


      </BurgerNav>
    </Container>
  )
}

export default Header

// The styled components

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;

`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;


  a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:no-wrap;
    color:#000;

  }

  @media (max-width:768px){
    display:none;
  }

`
const RightMenu = styled.div`
  display:flex;
  align-items:center;


  a{
    font-weight:600
    text-transform:uppercase;
    margin-right: 10px;
    color:#000;


  }

`

const CoustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:#fff;
    width:300px;
    z-index: 100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;

    li{
      padding 15px 0;
      border-bottom:1px solid rgba(0,0,0,0.2);
    }

    a{
      font-weight:600;
      color:#000;

    }
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;

`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:end;

`
