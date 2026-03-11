import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Button } from '../button'
import { Icon } from '../icon'
import { SegmentedControl, SegmentedControlOption } from '../segmented-control'

// ============================================================================
// Constants
// ============================================================================

const PICKER_RADIUS = 216 / 2
const MINUTE_DIGIT_SIZE = 30
const HOUR_12_DIGIT_SIZE = 26
const HOUR_24_DIGIT_SIZE = 26
const MINUTE_RADIUS = PICKER_RADIUS - MINUTE_DIGIT_SIZE
const HOUR_12_RADIUS = MINUTE_RADIUS - HOUR_12_DIGIT_SIZE
const HOUR_24_RADIUS = HOUR_12_RADIUS - HOUR_24_DIGIT_SIZE
const NEEDLE_HOUR_12_LENGTH = HOUR_12_RADIUS
const NEEDLE_HOUR_24_LENGTH = HOUR_24_RADIUS
const NEEDLE_MINUTE_LENGTH = MINUTE_RADIUS

// ============================================================================
// Utility Functions
// ============================================================================

const parseTime = (value: string | null | undefined): { hours: number, minutes: number } => {
  if (value === '' || value === null || value === undefined) {
    return { hours: 0, minutes: 0 }
  }

  const timeParts = value.split(':')
  const hours = parseInt(timeParts[0] ?? '00')
  const minutes = parseInt(timeParts[1] ?? '00')

  if (isNaN(hours) || hours > 23 || hours < 0) {
    return { hours: 0, minutes: 0 }
  }

  if (isNaN(minutes) || minutes > 59 || minutes < 0) {
    return { hours: 0, minutes: 0 }
  }

  return { hours, minutes }
}

const pad = (value: number): string => {
  return value.toString().padStart(2, '0')
}

const stringifyTime = (hour: number, minute: number): string => {
  return `${pad(hour)}:${pad(minute)}:00`
}

const stringifyHour = (hour: number, is24: boolean): string => {
  if (is24) {
    return pad(hour)
  }

  if (hour === 0 || hour === 12) {
    return '12'
  }

  return pad(hour % 12)
}

const stringifyHourFace = (hour: number): string => {
  return hour === 0 ? '12' : hour === 12 ? '24' : String(hour)
}

const stringifyMinute = (minute: number): string => {
  return pad(minute)
}

const hourToIndex = (hour: number, is24: boolean): number => {
  if (is24) {
    if (hour === 0) {
      return 12
    }

    if (hour === 12) {
      return 0
    }

    return hour
  }

  return hour % 12
}

const getShortestCssDeg = (currentDeg: number, nextDeg: number): number => {
  const angle = currentDeg % 360
  const diff = (360 - (angle - nextDeg)) % 360

  if (diff > 180) {
    return currentDeg - 360 + diff
  }

  return currentDeg + diff
}

// ============================================================================
// Variants
// ============================================================================

const timePickerVariants = cva(
  // Base styles
  'block outline-none',
  {
    variants: {},
    defaultVariants: {},
  }
)

// ============================================================================
// Sub-components
// ============================================================================

interface HourDigitProps {
  hour: number
  x: number
  y: number
  is24Hour: boolean
  isSelected: boolean
  onClick: () => void
}

const HourDigit = ({ hour, x, y, isSelected, onClick }: HourDigitProps) => {
  const displayValue = stringifyHourFace(hour)
  const isH24Digit = hour >= 12 && hour !== 12 || hour === 0

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      className={cn(
        'absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto',
        'top-[calc(50%-14px)] left-[calc(50%-14px)]',
        'leading-7',
        isH24Digit
          ? [
            'font-[var(--sinch-comp-time-picker-digit-font-default-h24)]',
            isSelected
              ? 'font-[var(--sinch-comp-time-picker-digit-font-checked-h24)] text-[var(--sinch-comp-time-picker-digit-color-checked-h24-initial)]'
              : 'text-[var(--sinch-comp-time-picker-digit-color-default-h24-initial)]',
          ]
          : [
            'font-[var(--sinch-comp-time-picker-digit-font-default-h12)]',
            isSelected
              ? 'font-[var(--sinch-comp-time-picker-digit-font-checked-h12)] text-[var(--sinch-comp-time-picker-digit-color-checked-h12-default)]'
              : 'text-[var(--sinch-comp-time-picker-digit-color-default-h12-initial)]',
          ]
      )}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      role="button"
      tabIndex={-1}
      aria-label={`${displayValue} o'clock`}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onKeyDown={handleKeyDown}
    >
      {displayValue}
    </div>
  )
}

