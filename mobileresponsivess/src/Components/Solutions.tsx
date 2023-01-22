import React from 'react'
import styled from 'styled-components';
import SolutionsCard from './SolutionsCard';

const Solutions = () => {
  return (
    <div>
        <Container>
           <Wrapper>
            <h2>Connecting users to different opportunities</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam minus est ipsa amet tempore mollitia laboriosam, similique enim minima consequuntur quos delectus ullam non, culpa dolorum adipisci illo commodi!
                </p>
           </Wrapper>
           <Holder>
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
            <SolutionsCard />
           </Holder>
        </Container>
    </div>
  )
}

export default Solutions;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    padding-bottom: 30px;
    h2{
        margin: 0;
        font-size: 40px;
        text-align: center;
    }
    p{
       width: 600px;
    }
    @media screen and (max-width: 300px) {
        width: 300px;
    }
`;
const Wrapper = styled.div``;
const Holder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`;