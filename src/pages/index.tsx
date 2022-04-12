import React from 'react';
import Title from '@/components/Title';
import styled from 'styled-components';
import Layout from '@/components/layout';

const Container = styled.main`
  margin: 3rem auto;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>I am Lachlan</Title>
        <p>I am a Front end developer</p>
      </Container>
    </Layout>
  );
}
