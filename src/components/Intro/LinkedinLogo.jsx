import styled from "styled-components";

export default function Logo() {
  const StyledLink = styled.a`
    &:hover svg path {
      transition: fill 250ms ease-in-out;
      fill: var(--white);
    }
  `;
  return (
    <StyledLink
      href="https://www.linkedin.com/in/kosserin/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.3351 0H2.65781C1.18828 0 0 1.16016 0 2.59453V33.3984C0 34.8329 1.18828 36 2.65781 36H33.3351C34.8047 36 36 34.8328 36 33.4054V2.59453C36 1.16016 34.8047 0 33.3351 0ZM10.6805 30.6774H5.33672V13.493H10.6805V30.6774ZM8.00859 11.1516C6.29296 11.1516 4.90782 9.76641 4.90782 8.05781C4.90782 6.34922 6.29296 4.96406 8.00859 4.96406C9.71719 4.96406 11.1023 6.34922 11.1023 8.05781C11.1023 9.75938 9.71719 11.1516 8.00859 11.1516ZM30.6774 30.6774H25.3405V22.3242C25.3405 20.3345 25.3055 17.7679 22.5633 17.7679C19.7859 17.7679 19.3641 19.9407 19.3641 22.1836V30.6774H14.0344V13.493H19.153V15.8413H19.2234C19.9337 14.4914 21.6774 13.0641 24.2719 13.0641C29.6788 13.0641 30.6774 16.6219 30.6774 21.2484V30.6774Z"
          fill="var(--light)"
        />
      </svg>
    </StyledLink>
  );
}
