import React from 'react'
import styled from 'styled-components';
import hero from "./Assets/hero.png";

const Hero = () => {
  return (
    <div>
        <Container>
            <First>
                <Text >The B2C & B2B <br /> Growth Marketing <br /> Company</Text>
                <Describe>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias soluta numquam hic, veniam quasi rerum delectus qui sed minima culpa dolorem magnam eligendi doloribus odit omnis, a fugiat voluptatem. Et.
                </Describe>
                <Button cl = "#d92d75" bg = "wwhite">Let's Grow Your Company</Button>
            </First>
            <Second>
                <BgImage src = {hero} />
            </Second>
        </Container>
    </div>
  )
}

export default Hero;

const Container = styled.div`
    width: 100%;
    /* height: 500px; */
    background-color: #d92d75;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 30px;
    padding-top: 40px;
    @media screen and (max-width: 960px){
        flex-direction: column-reverse;
    }
`;
const First = styled.div`
`;
const Text = styled.h1`
    margin: 0;
    font-size: 45px;
    @media screen and (max-width: 425px) {
        font-size: 30px;
    }
`;
const Describe = styled.p`
    width: 500px;
    font-size: 20px;
    @media screen and (max-width: 425px) {
        width: 300px;
        font-size: 15px;
    }
`;
const Second = styled.div`
    height: 400px;
    width: 500px;
    margin-left: 40px;
    @media screen and (max-width: 425px) {
        width: 300px;
        margin-left: 0;
    }
`;
const BgImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const Button = styled.button<{bg:string;cl:string}>`
    width: 250px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    background-color: ${(props)=>props.bg};
    color:${(props)=>props.cl};
    :hover{
        transform: scale(1.01);
    }
    
`;