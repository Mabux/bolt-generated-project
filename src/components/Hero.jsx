import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Headline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const SubHeadline = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`

const CTAButton = styled.button`
  background: #007bff;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

const SocialProof = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  img {
    height: 40px;
    opacity: 0.7;
  }
`

export const Hero = () => {
  return (
    <Section>
      <Headline>Double Your Business Revenue in 90 Days</Headline>
      <SubHeadline>
        Strategic consulting and proven systems to scale your service business
      </SubHeadline>
      <CTAButton>Get My Free Strategy Session</CTAButton>
      <SocialProof>
        {/* Add your social proof logos here */}
      </SocialProof>
    </Section>
  )
}
