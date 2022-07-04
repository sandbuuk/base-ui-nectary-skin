import '@sinch-engage/nectary/title'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <sinch-title type="xl" aria-level="1" text={children as string}/>
  ),
  h2: ({ children }) => (
    <sinch-title type="l" aria-level="2" text={children as string}/>
  ),
  h3: ({ children }) => (
    <sinch-title type="m" aria-level="3" text={children as string}/>
  ),
}
