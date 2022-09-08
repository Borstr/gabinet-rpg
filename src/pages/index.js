import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { graphql } from 'gatsby';

import Nav from '../components/Nav';
import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Services from '../components/index/Services';
import Partners from '../components/index/Partners';
import Footer from '../components/Footer';

const IndexPage = ({ data }) => {
  const { heroHeading, heroSubheading, aboutHeading, aboutDescription, services, modelsHeading, modelsDescription, models } = data.allGraphCmsLandingPage.edges[0].node;
  
  return (
    <>
      <GlobalStyle />
      <main>
        <Nav />
        <Hero heading={heroHeading} subheading={heroSubheading} />
        <About heading={aboutHeading} description={aboutDescription} />
        <Services data={services} />
        <Partners heading={modelsHeading} desription={modelsDescription} data={models} />
        <Footer />
      </main>
    </>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  {
    allGraphCmsLandingPage {
      edges {
        node {
          heroHeading
          heroSubheading
          aboutHeading
          aboutDescription
          services {
            ... on GraphCMS_Service {
              id
              serviceTitle
              serviceDescriptions
            }
          }
          modelsHeading
          modelsDescription
          models {
            ... on GraphCMS_Model {
              id
              modelDescriptions
              modelHeading
            }
          }
        }
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
    font-family: droid-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FEFEFE;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4 {
    font-family: charcuterie-deco, sans-serif;
    color: #FAD366;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;