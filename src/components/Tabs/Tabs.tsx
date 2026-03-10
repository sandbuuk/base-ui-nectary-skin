import { Tabs as BaseTabs } from '@base-ui-components/react/tabs'
import type { TabsProps, TabListProps, TabProps, TabPanelProps } from './Tabs.types'
import styles from './Tabs.module.css'

function Root({ value, defaultValue, onValueChange, children, className, style }: TabsProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  return (
    <BaseTabs.Root
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      {children}
    </BaseTabs.Root>
  )
}

function List({ children, className, style }: TabListProps) {
  const classes = [styles.list, className].filter(Boolean).join(' ')
  return (
    <BaseTabs.List className={classes} style={style}>
      {children}
      <BaseTabs.Indicator className={styles.indicator} />
    </BaseTabs.List>
  )
}

function Tab({ value, children, disabled, className, style }: TabProps) {
  const classes = [styles.tab, className].filter(Boolean).join(' ')
  return (
    <BaseTabs.Tab className={classes} style={style} value={value} disabled={disabled}>
      {children}
    </BaseTabs.Tab>
  )
}

function Panel({ value, children, className, style }: TabPanelProps) {
  const classes = [styles.panel, className].filter(Boolean).join(' ')
  return (
    <BaseTabs.Panel className={classes} style={style} value={value}>
      {children}
    </BaseTabs.Panel>
  )
}

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
}
