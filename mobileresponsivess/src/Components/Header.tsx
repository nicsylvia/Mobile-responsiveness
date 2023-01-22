import React from 'react'
import styled from 'styled-components';
import {AiOutlineBars} from "react-icons/ai";
import {GiCancel} from "react-icons/gi";

const Header = () => {
    const [open,setOpen]=React.useState<Boolean>(false);

    const openMenu=()=>{
        setOpen(!open);
    }
  return (
    <div>
        <Container>
           <Wrapper>
           <Logo>
                SYLVIA.
            </Logo>
            <Navigation>
                <Nav>Home</Nav>
                <Nav>About</Nav>
                <Nav>Contact</Nav>
                <Nav>Services</Nav>
            </Navigation>
           </Wrapper>
           <ButtonHold>
                <Button bg="white " cl="#d92d75">Sign Up</Button>
                <Button bg="black" cl=" white">Login</Button>
            </ButtonHold>
          {open?(
              <Menu onClick={openMenu}>
              <AiOutlineBars />
          </Menu>
          ):(
            <Menu onClick={openMenu}>
            <GiCancel />
        </Menu>
          )}
    
        </Container>
    </div>
  )
}

export default Header;

const Menu = styled.div`
    display: none;

    @media screen and (max-width : 960px){
        display: block;
        margin-right: 30px;
        font-size: 30px;
    }

`;
const Container = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center     ;
    background-color: #d92d75;
    color: white;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
const Logo = styled.div`
    margin-left: 40px;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width: 960px){
        margin-left: 30px;
    }
`;
const Navigation = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;

    @media screen and (max-width: 960px){
        display: none;
    }
`;
const Nav = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 350ms;
    :hover{
        color: silver;
        text-decoration: underline;
    }
`;
const ButtonHold = styled.div`
    margin-right: 20px;

    @media screen and (max-width: 960px){
        display: none;
    }
`;
const Button = styled.button<{bg:string;cl:string}>`
    width: 150px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: ${(props)=>props.bg};
    color:${(props)=>props.cl};
    :hover{
        transform: scale(0.98);
    }
    
`;