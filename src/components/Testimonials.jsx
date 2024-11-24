import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'

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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

const Testimonial = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const PullQuote = styled.h3`
  color: #007bff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Stars = styled.div`
  color: #ffc107;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Headline>What Our Clients Say</Headline>
        <TestimonialsGrid>
          <Testimonial>
            <PullQuote>Life-Changing Results</PullQuote>
            <Stars>
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </Stars>
            <Quote>
              "Before working with them, I was struggling to scale. Now my business runs like clockwork, and revenue has doubled in just 3 months!"
            </Quote>
            <Author>
              <img src="https://via.placeholder.com/50" alt="Sarah Johnson" />
              <div>
                <strong>Sarah Johnson</strong>
                <p>CEO, Digital Solutions</p>
              </div>
            </Author>
          </Testimonial>
          <Testimonial>
            <PullQuote>Worth Every Penny</PullQuote>
            <Stars>
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </Stars>
            <Quote>
              "The systematic approach transformed my business. I now work fewer hours and make more money than ever before."
            </Quote>
            <Author>
              <img src="https://via.placeholder.com/50" alt="Mark Thompson" />
              <div>
                <strong>Mark Thompson</strong>
                <p>Founder, Growth Co</p>
              </div>
            </Author>
          </Testimonial>
        </TestimonialsGrid>
      </Container>
    </Section>
  )
}
