import { lazyScroll } from '~/utils/lazy-scroll'

export const ComponentsPage = lazyScroll(() => import('./index.mdx'))
