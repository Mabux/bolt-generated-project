import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Section = styled.section`
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

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`

const Question = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem;
  background: ${props => props.$expanded ? '#f8f9fa' : 'white'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
`

const Answer = styled.div`
  padding: ${props => props.$expanded ? '1rem' : '0 1rem'};
  height: ${props => props.$expanded ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.$expanded ? '1' : '0'};
`

const FAQs = [
  {
    question: "How long until I see results?",
    answer: "Most clients see significant improvements within 90 days of implementing our system. However, some start seeing positive changes in as little as 30 days."
  },
  {
    question: "What's the investment?",
    answer: "Our programs are customized to your needs. During your free strategy session, we'll discuss your goals and create a plan that fits your budget."
  },
  {
    question: "Is this right for my industry?",
    answer: "Our system has been successfully implemented across various service-based industries. We'll adapt our strategies to your specific market and needs."
  },
  {
    question: "How much time will this require?",
    answer: "We typically recommend dedicating 3-5 hours per week initially. As systems are implemented, this time requirement often decreases."
  }
]

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <Section>
      <Container>
        <Headline>Frequently Asked Questions</Headline>
        {FAQs.map((faq, index) => (
          <FAQItem key={index}>
            <Question 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              $expanded={openIndex === index}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </Question>
            <Answer $expanded={openIndex === index}>
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </Container>
    </Section>
  )
}
