import { Children, isValidElement, cloneElement } from 'react'
import type { ProgressStepperProps, ProgressStepperItemProps, StepStatus } from './ProgressStepper.types'
import styles from './ProgressStepper.module.css'

const circleClassMap: Record<StepStatus, string> = {
  complete: styles.circleComplete,
  active: styles.circleActive,
  pending: styles.circlePending,
  error: styles.circleError,
}

function Item({ label, description, status = 'pending', _index = 0, _total = 1 }: ProgressStepperItemProps) {
  const isFirst = _index === 0
  const isLast = _index === _total - 1
  const lineBeforeComplete = status === 'complete' || status === 'active' || status === 'error'
  const lineAfterComplete = status === 'complete'

  return (
    <div className={styles.item}>
      <div className={styles.stepRow}>
        <div className={[
          styles.line,
          isFirst ? styles.lineHidden : '',
          lineBeforeComplete ? styles.lineComplete : '',
        ].join(' ')} />
        <div className={[styles.circle, circleClassMap[status]].join(' ')}>
          {status === 'complete' ? (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : status === 'error' ? (
            '!'
          ) : (
            _index + 1
          )}
        </div>
        <div className={[
          styles.line,
          isLast ? styles.lineHidden : '',
          lineAfterComplete ? styles.lineComplete : '',
        ].join(' ')} />
      </div>
      <div className={styles.labelArea}>
        <div className={[styles.label, status === 'pending' ? styles.labelPending : ''].join(' ')}>
          {label}
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  )
}

function Root({ value, children, className, style }: ProgressStepperProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  const total = Children.count(children)

  const enhanced = Children.map(children, (child, index) => {
    if (!isValidElement<ProgressStepperItemProps>(child)) return child
    const autoStatus: StepStatus = index < value ? 'complete' : index === value ? 'active' : 'pending'
    return cloneElement(child, {
      status: child.props.status ?? autoStatus,
      _index: index,
      _total: total,
    })
  })

  return (
    <div className={classes} style={style} role="group" aria-label="Progress">
      {enhanced}
    </div>
  )
}

export const ProgressStepper = Object.assign(Root, { Item })
