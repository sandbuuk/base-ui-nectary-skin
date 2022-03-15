import { lazy } from 'react'
import { QuickLeadsConverterCard } from './QuickLeadsConverterCard'

export const quickLeadsConverter = {
  card: QuickLeadsConverterCard,
  page: lazy(() => import('./QuickLeadsConverterPage')
    .then(({ QuickLeadsConverterPage }) => ({ default: QuickLeadsConverterPage }))),
}
