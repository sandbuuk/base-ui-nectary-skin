import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion'
import type { AccordionProps, AccordionItemProps } from './Accordion.types'
import styles from './Accordion.module.css'

function Root({
  value,
  defaultValue,
  onValueChange,
  openMultiple = false,
  children,
  className,
  style,
}: AccordionProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  return (
    <BaseAccordion.Root
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      multiple={openMultiple}
    >
      {children}
    </BaseAccordion.Root>
  )
}

function Item({
  value,
  title,
  subtitle,
  disabled,
  children,
  className,
  style,
}: AccordionItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(' ')
  return (
    <BaseAccordion.Item className={classes} style={style} value={value} disabled={disabled}>
      <BaseAccordion.Header>
        <BaseAccordion.Trigger className={styles.trigger}>
          <span className={styles.triggerContent}>
            <span>{title}</span>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </span>
          <span className={styles.chevron} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel className={styles.panel}>
        <div className={styles.panelContent}>{children}</div>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  )
}

export const Accordion = {
  Root,
  Item,
}
