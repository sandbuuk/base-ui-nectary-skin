import styled from 'styled-components'

type RulerProps = {vertical: true} | {horizontal: true}

// @ts-ignore-next-line
export const Ruler = styled.hr<RulerProps>`${({ vertical }) => (
  vertical === true
    ? `
      height: auto;
      width: 1px;
      border: none;
      background-color: #DDE0E2;
      margin: 0;`
    : `
      width: 100%;
      height: 1px;
      border: none;
      background-color: #DDE0E2;
      margin: 20px 0;
      `
)}`
