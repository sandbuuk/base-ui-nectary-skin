import {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Button } from '../button'
import { ColorMenu, ColorMenuOption } from '../color-menu'
import { ColorSwatch, type SkinToneColor } from '../color-swatch'
import { Emoji } from '../emoji'
import { Icon } from '../icon'
import { Input } from '../input'
import { Popover } from '../popover'
import { Tabs, TabsIconOption } from '../tabs'
import { Text } from '../text'
import emojiData from './data.json'

/**
 * EmojiPicker - A component for selecting emojis with category navigation,
 * search functionality, and skin tone selection.
 */

// ============================================================================
// Types
// ============================================================================

export interface EmojiData {
  emoji: string
  code?: string
  label: string
  skins?: EmojiData[]
  tone: number | number[]
}

export interface EmojiGroup {
  name: string
  emojis: EmojiData[]
}

// ============================================================================
// Constants
// ============================================================================

const data = emojiData as EmojiGroup[]
const MIN_SEARCH_LENGTH = 2
const SEARCH_DEBOUNCE_MS = 300

const GROUP_LABELS = [
  'Emotions',
  'People',
  'Animals and nature',
  'Food and drinks',
  'Travel and places',
  'Sports and activities',
  'Objects',
  'Symbols and flags',
]

const SKIN_TONES: { name: SkinToneColor; value: number }[] = [
  { name: 'skintone-default', value: 0 },
  { name: 'skintone-light', value: 1 },
  { name: 'skintone-light-medium', value: 2 },
  { name: 'skintone-medium', value: 3 },
  { name: 'skintone-medium-dark', value: 4 },
  { name: 'skintone-dark', value: 5 },
]

// Category icons as SVG components
const CategoryIcons = {
  emotions: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm4.41-6.11a.745.745 0 0 0-1.03.24A3.98 3.98 0 0 1 12 16c-1.38 0-2.64-.7-3.38-1.88a.747.747 0 1 0-1.27.79A5.446 5.446 0 0 0 12 17.5c1.9 0 3.63-.97 4.65-2.58.22-.35.11-.81-.24-1.03Z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.023 5.023 0 0 1-4.92-4.15.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14A7.037 7.037 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41l-3.76-3.77Z" />
    </svg>
  ),
  animals: (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
      <path d="M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5Zm-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13ZM7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5Zm7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56A2.5 2.5 0 0 1 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73a2.5 2.5 0 0 1-2.5 2.5Zm-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Zm-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Z" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M19 19H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1Zm1-16H9v2.4l1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V7.24c0-.15.07-.3.19-.39L8 5.4V3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 5h-2V5h2v3Z" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="m21.99 14.77-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01l-.01-5.24Zm-10.38-1.43.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66Zm.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" />
      <path d="M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5Z" />
      <path d="M7 11H5v2h2v-2Zm5-6h-2v2h2V5ZM7 15H5v2h2v-2Zm0 4H5v2h2v-2Z" />
    </svg>
  ),
  sports: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-3.54 3.53c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.42 0l3.53-3.54c1.61-1.61 3.92-1.33 5.5-1.35 1.58-.02 3.86-.94 5.46-2.54 2.93-2.92 3.41-7.2 1.07-9.54Zm-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72 2.11-2.11 5.18-2.59 6.72-1.06 1.53 1.53 1.05 4.61-1.06 6.72-2.11 2.11-5.18 2.59-6.72 1.06ZM18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58-.53 0-1.04-.21-1.41-.59-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58Zm0-2a3.998 3.998 0 0 0-2.83 6.83c.78.78 1.81 1.17 2.83 1.17a3.998 3.998 0 0 0 2.83-6.83A3.998 3.998 0 0 0 18 15Z" />
    </svg>
  ),
  objects: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7Zm.5 11h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.83V14Zm1 5c-.01 0-.02-.01-.03-.01V19h-2.94v-.01c-.01 0-.02.01-.03.01-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.01 0 .02.01.03.01V18h2.94v.01c.01 0 .02-.01.03-.01.28 0 .5.22.5.5s-.22.5-.5.5Zm0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
    </svg>
  ),
  symbols: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="w-full h-full fill-current">
      <path d="M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1Zm0-3H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1Zm10.89 11.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41ZM14.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-4-10A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5Zm-5.05 7.09a.996.996 0 1 0-1.41-1.41l-.71.71-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.48 1.14.72 1.78.72.64 0 1.28-.24 1.77-.73l1.06-1.06.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71.71-.71Zm-4.6-3.89a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35Zm0 5.65a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35l1.06-1.06.71.71-1.07 1.05Z" />
    </svg>
  ),
}

