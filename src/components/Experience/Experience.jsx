import React from "react";
import link from "../../assets/arrow-top-right.svg";
import TechnologyButton from "../TechnologyButton/TechnologyButton";
import Button from "../Button/Button";
import styled from "styled-components";

const experiences = [
  {
    from: "FEB 2023",
    to: "Present",
    companyName: "Holycode",
    role: "Angular Developer",
    description:
      "Fast-forward to today, I'm in my final year of college, doing freelance for local entrepreneurs and started a career on Upwork. Fast-forward to today, I'm in my final year of college, doing freelance for local entrepreneurs and started a career on Upwork.",
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "React",
      "Angular",
      "Ionic",
      "Capacitor",
    ],
  },
  {
    from: "AUG 2022",
    to: "FEB 2023",
    companyName: "Holycode",
    role: "Angular Intern",
    description:
      "Fast-forward to today, I'm in my final year of college, doing freelance for local entrepreneurs and started a career on Upwork.",
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "React",
      "Angular",
      "Ionic",
      "Capacitor",
    ],
  },
];

const StyledExperience = styled.div`
  .experience-item {
    display: flex;
    flex-wrap: wrap;
  }

  .from-to {
    width: 200px;
  }

  .experience-details {
    flex: 1;
    min-width: 300px
  }

  .company-name {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .style-desc {
    color: var(--light);
    margin-top: 4px;
  }
`;

const Experience = () => {
  return (
    <StyledExperience>
      {experiences.map((experience, i) => (
        <div className="experience-item" key={`experience-${i}`}>
          <h3 className="from-to style-h3">
            {experience.from} - {experience.to}
          </h3>
          <div className="experience-details">
            <div className="company-name">
              <h3 className="style-h3">{experience.companyName}</h3>
              <img src={link} alt="" />
            </div>
            <h3 className="style-h3">{experience.role}</h3>
            <p className="style-desc">{experience.description}</p>
            <div className="technologies">
              {experience.technologies.map((t, tIndex) => (
                <TechnologyButton name={t} key={`technology-${tIndex}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <Button
        text={"View Full Resume"}
        clickCallback={() => alert("all")}
        hasLineBellow={false}
        hasLinkIcon={true}
      />
    </StyledExperience>
  );
};

export default Experience;
