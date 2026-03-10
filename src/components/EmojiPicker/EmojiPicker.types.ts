export interface EmojiPickerProps {
  /** Emoji selection handler */
  onSelect?: (emoji: string) => void
  /** Additional CSS class */
  className?: string
  /** Additional inline style */
  style?: React.CSSProperties
}
