import { useState, useMemo } from 'react'
import { Popover as BasePopover } from '@base-ui-components/react/popover'
import type { EmojiPickerProps } from './EmojiPicker.types'
import { EMOJI_DATA } from './emojis'
import styles from './EmojiPicker.module.css'

export function EmojiPicker({
  onSelect,
  className,
  style,
}: EmojiPickerProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (search.length < 2) return EMOJI_DATA[activeTab].emojis
    const q = search.toLowerCase()
    const all: string[] = []
    for (const cat of EMOJI_DATA) {
      for (const e of cat.emojis) {
        if (e.includes(q)) all.push(e)
      }
    }
    return all
  }, [activeTab, search])

  return (
    <BasePopover.Root>
      <BasePopover.Trigger
        className={[styles.trigger, className].filter(Boolean).join(' ')}
        style={style}
        aria-label="Pick emoji"
      >
        😀
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={4}>
          <BasePopover.Popup className={styles.picker}>
            <div className={styles.search}>
              <input
                className={styles.searchInput}
                placeholder="Search emoji..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className={styles.tabs}>
              {EMOJI_DATA.map((cat, i) => (
                <button
                  key={cat.label}
                  className={[styles.tab, i === activeTab ? styles.tabActive : ''].join(' ')}
                  onClick={() => { setActiveTab(i); setSearch('') }}
                  aria-label={cat.label}
                  type="button"
                >
                  {cat.icon}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.length === 0 ? (
                <div className={styles.empty} style={{ gridColumn: '1 / -1' }}>
                  No emojis found
                </div>
              ) : (
                filtered.map((emoji, i) => (
                  <button
                    key={`${emoji}-${i}`}
                    className={styles.emoji}
                    onClick={() => onSelect?.(emoji)}
                    type="button"
                    aria-label={emoji}
                  >
                    {emoji}
                  </button>
                ))
              )}
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  )
}
