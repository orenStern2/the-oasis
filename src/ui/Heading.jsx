import styled, { css } from "styled-components";

const tempnum = 10;

// const test = css`
//   text-align: center;
//   ${tempnum > 5 ? "background-color: yellow;" : "background-color: red;"}
// `;
// font-size: ${tempnum > 5 ? "30px" : "5px"};
const Heading = styled.h1`
  // eslint-disable-next-line no-constant-condition
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
      ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
      ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  line-height: 1.4;
`;

export default Heading;
