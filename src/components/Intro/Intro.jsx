import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const StyledIntro = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 120px;
  left: 0;
  height: calc(100vh - 240px);

  @media (max-width: 1024px) {
    position: static;
    height: fit-content;
  }
`;

const StyledTopPart = styled.div`
  h2 {
    margin-bottom: 24px;
  }

  p {
    width: 360px;
    margin-bottom: 16px;
    color: var(--light);
  }
`;

const StyledSocials = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  a:hover svg path {
    fill: var(--white);
  }

  @media (max-width: 1024px) {
    margin-top: 24px;
  }
`;

const Intro = () => {
  return (
    <StyledIntro>
      <StyledTopPart>
        <h1 className="style-h1">Andrija Kostic</h1>
        <h2 className="style-h2">Skilled Front-End Developer</h2>
        <p className="style-p">
          I have passion for building web apps and hybrid native apps using
          Angular and React.
        </p>
        <Button
          text={"Get in touch"}
          clickCallback={() => alert("aaaaa")}
          hasLineBellow={true}
          hasLinkIcon={false}
        />
      </StyledTopPart>
      <StyledSocials>
        <a href="https://github.com/kosserin" target="_blank" rel="noreferrer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0132 0C7.15833 0 0 7.2111 0 16.1322C0 23.2633 4.58659 29.2997 10.9494 31.4362C11.7449 31.5968 12.0363 31.089 12.0363 30.6619C12.0363 30.2879 12.0101 29.006 12.0101 27.6703C7.5556 28.632 6.62799 25.7472 6.62799 25.7472C5.91212 23.8776 4.85143 23.3971 4.85143 23.3971C3.39348 22.4088 4.95763 22.4088 4.95763 22.4088C6.57489 22.5157 7.4235 24.0648 7.4235 24.0648C8.85491 26.5218 11.1615 25.8276 12.0894 25.4001C12.2218 24.3585 12.6463 23.6373 13.097 23.2368C9.54422 22.8628 5.80625 21.474 5.80625 15.2774C5.80625 13.5146 6.44214 12.0724 7.44973 10.9507C7.29075 10.5502 6.73386 8.89391 7.60903 6.67715C7.60903 6.67715 8.96111 6.24973 12.0098 8.33309C13.315 7.97996 14.6611 7.80032 16.0132 7.79881C17.3653 7.79881 18.7436 7.98597 20.0164 8.33309C23.0654 6.24973 24.4175 6.67715 24.4175 6.67715C25.2926 8.89391 24.7354 10.5502 24.5764 10.9507C25.6106 12.0724 26.2202 13.5146 26.2202 15.2774C26.2202 21.474 22.4823 22.8359 18.9029 23.2368C19.4864 23.7442 19.9898 24.7056 19.9898 26.2281C19.9898 28.3914 19.9636 30.1277 19.9636 30.6616C19.9636 31.089 20.2553 31.5968 21.0505 31.4365C27.4133 29.2994 31.9999 23.2633 31.9999 16.1322C32.0261 7.2111 24.8416 0 16.0132 0Z"
              fill="var(--light)"
            />
          </svg>
        </a>
        <a href="https://github.com/kosserin" target="_blank" rel="noreferrer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6313 0H2.3625C1.05625 0 0 1.03125 0 2.30625V29.6875C0 30.9625 1.05625 32 2.3625 32H29.6313C30.9375 32 32 30.9625 32 29.6938V2.30625C32 1.03125 30.9375 0 29.6313 0ZM9.49375 27.2687H4.74375V11.9937H9.49375V27.2687ZM7.11875 9.9125C5.59375 9.9125 4.3625 8.68125 4.3625 7.1625C4.3625 5.64375 5.59375 4.4125 7.11875 4.4125C8.6375 4.4125 9.86875 5.64375 9.86875 7.1625C9.86875 8.675 8.6375 9.9125 7.11875 9.9125ZM27.2687 27.2687H22.525V19.8438C22.525 18.075 22.4937 15.7937 20.0562 15.7937C17.5875 15.7937 17.2125 17.725 17.2125 19.7188V27.2687H12.475V11.9937H17.025V14.0813H17.0875C17.7188 12.8813 19.2688 11.6125 21.575 11.6125C26.3813 11.6125 27.2687 14.775 27.2687 18.8875V27.2687Z"
              fill="var(--light)"
            />
          </svg>
        </a>
      </StyledSocials>
    </StyledIntro>
  );
};

export default Intro;
