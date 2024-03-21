import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { EXPERIENCES } from "../../constants/experiences";

const StyledSection = styled.section`
  padding-top: var(--spacing-10);
`;

const StyledExperiences = styled.div`
  margin-top: var(--spacing-2);
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Experience = () => {
  return (
    <StyledSection id="experienceSection">
      <SectionTitle name={"Experience"} />
      <StyledExperiences className="mb-6">
        {EXPERIENCES.map((experience, i) => (
          <ExperienceItem experience={experience} key={`experience-${i}`} />
        ))}
      </StyledExperiences>
      <Link text={"View Full Resume"} href={"#dsadas"} />
    </StyledSection>
  );
};

export default Experience;
