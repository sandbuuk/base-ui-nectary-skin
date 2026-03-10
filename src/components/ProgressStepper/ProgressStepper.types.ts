export type StepStatus = 'complete' | 'active' | 'pending' | 'error'

export interface ProgressStepperProps {
  /** Current step (0-based index) */
  value: number
  /** Children (ProgressStepper.Item elements) */
  children?: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}

export interface ProgressStepperItemProps {
  /** Step label */
  label: string
  /** Step description */
  description?: string
  /** Step status (auto-computed from parent value if not provided) */
  status?: StepStatus
  /** Step index (injected by parent) */
  _index?: number
  /** Total steps (injected by parent) */
  _total?: number
}
