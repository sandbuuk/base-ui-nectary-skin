import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--sinch-sys-color-primary-default)',
          hover: 'var(--sinch-sys-color-primary-hover)',
          active: 'var(--sinch-sys-color-primary-active)',
          disabled: 'var(--sinch-sys-color-primary-disabled)',
          foreground: 'var(--sinch-sys-color-primary-foreground)',
        },
        surface: {
          canvas: 'var(--sinch-sys-color-surface-canvas)',
          primary: {
            DEFAULT: 'var(--sinch-sys-color-surface-primary-default)',
            hover: 'var(--sinch-sys-color-surface-primary-hover)',
            active: 'var(--sinch-sys-color-surface-primary-active)',
            disabled: 'var(--sinch-sys-color-surface-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--sinch-sys-color-surface-secondary-default)',
            hover: 'var(--sinch-sys-color-surface-secondary-hover)',
            active: 'var(--sinch-sys-color-surface-secondary-active)',
          },
          tertiary: {
            DEFAULT: 'var(--sinch-sys-color-surface-tertiary-default)',
            hover: 'var(--sinch-sys-color-surface-tertiary-hover)',
            active: 'var(--sinch-sys-color-surface-tertiary-active)',
          },
          transparent: {
            DEFAULT: 'var(--sinch-sys-color-surface-transparent-default)',
            hover: 'var(--sinch-sys-color-surface-transparent-hover)',
            active: 'var(--sinch-sys-color-surface-transparent-active)',
          },
        },
        foreground: {
          DEFAULT: 'var(--sinch-sys-color-text-default)',
          muted: 'var(--sinch-sys-color-text-muted)',
          caption: 'var(--sinch-sys-color-text-caption)',
          disabled: 'var(--sinch-sys-color-text-disabled)',
        },
        border: {
          DEFAULT: 'var(--sinch-sys-color-border-default)',
          subtle: 'var(--sinch-sys-color-border-subtle)',
          strong: 'var(--sinch-sys-color-border-strong)',
          disabled: 'var(--sinch-sys-color-border-disabled)',
        },
        danger: {
          DEFAULT: 'var(--sinch-sys-color-feedback-danger-default)',
          strong: 'var(--sinch-sys-color-feedback-danger-strong)',
          subtle: 'var(--sinch-sys-color-feedback-danger-subtle)',
        },
        success: {
          DEFAULT: 'var(--sinch-sys-color-feedback-success-default)',
          strong: 'var(--sinch-sys-color-feedback-success-strong)',
          subtle: 'var(--sinch-sys-color-feedback-success-subtle)',
        },
        warning: {
          DEFAULT: 'var(--sinch-sys-color-feedback-warning-default)',
          strong: 'var(--sinch-sys-color-feedback-warning-strong)',
          subtle: 'var(--sinch-sys-color-feedback-warning-subtle)',
        },
        info: {
          DEFAULT: 'var(--sinch-sys-color-feedback-info-default)',
          strong: 'var(--sinch-sys-color-feedback-info-strong)',
          subtle: 'var(--sinch-sys-color-feedback-info-subtle)',
        },
        focus: 'var(--sinch-sys-color-focus)',
        pure: 'var(--sinch-sys-color-basic-pure)',
        'pure-inverted': 'var(--sinch-sys-color-basic-pure-inverted)',
      },
      borderRadius: {
        none: '0',
        xs: 'var(--sinch-sys-shape-radius-xs)',
        sm: 'var(--sinch-sys-shape-radius-s)',
        md: 'var(--sinch-sys-shape-radius-m)',
        lg: 'var(--sinch-sys-shape-radius-l)',
        full: 'var(--sinch-sys-shape-radius-full)',
      },
      height: {
        xs: 'var(--sinch-sys-size-xs)',
        sm: 'var(--sinch-sys-size-s)',
        md: 'var(--sinch-sys-size-m)',
        lg: 'var(--sinch-sys-size-l)',
      },
      fontFamily: {
        sans: ['var(--sinch-ref-typography-font-family-main)', 'sans-serif'],
        mono: ['var(--sinch-ref-typography-font-family-mono)', 'monospace'],
      },
      boxShadow: {
        focus: '0 0 0 2px var(--sinch-sys-color-focus)',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid var(--sinch-sys-color-focus)',
            outlineOffset: '2px',
          },
        },
      })
    }),
  ],
}

export default config
