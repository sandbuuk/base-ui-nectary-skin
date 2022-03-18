import styled from 'styled-components'
import { quickStartList } from './quick-start-list'

const Container = styled.div`
  margin: 60px 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 45px;
  justify-content: space-between;

  & > * {
    min-width: 250px;
    max-width: 350px;
  }`

export const QuickStartsCards = () => (
  <Container>
    {Object.entries(quickStartList).map(([path, qs]) => (
      <qs.card key={path} path={(qs.page != null) ? path : undefined}/>
    ))}
  </Container>
)
