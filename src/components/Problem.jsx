import React from 'react'
import styled from 'styled-components'
import { FaExclamationCircle } from 'react-icons/fa'

const Section = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Headline = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`

const ProblemList = styled.ul`
  list-style: none;
  display: grid;
  gap: 1.5rem;
`

const ProblemItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.125rem;

  svg {
    color: #dc3545;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`

export const Problem = () => {
  return (
    <Section>
      <Container>
        <Headline>The health of your business is too important to neglect</Headline>
        <ProblemList>
          <ProblemItem>
            <FaExclamationCircle size={20} />
            <span>You're working longer hours but seeing diminishing returns</span>
          </ProblemItem>
          <ProblemItem>
            <FaExclamationCircle size={20} />
            <span>Marketing efforts aren't bringing in consistent, quality leads</span>
          </ProblemItem>
          <ProblemItem>
            <FaExclamationCircle size={20} />
            <span>Revenue is unpredictable, making it hard to plan for growth</span>
          </ProblemItem>
          <ProblemItem>
            <FaExclamationCircle size={20} />
            <span>You're stuck trading time for money with no clear path to scale</span>
          </ProblemItem>
        </ProblemList>
      </Container>
    </Section>
  )
}
