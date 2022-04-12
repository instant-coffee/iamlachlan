import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === `dark` ? `purple` : `white`)};
    background-color: #1b191a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

  }
`;
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle theme="dark" />
      {children}
    </>
  );
}
