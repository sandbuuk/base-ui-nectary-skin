export interface BreadcrumbProps {
  /** Children (Breadcrumb.Item elements) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface BreadcrumbItemProps {
  /** Link URL (omit for current/last item) */
  href?: string
  /** Children content */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}
