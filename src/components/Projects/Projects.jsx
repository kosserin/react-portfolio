import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";
import { PROJECTS } from "../../constants/projects";
import styled from "styled-components";
import ProjectItem from "../ProjectItem/ProjectItem";

const StyledSection = styled.section`
  padding-top: var(--spacing-10);
  padding-bottom: var(--spacing-10);
`;

const StyledProjects = styled.div`
  margin-top: var(--spacing-2);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

const Projects = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlightedIndex(index);
  };

  const handleMouseLeave = () => {
    setHighlightedIndex(null);
  };

  return (
    <StyledSection id="projects">
      <SectionTitle name={"Projects"} />
      <StyledProjects className="mb-6">
        {PROJECTS.map((project, i) => (
          <ProjectItem
            highlightedIndex={highlightedIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            index={i}
            project={project}
            key={`project-${i}`}
          />
        ))}
      </StyledProjects>
      <Link text={"View All Projects"} href={"https://github.com/kosserin"} />
    </StyledSection>
  );
};

export default Projects;
