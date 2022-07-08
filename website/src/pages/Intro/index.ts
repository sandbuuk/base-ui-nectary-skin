import { lazyScroll } from '~/utils/lazy-scroll'

export const IntroPage = lazyScroll(() => import('./index.mdx'))
