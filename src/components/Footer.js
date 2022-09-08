import React from 'react';
import styled from 'styled-components';

const Footer = () => 
    <StyledFooter>
        <p>Copyright Borys Strzelewicz</p>
    </StyledFooter>

export default Footer;

const StyledFooter = styled.footer`
    width: 100%;
    padding: 2rem;
    background-color: #2DAD88;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, .32); 
    text-align: center;

    & > p {
        margin: 0;
    }
`;