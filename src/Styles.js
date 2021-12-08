import styled, { keyframes } from "styled-components";

export const TABLE_TEXT = "azure";
export const PRIMARY_FONT_COLOR = 'azure'


const rotate360 = keyframes`
  from{ transform: rotate(0deg); color:red;}
  to{ transform: rotate(360deg); color:blue;}
`;
export const Music = styled.div`
  display: inline-block;
  text-shadow: 1px 1px 1px black;
  animation: ${rotate360} 2s linear infinite;
`;

export const Background = styled.div`
  background-color: rgb(23, 23, 23)
`;