interface MinuteDigitProps {
  minute: number
  x: number
  y: number
  isSelected: boolean
  onClick: () => void
}

const MinuteDigit = ({ minute, x, y, isSelected, onClick }: MinuteDigitProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      className={cn(
        'absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto',
        'top-[calc(50%-14px)] left-[calc(50%-14px)]',
        'leading-7',
        'font-[var(--sinch-comp-time-picker-digit-font-default-minutes)]',
        isSelected
          ? 'font-[var(--sinch-comp-time-picker-digit-font-checked-minutes)] text-[var(--sinch-comp-time-picker-digit-color-checked-minute-initial)]'
          : 'text-[var(--sinch-comp-time-picker-digit-color-default-minute-initial)]'
      )}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      role="button"
      tabIndex={-1}
      aria-label={`${minute} minutes`}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onKeyDown={handleKeyDown}
    >
      {stringifyMinute(minute)}
    </div>
  )
}

// ============================================================================
// TimePicker Component
// ============================================================================

export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof timePickerVariants> {
  /**
   * Time value in ISO 8601 format (HH:mm:ss or HH:mm)
   */
  value?: string
  /**
   * Default time value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * AM/PM 12-hour clock system, `false` by default (24-hour)
   * @default false
   */
  ampm?: boolean
  /**
   * Accessible label for the time picker
   */
  'aria-label'?: string
  /**
   * Submit button accessible label
   */
  submitAriaLabel?: string
  /**
   * Allow clearing the selected time
   * @default false
   */
  clearable?: boolean
  /**
   * Callback when the time value is cleared
   */
  onClear?: () => void
  /**
   * Change handler - called when submit button is clicked
   * Returns time in ISO 8601 format (HH:mm:ss)
   */
  onChange?: (value: string) => void
}

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = '00:00:00',
      ampm = false,
      'aria-label': ariaLabel,
      submitAriaLabel = 'Submit',
      clearable = false,
      onClear,
      onChange,
      ...props
    },
    ref
  ) => {
    // Parse initial value
    const initialParsed = parseTime(controlledValue ?? defaultValue)
    const [internalHour, setInternalHour] = useState(initialParsed.hours)
    const [internalMinute, setInternalMinute] = useState(initialParsed.minutes)

    // Needle rotation tracking
    const [hourNeedleDeg, setHourNeedleDeg] = useState(0)
    const [minuteNeedleDeg, setMinuteNeedleDeg] = useState(0)

    // Refs for keyboard navigation
    const hourNeedleRef = useRef<HTMLDivElement>(null)
    const minuteNeedleRef = useRef<HTMLDivElement>(null)

    // Determine if controlled
    const isControlled = controlledValue !== undefined

    // Sync with controlled value
    useEffect(() => {
      if (isControlled) {
        const parsed = parseTime(controlledValue)
        setInternalHour(parsed.hours)
        setInternalMinute(parsed.minutes)
      }
    }, [isControlled, controlledValue])

    // Update needle positions when hour/minute changes
    useEffect(() => {
      const hourDigitIndex = internalHour % 12
      const newHourDeg = getShortestCssDeg(hourNeedleDeg, hourDigitIndex * 30)
      setHourNeedleDeg(newHourDeg)
    }, [internalHour]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      const newMinuteDeg = getShortestCssDeg(minuteNeedleDeg, internalMinute * 6)
      setMinuteNeedleDeg(newMinuteDeg)
    }, [internalMinute]) // eslint-disable-line react-hooks/exhaustive-deps

    const is24 = !ampm

    // Calculate digit positions
    const MINUTE_DIGIT_RADIUS = MINUTE_RADIUS + MINUTE_DIGIT_SIZE / 2
    const HOUR_12_DIGIT_RADIUS = HOUR_12_RADIUS + HOUR_12_DIGIT_SIZE / 2
    const HOUR_24_DIGIT_RADIUS = HOUR_24_RADIUS + HOUR_24_DIGIT_SIZE / 2

    // Generate hour 12 positions
    const hour12Positions = useMemo(() => {
      return Array.from({ length: 12 }, (_, i) => {
        const rad = Math.PI / 6 * (i - 3)
        const x = Math.cos(rad) * HOUR_12_DIGIT_RADIUS
        const y = Math.sin(rad) * HOUR_12_DIGIT_RADIUS
        return { hour: i, x, y }
      })
    }, [HOUR_12_DIGIT_RADIUS])

    // Generate hour 24 positions
    const hour24Positions = useMemo(() => {
      return Array.from({ length: 12 }, (_, i) => {
        const hour = i + 12
        const rad = Math.PI / 6 * (i - 3)
        const x = Math.cos(rad) * HOUR_24_DIGIT_RADIUS
        const y = Math.sin(rad) * HOUR_24_DIGIT_RADIUS
        return { hour, x, y }
      })
    }, [HOUR_24_DIGIT_RADIUS])

    // Generate minute positions
    const minutePositions = useMemo(() => {
      return Array.from({ length: 12 }, (_, i) => {
        const minute = i * 5
        const rad = Math.PI / 30 * (minute - 15)
        const x = Math.cos(rad) * MINUTE_DIGIT_RADIUS
        const y = Math.sin(rad) * MINUTE_DIGIT_RADIUS
        return { minute, x, y }
      })
    }, [MINUTE_DIGIT_RADIUS])

    // Get selected hour index
    const selectedHourIndex = hourToIndex(internalHour, is24)

    // Handle hour digit click
    const handleHourClick = useCallback((hour: number) => {
      setInternalHour(hour)
    }, [])

    // Handle minute digit click
    const handleMinuteClick = useCallback((minute: number) => {
      setInternalMinute(minute)
    }, [])

    // Handle picker click (for clicking between digits)
    const handlePickerClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const cx = rect.width / 2
      const cy = rect.height / 2
      const px = e.clientX - rect.left
      const py = rect.height - (e.clientY - rect.top)
      const dx = px - cx
      const dy = py - cy

      const len = Math.sqrt(dx * dx + dy * dy)
      const cosRad = dx / len
      const rad = Math.acos(cosRad * (dy < 0 ? -1 : 1))
      const deg = rad * (180 / Math.PI)

      let cssDeg = (deg - 90 - 360) % 360 * -1

      if (dy < 0) {
        cssDeg += 180
      }

      // Row 0: minutes, Row 1: hours 12, Row 2: hours 24
      const rowIndex = len > MINUTE_RADIUS ? 0 : len > HOUR_12_RADIUS ? 1 : 2
      const isHourRowClick = rowIndex > 0
      const isHour24RowClick = rowIndex > 1

      if (isHourRowClick) {
        const digitIndex = Math.round(cssDeg / 30) % 12

        if (is24) {
          if (isHour24RowClick) {
            setInternalHour(digitIndex === 0 ? 0 : digitIndex + 12)
          } else {
            setInternalHour(digitIndex === 0 ? 12 : digitIndex)
          }
        } else {
          const ampmOffset = internalHour >= 12 ? 12 : 0
          setInternalHour(digitIndex + ampmOffset)
        }
      } else {
        setInternalMinute(Math.round(cssDeg / 6) % 60)
      }
    }, [is24, internalHour])

    // Handle AM/PM change
    const handleAmPmChange = useCallback((value: string) => {
      if (value === 'am' && internalHour >= 12) {
        setInternalHour(internalHour - 12)
      } else if (value === 'pm' && internalHour < 12) {
        setInternalHour(internalHour + 12)
      }
    }, [internalHour])

    // Handle submit
    const handleSubmit = useCallback(() => {
      const timeValue = stringifyTime(internalHour, internalMinute)
      onChange?.(timeValue)
    }, [internalHour, internalMinute, onChange])

    // Handle clear
    const handleClear = useCallback(() => {
      setInternalHour(0)
      setInternalMinute(0)
      onClear?.()
      onChange?.('00:00:00')
    }, [onClear, onChange])

    // Handle keyboard navigation on hour needle
    const handleHourKeyDown = useCallback((e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          setInternalHour((h) => (h + 1) % 24)
          break
        case 'ArrowDown':
          e.preventDefault()
          setInternalHour((h) => (h + 23) % 24)
          break
      }
    }, [])

    // Handle keyboard navigation on minute needle
    const handleMinuteKeyDown = useCallback((e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          setInternalMinute((m) => (m + 1) % 60)
          break
        case 'ArrowDown':
          e.preventDefault()
          setInternalMinute((m) => (m + 59) % 60)
          break
      }
    }, [])

    // Calculate needle length based on current hour
    const needleHourLength = is24 && (internalHour <= 0 || internalHour > 12)
      ? NEEDLE_HOUR_24_LENGTH
      : NEEDLE_HOUR_12_LENGTH

    // Is minute on a 5-minute mark (for needle dot display)
    const isMinuteOnMark = internalMinute % 5 === 0

    // Current AM/PM value
    const ampmValue = internalHour >= 0 && internalHour < 12 ? 'am' : 'pm'

    return (
      <div
        ref={ref}
        className={cn(timePickerVariants(), className)}
        aria-label={ariaLabel}
        data-value={stringifyTime(internalHour, internalMinute)}
        {...props}
      >
        <div className="flex flex-col w-[var(--sinch-comp-time-picker-size-container-width,248px)] p-4 box-border gap-4">
          {/* Header */}
          <div
            className="relative w-full h-12 select-none"
            style={{
              font: 'var(--sinch-comp-time-picker-header-font)',
              lineHeight: '48px',
              color: 'var(--sinch-comp-time-picker-header-color-default-text-initial)',
            }}
          >
            {/* Hours display */}
            <div
              className="absolute p-0 px-1 w-[50px] outline-none right-[calc(50%+8px)] text-right"
              role="meter"
              aria-valuemin={0}
              aria-valuemax={is24 ? 23 : 12}
              aria-valuenow={internalHour}
              aria-valuetext={String(internalHour)}
            >
              <span>{stringifyHour(internalHour, is24)}</span>
            </div>

            {/* Colon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              :
            </div>

            {/* Minutes display */}
            <div
              className="absolute p-0 px-1 w-[50px] outline-none left-[calc(50%+8px)]"
              role="meter"
              aria-valuemin={0}
              aria-valuemax={59}
              aria-valuenow={internalMinute}
              aria-valuetext={String(internalMinute)}
            >
              <span>{stringifyMinute(internalMinute)}</span>
            </div>

            {/* Submit button */}
            <Button
              size="s"
              aria-label={submitAriaLabel}
              className="absolute right-0 top-1/2 -translate-y-1/2"
              onClick={handleSubmit}
              icon={
                <Icon
                  name="fa-check"
                  iconsVersion="2"
                  size="sm"
                  style={{
                    color: 'var(--sinch-comp-time-picker-header-color-default-icon-initial)',
                  }}
                />
              }
            />
          </div>

          {/* Clock Face */}
          <div
            className="relative w-[var(--sinch-comp-time-picker-size-clock-face,216px)] h-[var(--sinch-comp-time-picker-size-clock-face,216px)] rounded-full box-border cursor-pointer"
            style={{
              border: '2px solid var(--sinch-comp-time-picker-watch-face-color-default-border-initial)',
              backgroundColor: 'var(--sinch-comp-time-picker-watch-face-color-default-background-initial)',
              boxShadow: 'inset 0 1px 3px var(--sinch-comp-time-picker-watch-face-color-default-shadow-inner, rgba(0,0,0,0.06))',
            }}
            role="group"
            aria-label="Time picker clock face"
            onClick={handlePickerClick}
          >
            {/* Hours layer */}
            <div className="absolute inset-0 rounded-full pointer-events-none select-none">
              {/* 12-hour digits */}
              {hour12Positions.map(({ hour, x, y }) => (
                <HourDigit
                  key={`h12-${hour}`}
                  hour={hour}
                  x={x}
                  y={y}
                  is24Hour={false}
                  isSelected={!is24 ? selectedHourIndex === hour : selectedHourIndex === hour && internalHour > 0 && internalHour <= 12}
                  onClick={() => handleHourClick(hour)}
                />
              ))}

              {/* 24-hour digits (only shown in 24-hour mode) */}
              {is24 && hour24Positions.map(({ hour, x, y }) => (
                <HourDigit
                  key={`h24-${hour}`}
                  hour={hour}
                  x={x}
                  y={y}
                  is24Hour={true}
                  isSelected={selectedHourIndex === hour}
                  onClick={() => handleHourClick(hour)}
                />
              ))}
            </div>

            {/* Minutes layer */}
            <div className="absolute inset-0 rounded-full pointer-events-none select-none">
              {minutePositions.map(({ minute, x, y }) => (
                <MinuteDigit
                  key={`m-${minute}`}
                  minute={minute}
                  x={x}
                  y={y}
                  isSelected={internalMinute === minute}
                  onClick={() => handleMinuteClick(minute)}
                />
              ))}
            </div>

            {/* Touch area and needles */}
            <div className="absolute inset-0 cursor-pointer rounded-full">
              {/* Hour needle */}
              <div
                ref={hourNeedleRef}
                className={cn(
                  'absolute w-1 rounded-sm z-[2] outline-none',
                  'left-[calc(50%-2px)] bottom-1/2',
                  'origin-bottom',
                  'transition-[transform,height] duration-[250ms] ease-in-out',
                  'motion-reduce:transition-none',
                  'focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]'
                )}
                style={{
                  height: `${needleHourLength}px`,
                  transform: `rotate(${hourNeedleDeg}deg)`,
                  backgroundColor: 'var(--sinch-comp-time-picker-needle-color-default-background-initial)',
                }}
                tabIndex={0}
                role="slider"
                aria-label="Hour selector"
                aria-valuemin={0}
                aria-valuemax={is24 ? 23 : 12}
                aria-valuenow={internalHour}
                aria-valuetext={`${internalHour} o'clock`}
                onKeyDown={handleHourKeyDown}
              />

              {/* Minute needle */}
              <div
                ref={minuteNeedleRef}
                className={cn(
                  'absolute w-0.5 rounded-[1px] z-[2] outline-none',
                  'left-[calc(50%-1px)] bottom-1/2',
                  'origin-bottom',
                  'transition-[transform,height] duration-[250ms] ease-in-out',
                  'motion-reduce:transition-none',
                  'focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]'
                )}
                style={{
                  height: `${NEEDLE_MINUTE_LENGTH}px`,
                  transform: `rotate(${minuteNeedleDeg}deg)`,
                  backgroundColor: 'var(--sinch-comp-time-picker-needle-color-default-background-initial)',
                }}
                tabIndex={0}
                role="slider"
                aria-label="Minute selector"
                aria-valuemin={0}
                aria-valuemax={59}
                aria-valuenow={internalMinute}
                aria-valuetext={`${internalMinute} minutes`}
                onKeyDown={handleMinuteKeyDown}
              >
                {/* Dot at end of minute needle when not on 5-min mark */}
                {!isMinuteOnMark && (
                  <div
                    className="absolute w-1 h-1 rounded-full -left-[1px] -top-4"
                    style={{
                      backgroundColor: 'var(--sinch-comp-time-picker-digit-color-checked-minute-initial)',
                    }}
                  />
                )}
              </div>

              {/* Center dot */}
              <div
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  backgroundColor: 'var(--sinch-comp-time-picker-needle-color-default-background-initial)',
                }}
              />
            </div>
          </div>

          {/* AM/PM Footer (only shown when ampm is true) */}
          {ampm && (
            <div className="flex justify-center w-full h-8">
              <SegmentedControl
                value={ampmValue}
                aria-label="AM/PM selection"
                onChange={handleAmPmChange}
              >
                <SegmentedControlOption
                  value="am"
                  text="AM"
                  aria-label="AM"
                  isFirst
                />
                <SegmentedControlOption
                  value="pm"
                  text="PM"
                  aria-label="PM"
                  isLast
                />
              </SegmentedControl>
            </div>
          )}

          {/* Clear button */}
          {clearable && (internalHour !== 0 || internalMinute !== 0) && (
            <div className="flex justify-end px-4 pb-2">
              <Button
                size="s"
                variant="subtle-secondary"
                text="Clear"
                aria-label="Clear selected time"
                onClick={handleClear}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
)
TimePicker.displayName = 'TimePicker'
