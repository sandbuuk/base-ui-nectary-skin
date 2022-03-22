import { lazy } from 'react'
import { QuickLeadsConverterCard } from './QuickLeadsConverterCard'
import type { QuickStart } from '../types'

export const quickLeadsConverter: QuickStart = {
  card: QuickLeadsConverterCard,
  page: lazy(() => import('./QuickLeadsConverterPage')
    .then(({ QuickLeadsConverterPage }) => ({ default: QuickLeadsConverterPage }))),
}
