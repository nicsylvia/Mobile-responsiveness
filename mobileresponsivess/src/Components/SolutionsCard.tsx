import React from 'react'
import styled from 'styled-components';

const SolutionsCard = () => {
  return (
    <div>
        <Container>
            <Card>
                <Tittle>Hello People</Tittle>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, molestiae id? Modi ab earum, eum, facere molestiae ea doloribus, voluptates aliquid 
                </Desc>
                <button>Get Started</button>
            </Card>
        </Container>
    </div>
  )
}

export default SolutionsCard;

const Container = styled.div``;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    padding: 15px 15px;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;

    button{
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: #d92d75;
    :hover{
        transform: scale(0.98);
    }
    }

    @media screen and (max-width: 320px) {
        width: 250px;
    }
    @media screen and (min-width: 330px) and (max-width: 750px){
        width: 300px;
    }
    @media screen and (min-width: 800px) and (max-width: 1024px) {
        width: 350px;
    }


`;
const Tittle = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #d92d75;
`;
const Desc = styled.div``;
