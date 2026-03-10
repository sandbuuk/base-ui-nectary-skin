import { Slider as BaseSlider } from '@base-ui-components/react/slider'
import type { SliderProps } from './Slider.types'
import styles from './Slider.module.css'

export function Slider({
  value,
  defaultValue = 0,
  onValueChange,
  onValueCommitted,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  'aria-label': ariaLabel,
  className,
  style,
}: SliderProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <BaseSlider.Root
      className={classes}
      style={style}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      onValueCommitted={onValueCommitted}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          <BaseSlider.Thumb className={styles.thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
      <BaseSlider.Value className={styles.output} />
    </BaseSlider.Root>
  )
}
