import { Children, isValidElement } from 'react'
import type { BreadcrumbProps, BreadcrumbItemProps } from './Breadcrumb.types'
import styles from './Breadcrumb.module.css'

function Item({ href, children, className, style }: BreadcrumbItemProps) {
  const isLink = !!href
  const classes = [
    styles.item,
    isLink ? styles.itemLink : styles.itemCurrent,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (isLink) {
    return (
      <a className={classes} style={style} href={href}>
        {children}
      </a>
    )
  }

  return (
    <span className={classes} style={style} aria-current="page">
      {children}
    </span>
  )
}

function Root({ children, className, style }: BreadcrumbProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  const items = Children.toArray(children).filter(isValidElement)

  return (
    <nav className={classes} style={style} aria-label="Breadcrumb">
      {items.map((child, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span className={styles.separator} aria-hidden>/</span>}
          {child}
        </span>
      ))}
    </nav>
  )
}

export const Breadcrumb = Object.assign(Root, { Item })
