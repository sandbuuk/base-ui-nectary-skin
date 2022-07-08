import { lazyScroll } from '~/utils/lazy-scroll'

export const NotFoundPage = lazyScroll(() => import('./index.mdx'))
