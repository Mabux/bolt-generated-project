import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #007bff;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Headline = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const Button = styled.button`
  background: white;
  color: #007bff;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`

export const CTA = () => {
  return (
    <Section>
      <Container>
        <Headline>Ready to Transform Your Business?</Headline>
        <Subheadline>
          Book your free strategy session and discover how to double your revenue in the next 90 days.
        </Subheadline>
        <Button>Get My Free Strategy Session</Button>
      </Container>
    </Section>
  )
}
