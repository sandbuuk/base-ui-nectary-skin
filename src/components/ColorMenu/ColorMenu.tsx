import { Popover as BasePopover } from '@base-ui-components/react/popover'
import type { ColorMenuProps } from './ColorMenu.types'
import styles from './ColorMenu.module.css'

const DEFAULT_COLORS = [
  '#D63F3F', '#F58B4E', '#FFBE3C', '#53BD69', '#006063',
  '#3089F0', '#7B61FF', '#E056A0', '#8B6914', '#1A2126',
  '#9EA9B0', '#DCE2E5', '#F7F9FA', '#FFFFFF',
]

export function ColorMenu({
  value,
  onValueChange,
  colors = DEFAULT_COLORS,
  columns = 5,
  'aria-label': ariaLabel = 'Select color',
  className,
  style,
}: ColorMenuProps) {
  return (
    <BasePopover.Root>
      <BasePopover.Trigger
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        style={style}
        aria-label={ariaLabel}
      >
        <span
          className={styles.triggerSwatch}
          style={{ background: value || 'linear-gradient(135deg, #7B61FF, #FFBE3C, #53BD69, #3089F0)' }}
        />
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={4}>
          <BasePopover.Popup
            className={styles.grid}
            style={{
              gridTemplateColumns: `repeat(${columns}, 32px)`,
              background: 'var(--sinch-sys-color-surface-primary-default, #fff)',
              borderRadius: 'var(--sinch-radius-m, 10px)',
              boxShadow: 'var(--sinch-shadow-2, 1px 4px 8px #0A273D1A)',
              border: '1px solid var(--sinch-sys-color-border-subtle, #DCE2E5)',
            }}
          >
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onValueChange?.(color)}
                aria-label={`Select ${color}`}
                aria-pressed={value === color}
                type="button"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: color,
                  border: value === color ? '2px solid var(--sinch-sys-color-text-primary, #1A2126)' : '2px solid transparent',
                  cursor: 'pointer',
                  padding: 0,
                  outline: 'none',
                  transition: 'transform 150ms ease, border-color 150ms ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.15)' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)' }}
              />
            ))}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
