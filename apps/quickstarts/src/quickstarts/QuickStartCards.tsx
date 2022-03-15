import styles from './QuickStartCards.module.css'
import { quickStartList } from './quick-start-list'

export const QuickStartsCards = () => (
  <div className={styles.root}>
    {Object.entries(quickStartList).map(([path, qs]) => (
      <qs.card key={path} path={(qs.page != null) ? path : undefined}/>
    ))}
  </div>
)
