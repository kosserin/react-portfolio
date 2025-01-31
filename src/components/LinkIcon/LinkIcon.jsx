import styled from "styled-components";

const StyledSvg = styled.svg`
  transition: transform 250ms ease-in-out;

  path {
    transition: stroke 250ms ease-in-out;
  }
`;

const LinkIcon = () => {
  return (
    <StyledSvg
      className="link-icon"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12.0001M12.0001 4V12M12.0001 4L4 12"
        stroke="var(--white)"
        strokeWidth="2"
      />
    </StyledSvg>
  );
};

export default LinkIcon;
