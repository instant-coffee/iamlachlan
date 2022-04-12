import React from 'react';
import Title from '@/components/Title';
import styled from 'styled-components';
import Layout from '@/components/layout';
import logo from '../Assets/GitHub-32px.png';

const Container = styled.main`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 2rem;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>I am Lachlan</Title>
        <p>I am a Front end developer</p>
        <a href="https://github.com/instant-coffee">
          <Logo src={logo} alt="Logo" />
        </a>
      </Container>
    </Layout>
  );
}
