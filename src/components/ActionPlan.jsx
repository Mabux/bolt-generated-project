import styled from 'styled-components'
import { FaRegCalendarCheck, FaRegLightbulb, FaRegSmile } from 'react-icons/fa'

const Section = styled.section`
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

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: 20%;
    right: 20%;
    height: 2px;
    background: #007bff;
    z-index: 0;
  }
`

const Step = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  background: white;
  padding: 1rem;

  svg {
    background: white;
    color: #007bff;
    padding: 1rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #666;
  }
`

export const ActionPlan = () => {
  return (
    <Section>
      <Container>
        <Headline>How It Works</Headline>
        <Steps>
          <Step>
            <FaRegCalendarCheck size={60} />
            <h3>1. Book Your Call</h3>
            <p>Schedule your free strategy session to discuss your goals</p>
          </Step>
          <Step>
            <FaRegLightbulb size={60} />
            <h3>2. Get Your Plan</h3>
            <p>We'll create a custom roadmap for your business growth</p>
          </Step>
          <Step>
            <FaRegSmile size={60} />
            <h3>3. See Results</h3>
            <p>Watch your business transform with our proven system</p>
          </Step>
        </Steps>
      </Container>
    </Section>
  )
}
