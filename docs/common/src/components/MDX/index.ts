import { commonComponents } from './common-components'
import { commonHeaders } from './common-headers'
import type { MDXComponents } from 'mdx/types'

export const commonMdxComponents: MDXComponents = {
  ...commonComponents,
  ...commonHeaders,
}
