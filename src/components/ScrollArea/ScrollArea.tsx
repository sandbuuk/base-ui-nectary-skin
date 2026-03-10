import { ScrollArea as BaseScrollArea } from '@base-ui-components/react/scroll-area'
import type {
  ScrollAreaRootProps,
  ScrollAreaViewportProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
} from './ScrollArea.types'
import styles from './ScrollArea.module.css'

function Root({ children, className, style }: ScrollAreaRootProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  return (
    <BaseScrollArea.Root className={classes} style={style}>
      {children}
    </BaseScrollArea.Root>
  )
}

function Viewport({ children, className, style }: ScrollAreaViewportProps) {
  const classes = [styles.viewport, className].filter(Boolean).join(' ')
  return (
    <BaseScrollArea.Viewport className={classes} style={style}>
      {children}
    </BaseScrollArea.Viewport>
  )
}

function Scrollbar({ orientation = 'vertical', keepMounted, className, style }: ScrollAreaScrollbarProps) {
  const classes = [styles.scrollbar, className].filter(Boolean).join(' ')
  return (
    <BaseScrollArea.Scrollbar
      className={classes}
      style={style}
      orientation={orientation}
      keepMounted={keepMounted}
    >
      <Thumb />
    </BaseScrollArea.Scrollbar>
  )
}

function Thumb({ className, style }: ScrollAreaThumbProps = {}) {
  const classes = [styles.thumb, className].filter(Boolean).join(' ')
  return <BaseScrollArea.Thumb className={classes} style={style} />
}

export const ScrollArea = {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
}
