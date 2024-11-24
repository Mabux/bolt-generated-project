import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 2rem;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
`

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 1rem;
  }
`

const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
`

export const Solution = () => {
  return (
    <Section>
      <Container>
        <Content>
          <h2>Your Guide to Predictable Growth</h2>
          <p>With 15+ years of experience helping service businesses scale, I've developed a proven system that consistently delivers results.</p>
          <p>I've helped over 500 businesses double their revenue while working fewer hours, using the same methodology I'll share with you.</p>
          <p>No more guessing what works - follow our battle-tested framework to transform your business into a predictable revenue machine.</p>
        </Content>
        <ImageWrapper>
          {/* Add your image here */}
        </ImageWrapper>
      </Container>
    </Section>
  )
}
