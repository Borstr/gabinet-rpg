import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = () => {
    const [ shouldShowNav, triggerNav ] = useState('none');
    
    return (
        <StyledNav>
            <StyledH1>Gabinet RPG</StyledH1>
            <NavButton onClick={() => triggerNav(shouldShowNav === 'block' ? 'none' : 'block')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="40" viewBox="0 0 47 40">
                    <g transform="translate(-320 -11.5)">
                        <rect width="47" height="8" rx="2" transform="translate(320 11.5)" fill="#fefefe"/>
                        <rect width="47" height="8" rx="2" transform="translate(320 27.5)" fill="#fefefe"/>
                        <rect width="47" height="8" rx="2" transform="translate(320 43.5)" fill="#fefefe"/>
                    </g>
                </svg>
            </NavButton>
            <StyledList shouldShowNav={shouldShowNav}>
                <StyledListItem><Link to='/'>Strona Główna</Link></StyledListItem>
                <StyledListItem><Link to='/'>Druk 3D</Link></StyledListItem>
                <StyledListItem><Link to='/'>Malowanie</Link></StyledListItem>
                <StyledListItem><Link to='/'>Modele</Link></StyledListItem>
                <StyledListItem><Link to='/'>Czyszczenie</Link></StyledListItem>
                <StyledListItem><Link to='/'>Kontakt</Link></StyledListItem>
            </StyledList>
            <StyledOverlay onClick={() => triggerNav(shouldShowNav === 'block' ? 'none' : 'block')} shouldShowNav={shouldShowNav}/>
        </StyledNav>
    )
}

export default Nav;

const StyledOverlay = styled.button`
    border: none;
    background-color: rgba(0, 0, 0, .32);
    display: ${({shouldShowNav}) => shouldShowNav};
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`;

const StyledList = styled.ul`
    display: ${({shouldShowNav}) => shouldShowNav};
    position: fixed;
    top: 4rem;
    right: 0;
    height: calc(100vh - 4rem);
    background-color: #2DAD88;
    width: 80%;
    box-shadow: 0 6px 6px 4px rgba(0, 0, 0, .32);
    z-index: 2;
`;

const StyledListItem = styled.li`
    width: 100%;
    height: calc((100vh - 4rem) / 6);

    & > a {
        display: block;
        width: 100%;
        height: 100%;
        transition: background-color 300ms ease-in-out;
        line-height: calc((100vh - 4rem) / 6);
        text-decoration: none;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;
        border-bottom: 1px solid #34FAC1;
        
        &:hover, &:focus {
            background-color: #34FAC1;
        }
    }
`;

const StyledNav = styled.nav`
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, .32);
    background-color: #770288;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    z-index: 3;
    justify-content: space-between;
`;

const StyledH1 = styled.h1`
    font-family: charcuterie-deco, sans-serif;
    color: #FAD366;
    font-size: 2.5rem;
`;

const NavButton = styled.button`
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
`;