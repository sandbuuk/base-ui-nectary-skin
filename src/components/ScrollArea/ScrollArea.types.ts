export interface ScrollAreaRootProps {
  /** Children */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ScrollAreaViewportProps {
  /** Children */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ScrollAreaScrollbarProps {
  /** Scrollbar orientation */
  orientation?: 'vertical' | 'horizontal'
  /** Keep mounted when not scrolling */
  keepMounted?: boolean
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ScrollAreaThumbProps {
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}
