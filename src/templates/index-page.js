import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import logo from "../img/logo.svg";
import HeroImage from "../components/Images/HeroImage";
import ButtonApp from "../components/Images/ButtonApp";
import ButtonPlay from "../components/Images/ButtonPlay";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
}) => (
  <div className="page">
    <div className="hero-section">
      <div className="container is-fluid header">
        <img src={logo} alt="Brikmo" title="Brikmo" />
        <button className="button">Primary button</button>
      </div>
      <div className="container is-fluid content-wrapper">
        <div className="content">
          <h1>{title}</h1>
          <p>{subheading}</p>
          <div className="app-buttons">
            <ButtonApp />
            <ButtonPlay />
          </div>
        </div>
        <HeroImage />
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
      }
    }
  }
`;
