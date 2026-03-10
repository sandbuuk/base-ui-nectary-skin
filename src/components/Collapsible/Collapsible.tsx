import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible'
import type {
  CollapsibleRootProps,
  CollapsibleTriggerProps,
  CollapsiblePanelProps,
} from './Collapsible.types'
import styles from './Collapsible.module.css'

function Root({ open, defaultOpen, onOpenChange, disabled, children, className, style }: CollapsibleRootProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  return (
    <BaseCollapsible.Root
      className={classes}
      style={style}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disabled={disabled}
    >
      {children}
    </BaseCollapsible.Root>
  )
}

function Trigger({ children, className, style }: CollapsibleTriggerProps) {
  const classes = [styles.trigger, className].filter(Boolean).join(' ')
  return (
    <BaseCollapsible.Trigger className={classes} style={style}>
      {children}
    </BaseCollapsible.Trigger>
  )
}

function Panel({ children, keepMounted, className, style }: CollapsiblePanelProps) {
  const classes = [styles.panel, className].filter(Boolean).join(' ')
  return (
    <BaseCollapsible.Panel className={classes} style={style} keepMounted={keepMounted}>
      {children}
    </BaseCollapsible.Panel>
  )
}

export const Collapsible = {
  Root,
  Trigger,
  Panel,
}
