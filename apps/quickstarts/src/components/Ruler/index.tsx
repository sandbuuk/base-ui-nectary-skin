import type { FC } from 'react'

type RulerProps = {vertical: true} | {horizontal: true}

const v = {
  height: 'auto',
  width: '1px',
  border: 'none',
  backgroundColor: '#DDE0E2',
  margin: '0',
}
const h = {
  width: '100%',
  height: '1px',
  border: 'none',
  backgroundColor: '#DDE0E2',
  margin: '20px 0',
}

// @ts-ignore-next-line
export const Ruler: FC<RulerProps> = ({ vertical }) => (
  <hr style={vertical === true ? v : h}/>
)
