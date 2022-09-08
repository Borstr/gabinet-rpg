import React from 'react';
import styled from 'styled-components';

const About = ({ heading, description }) => 
    <StyledAbout>
        <h2>{heading}</h2>
        {description.map((item, i) => <p key={i}>{item}</p>)}
    </StyledAbout>

export default About;

const StyledAbout = styled.section`
    width: 100%;
    background-color: #770288;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    box-shadow: 0 5px 6px 1px rgba(0, 0, 0, .32);
`;