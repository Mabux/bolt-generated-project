import React from 'react'
import styled from 'styled-components'
import { FaChartLine, FaClock, FaUsers } from 'react-icons/fa'

const Section = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Headline = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const Benefit = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  svg {
    color: #007bff;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
  }
`

export const Benefits = () => {
  return (
    <Section>
      <Container>
        <Headline>What You'll Get</Headline>
        <BenefitsGrid>
          <Benefit>
            <FaChartLine size={40} />
            <h3>Predictable Revenue</h3>
            <p>Build a reliable system that generates consistent income month after month</p>
          </Benefit>
          <Benefit>
            <FaClock size={40} />
            <h3>More Free Time</h3>
            <p>Work smarter with systems that scale your impact without scaling your hours</p>
          </Benefit>
          <Benefit>
            <FaUsers size={40} />
            <h3>Quality Clients</h3>
            <p>Attract and retain high-value clients who appreciate and pay for your expertise</p>
          </Benefit>
        </BenefitsGrid>
      </Container>
    </Section>
  )
}