const CATEGORY_ICON_MAP: Record<string, React.ReactNode> = {
  'smileys-emotion': CategoryIcons.emotions,
  'people-body': CategoryIcons.people,
  'animals-nature': CategoryIcons.animals,
  'food-drink': CategoryIcons.food,
  'travel-places': CategoryIcons.travel,
  'activities': CategoryIcons.sports,
  'objects': CategoryIcons.objects,
  'symbols': CategoryIcons.symbols,
}

// ============================================================================
// Variants
// ============================================================================

const emojiPickerVariants = cva(
  // Base styles
  'block',
  {
    variants: {},
    defaultVariants: {},
  }
)

const wrapperVariants = cva(
  // Wrapper styles from template.html #wrapper
  [
    'w-96',
    'max-h-[504px]',
    'flex',
    'flex-col',
    'gap-2',
    'py-3',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const toolbarVariants = cva(
  // Toolbar styles from template.html #toolbar
  ['flex', 'gap-2', 'px-3'],
  {
    variants: {},
    defaultVariants: {},
  }
)

const listWrapperVariants = cva(
  // List wrapper styles from template.html #list-wrapper
  [
    'overflow-y-auto',
    'overflow-x-hidden',
    'w-96',
    'box-border',
    'scrollbar-gutter-stable',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const listVariants = cva(
  // List styles from template.html #list
  [
    'flex',
    'flex-wrap',
    'gap-2',
    'px-3',
    'pt-1',
    'w-96',
    'box-border',
  ],
  {
    variants: {},
    defaultVariants: {},
  }
)

const notFoundVariants = cva(
  // Not found styles from template.html #not-found
  [
    'w-full',
    'h-12',
    'items-center',
    'justify-center',
    'pointer-events-none',
    'select-none',
    'text-[var(--sinch-comp-emoji-picker-color-default-text-not-found,var(--sinch-sys-color-text-muted))]',
  ],
  {
    variants: {
      visible: {
        true: 'flex',
        false: 'hidden',
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
)

// ============================================================================
// Props
// ============================================================================

export interface EmojiPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof emojiPickerVariants> {
  /**
   * Base URL for emoji images. Use %s as placeholder for the codepoint.
   */
  emojiBaseUrl?: string
  /**
   * Callback when an emoji is selected
   */
  onChange?: (emoji: string) => void
}

// ============================================================================
// Component
// ============================================================================

export const EmojiPicker = forwardRef<HTMLDivElement, EmojiPickerProps>(
  ({ className, emojiBaseUrl, onChange, ...props }, ref) => {
    // State
    const [searchValue, setSearchValue] = useState('')
    const [activeTab, setActiveTab] = useState(data[0]?.name ?? '')
    const [skinTone, setSkinTone] = useState(0)
    const [skinToneName, setSkinToneName] = useState<SkinToneColor>('skintone-default')
    const [skinPopoverOpen, setSkinPopoverOpen] = useState(false)
    const [prevTabValue, setPrevTabValue] = useState<string | null>(null)

    // Search mode detection
    const isSearchMode = activeTab.length === 0

    // Debounced search
    const [debouncedSearch, setDebouncedSearch] = useState('')

    // Debounce search input
    const handleSearchChange = useCallback((value: string) => {
      setSearchValue(value)

      // Clear debounce timer and set new one
      const timer = setTimeout(() => {
        setDebouncedSearch(value)

        if (value.length >= MIN_SEARCH_LENGTH) {
          // Enter search mode
          if (activeTab.length > 0) {
            setPrevTabValue(activeTab)
            setActiveTab('')
          }
        } else if (prevTabValue !== null) {
          // Exit search mode
          setActiveTab(prevTabValue)
          setPrevTabValue(null)
        }
      }, SEARCH_DEBOUNCE_MS)

      return () => clearTimeout(timer)
    }, [activeTab, prevTabValue])

    // Handle tab change
    const handleTabChange = useCallback((value: string) => {
      setActiveTab(value)
      setSearchValue('')
      setDebouncedSearch('')
      setPrevTabValue(null)
    }, [])

    // Handle clear search
    const handleClearSearch = useCallback(() => {
      setSearchValue('')
      setDebouncedSearch('')

      if (prevTabValue !== null) {
        setActiveTab(prevTabValue)
        setPrevTabValue(null)
      }
    }, [prevTabValue])

    // Handle skin tone change
    const handleSkinToneChange = useCallback((value: string) => {
      const tone = SKIN_TONES.find((t) => t.name === value)

      if (tone !== undefined) {
        setSkinTone(tone.value)
        setSkinToneName(tone.name)
      }

      setSkinPopoverOpen(false)
    }, [])

    // Handle emoji click
    const handleEmojiClick = useCallback(
      (emoji: string) => {
        onChange?.(emoji)
      },
      [onChange]
    )

    // Filter emojis for search
    const getSearchEmojis = useMemo(() => {
      if (debouncedSearch.length < MIN_SEARCH_LENGTH) {
        return []
      }

      const searchLower = debouncedSearch.toLowerCase()
      const results: EmojiData[] = []

      for (const group of data) {
        for (const entry of group.emojis) {
          if (entry.label.toLowerCase().includes(searchLower)) {
            const hasSkins = entry.skins !== undefined && entry.skins.length > 0

            if (skinTone === 0 || !hasSkins) {
              results.push(entry)
            } else if (hasSkins) {
              for (const skin of entry.skins!) {
                if (
                  skinTone === skin.tone ||
                  (Array.isArray(skin.tone) && skin.tone.includes(skinTone))
                ) {
                  results.push(skin)
                }
              }
            }
          }
        }
      }

      return results
    }, [debouncedSearch, skinTone])

    // Filter emojis for current group
    const getGroupEmojis = useMemo(() => {
      if (isSearchMode) {
        return []
      }

      const group = data.find((g) => g.name === activeTab)

      if (group === undefined) {
        return []
      }

      const results: EmojiData[] = []

      for (const entry of group.emojis) {
        const hasSkins = entry.skins !== undefined && entry.skins.length > 0

        if (skinTone === 0 || !hasSkins) {
          results.push(entry)
        } else if (hasSkins) {
          for (const skin of entry.skins!) {
            if (
              skinTone === skin.tone ||
              (Array.isArray(skin.tone) && skin.tone.includes(skinTone))
            ) {
              results.push(skin)
            }
          }
        }
      }

      return results
    }, [activeTab, isSearchMode, skinTone])

    // Get emojis to display
    const emojisToDisplay = isSearchMode ? getSearchEmojis : getGroupEmojis
    const showNotFound = isSearchMode && emojisToDisplay.length === 0 && debouncedSearch.length >= MIN_SEARCH_LENGTH

    // Skin tone popover content
    const skinTonePopoverContent = (
      <ColorMenu
        value={skinToneName}
        cols={1}
        aria-label="Emoji skin tone menu"
        onChange={handleSkinToneChange}
      >
        {SKIN_TONES.map((tone) => (
          <ColorMenuOption key={tone.name} value={tone.name} />
        ))}
      </ColorMenu>
    )

    return (
      <div
        ref={ref}
        className={cn(emojiPickerVariants(), className)}
        {...props}
      >
        <div className={cn(wrapperVariants())}>
          {/* Toolbar */}
          <div className={cn(toolbarVariants())}>
            {/* Search input */}
            <Input
              size="l"
              aria-label="Search emojis"
              value={searchValue}
              onChange={handleSearchChange}
              icon={<Icon name="magnifying-glass" iconsVersion="2" />}
              rightAddon={
                searchValue.length > 0 && (
                  <Button
                    size="s"
                    aria-label="Clear"
                    icon={<Icon name="fa-xmark" iconsVersion="2" />}
                    onClick={handleClearSearch}
                  />
                )
              }
              className="flex-1 min-w-0"
            />

            {/* Skin tone selector */}
            <Popover
              open={skinPopoverOpen}
              orientation="bottom-left"
              aria-label="Emoji skin tone select"
              content={skinTonePopoverContent}
              onClose={() => setSkinPopoverOpen(false)}
            >
              <Button
                size="l"
                aria-label="Select emoji skin tones"
                icon={<ColorSwatch name={skinToneName} />}
                onClick={() => setSkinPopoverOpen(!skinPopoverOpen)}
              />
            </Popover>
          </div>

          {/* Category tabs */}
          <Tabs
            value={activeTab}
            aria-label="Emoji groups"
            onChange={handleTabChange}
          >
            {data.map((group, index) => (
              <TabsIconOption
                key={group.name}
                value={group.name}
                aria-label={GROUP_LABELS[index] ?? group.name}
                icon={
                  <span
                    className={cn(
                      'w-5 h-5',
                      '[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]'
                    )}
                  >
                    {CATEGORY_ICON_MAP[group.name] ?? CategoryIcons.emotions}
                  </span>
                }
              />
            ))}
          </Tabs>

          {/* Emoji list */}
          <div className={cn(listWrapperVariants())}>
            <div className={cn(listVariants())}>
              {emojisToDisplay.map((emoji, index) => (
                <Button
                  key={`${emoji.emoji}-${index}`}
                  size="s"
                  aria-label={emoji.label}
                  data-value={emoji.emoji}
                  icon={
                    <Emoji
                      char={emoji.emoji}
                      baseUrl={emojiBaseUrl}
                      size="sm"
                    />
                  }
                  onClick={() => handleEmojiClick(emoji.emoji)}
                />
              ))}
            </div>

            {/* Not found message */}
            <div className={cn(notFoundVariants({ visible: showNotFound }))}>
              <Text type="m">No results</Text>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
EmojiPicker.displayName = 'EmojiPicker'
