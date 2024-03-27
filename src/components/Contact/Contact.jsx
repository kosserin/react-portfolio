import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";

const StyledSection = styled.section`
  padding-top: var(--spacing-10);

  p {
    margin-top: var(--spacing-2);
  }
`;

const Contact = () => {
  return (
    <StyledSection id="contactSection">
      <SectionTitle name={"Contact"} />
      <p className="style-body color-light mb-1">
        Have a project you think I could be a good fit? Let’s talk.
      </p>
      <Link
        text={"kostic.andrija00@gmail.com"}
        href={"mailto:kostic.andrija00@gmail.com"}
      />
    </StyledSection>
  );
};

export default Contact;
