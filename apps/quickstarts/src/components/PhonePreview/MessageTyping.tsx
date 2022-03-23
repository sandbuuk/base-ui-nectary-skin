import styled, { keyframes } from 'styled-components'

const blink = keyframes`50% { opacity: 1; }`
const pulse = keyframes`50% { transform: scale(1.05); }`

const Container = styled.div`
  background-color: var(--sinch-color-snow-500);
  width: fit-content;
  max-width: 70%;
  border-radius: 1000px;
  padding: 10px;
  margin: 20px;
  position: relative;
  animation: 2s ${pulse} infinite ease-out;
  line-height: 0;

  & > span {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 1px;
    background-color: var(--sinch-color-stormy-100);
    border-radius: 50%;
    opacity: 0.4;
    animation: 1s ${blink} infinite;
  }

  & > span:nth-child(1) { animation-delay: .3333s; }
  & > span:nth-child(2) { animation-delay: .6666s; }
  & > span:nth-child(3) { animation-delay: .9999s; }
`

export const MessageTyping = () => (
  <Container>
    <span/><span/><span/>
  </Container>
)
