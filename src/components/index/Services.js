import React from 'react';
import styled from 'styled-components';

const Services = ({ data }) => 
    <StyledServices>
        <ul>
            {data.map(service => 
                <li key={service.id}>
                    <h2>{service.serviceTitle}</h2>
                    {service.serviceDescriptions.map((description, i) => <p key={i}>{description}</p>)}
                </li>    
            )}
        </ul>
    </StyledServices>

export default Services;

const StyledServices = styled.section`
    padding: 2rem;
    margin-bottom: 1rem;

    & h2 {
        text-shadow: 0 0 1px rgba(0, 0, 0, .16);
    }

    & p {
        color: #080808;
        margin-top: 0;
    }

    & li:last-child > p {
        margin-bottom: 0;
    }
`;