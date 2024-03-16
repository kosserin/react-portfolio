import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";

const StyledContact = styled.section`

a {
    text-decoration: none;
    color: var(--white);
    border-bottom: 1.5px solid var(--white);
}
`;

const Contact = () => {
  return (
    <StyledContact id="contactSection">
      <SectionTitle name={"Contact"} />
      <p className="style-body color-light mb-1">
        Have a project you think I could be a good fit? Let’s talk.
      </p>
      <Link text={"kostic.andrija00@gmail.com"} href={"#dsadas"} />
    </StyledContact>
  );
};

export default Contact;
