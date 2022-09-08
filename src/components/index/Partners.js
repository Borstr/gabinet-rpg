import React from 'react';
import styled from 'styled-components';

const Partners = ({ heading, description, data }) => 
    <StyledPartners>
        <h2>{heading}</h2>
        <p>{description}</p>
        {data.map(({ modelHeading, modelDescriptions, id }) => 
            <React.Fragment key={id}>
                <h3>{modelHeading}</h3>
                {modelDescriptions.map((description, i) => <p key={i}>{description}</p>)}
            </React.Fragment>    
        )}
    </StyledPartners>

export default Partners;

const StyledPartners = styled.section`
    background-color: #770288;
    padding: 2rem;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, .32); 

    & p:last-of-type {
        margin-bottom: 0;
    }
`;