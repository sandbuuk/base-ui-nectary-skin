/**
 * CSS custom property names for Nectary design tokens.
 * Use these constants when applying tokens dynamically in JS/TS.
 *
 * Example:
 *   element.style.setProperty(color.actionPrimary, '#...')
 *   or reference via: `var(${color.actionPrimary})`
 */

export const color = {
  // Action
  actionPrimary: '--sinch-color-action-primary',
  actionPrimaryHover: '--sinch-color-action-primary-hover',
  actionPrimaryActive: '--sinch-color-action-primary-active',
  actionSecondary: '--sinch-color-action-secondary',
  actionDestructive: '--sinch-color-action-destructive',

  // On-action (text/icon on colored backgrounds)
  onActionPrimary: '--sinch-color-on-action-primary',
  onActionSecondary: '--sinch-color-on-action-secondary',

  // Surface
  surfacePrimaryDefault: '--sinch-sys-color-surface-primary-default',
  surfaceSecondary: '--sinch-sys-color-surface-secondary',
  surfaceOverlay: '--sinch-sys-color-surface-overlay',

  // Text
  textPrimary: '--sinch-sys-color-text-primary',
  textSecondary: '--sinch-sys-color-text-secondary',
  textDisabled: '--sinch-sys-color-text-disabled',
  textOnColor: '--sinch-sys-color-text-on-color',

  // Icon
  iconPrimary: '--sinch-sys-color-icon-primary',
  iconSecondary: '--sinch-sys-color-icon-secondary',
  iconDisabled: '--sinch-sys-color-icon-disabled',

  // Border
  borderDefault: '--sinch-sys-color-border-default',
  borderFocus: '--sinch-sys-color-border-focus',
  borderInvalid: '--sinch-sys-color-border-invalid',

  // Status
  statusSuccess: '--sinch-sys-color-status-success',
  statusWarning: '--sinch-sys-color-status-warning',
  statusError: '--sinch-sys-color-status-error',
  statusInfo: '--sinch-sys-color-status-info',
} as const

export const spacing = {
  '0': '--sinch-spacing-0',
  '1': '--sinch-spacing-1',
  '2': '--sinch-spacing-2',
  '3': '--sinch-spacing-3',
  '4': '--sinch-spacing-4',
  '5': '--sinch-spacing-5',
  '6': '--sinch-spacing-6',
  '7': '--sinch-spacing-7',
  '8': '--sinch-spacing-8',
} as const

export const radius = {
  xs: '--sinch-radius-xs',
  s: '--sinch-radius-s',
  m: '--sinch-radius-m',
  l: '--sinch-radius-l',
  xl: '--sinch-radius-xl',
  full: '--sinch-radius-full',
} as const

export const font = {
  labelXs: '--sinch-font-label-xs',
  labelS: '--sinch-font-label-s',
  labelM: '--sinch-font-label-m',
  labelL: '--sinch-font-label-l',
  bodyS: '--sinch-font-body-s',
  bodyM: '--sinch-font-body-m',
  bodyL: '--sinch-font-body-l',
  headingS: '--sinch-font-heading-s',
  headingM: '--sinch-font-heading-m',
  headingL: '--sinch-font-heading-l',
  headingXl: '--sinch-font-heading-xl',
} as const

export const size = {
  iconXs: '--sinch-size-icon-xs',
  iconS: '--sinch-size-icon-s',
  iconM: '--sinch-size-icon-m',
  iconL: '--sinch-size-icon-l',
  iconXl: '--sinch-size-icon-xl',
} as const

export type TokenKey<T extends Record<string, string>> = keyof T
export type TokenValue<T extends Record<string, string>> = T[keyof T]
