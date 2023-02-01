import { commonComponents } from '../../../components/MDX/common-components'
import { tabHeaders } from './tab-headers'
import type { MDXComponents } from 'mdx/types'

export const tabMdxComponents: MDXComponents = {
  ...commonComponents,
  ...tabHeaders,
}
