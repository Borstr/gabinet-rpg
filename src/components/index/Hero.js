import React from 'react';

import styled from 'styled-components'; 

const Hero = ({ heading, subheading }) => 
    <StyledHero>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSubheading>{subheading}</StyledSubheading>
    </StyledHero>

export default Hero;

const StyledHero = styled.section`
    height: 100vh;
    padding-top: 4rem;
    width: 100%;
    background: rgb(45,173,136);
    background: linear-gradient(180deg, rgba(45,173,136,1) 24%, rgba(119,2,136,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

const StyledHeading = styled.h1`
    font-size: 4rem;
    margin: 0;
    text-shadow: 0 0 8px rgba(0, 0, 0, .48);
    margin-bottom: 1rem;
`;

const StyledSubheading = styled.h2`
    font-family: droid, sans-serif;
    color: #FEFEFE;
    font-size: 2rem;
    margin: 0;
    text-shadow: 0 0 6px rgba(0, 0, 0, .32);
`;