import { useRef, useState } from 'react'
import type { CSSProperties, FC } from 'react'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/popover'
import '@nectary/components/field'
import '@nectary/components/input'
import '@nectary/components/text'
import '@nectary/components/spinner'
import '@nectary/components/button'
import '@nectary/components/icon'

const inputWidth: CSSProperties = {
  width: 300,
}
const noResultsStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 100,
}

const NoResults: FC<{ slot: string }> = ({ slot }) => (
  <div slot={slot} style={noResultsStyle}>
    <sinch-text type="s">No Results</sinch-text>
  </div>
)

export const SearchExample: FC = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [isClearButtonActive, setClearButtonActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchData, setSearchData] = useState<string[]>([])
  const [isLoading, setLoading] = useState(false)
  const inputRef = useRef<HTMLElementTagNameMap['sinch-input']>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const onInputChange = async (e: CustomEvent<string>) => {
    setInputValue(e.detail)
    setClearButtonActive(e.detail.length > 0)
    setSearchData([])
    setPopoverOpen(false)

    if (abortControllerRef.current !== null) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
      setLoading(false)
    }

    if (e.detail.length > 0) {
      setLoading(true)
      abortControllerRef.current = new AbortController()

      const res = await fetch(
        'https://unpkg.com/cat-names@3.1.0/cat-names.json',
        { signal: abortControllerRef.current.signal }
      )
      const json = await res.json()

      // Additional wait, to showcase Skeleton loading
      await new Promise((res) => setTimeout(res, 2000))

      const searchString = e.detail.toLowerCase()
      const data = json.filter((text: string) => {
        return text.toLowerCase().startsWith(searchString)
      })

      abortControllerRef.current = null
      setSearchData(data)
      setLoading(false)
      setPopoverOpen(data.length > 0)
    }
  }

  const onClearClick = () => {
    setInputValue('')
    setClearButtonActive(false)
    inputRef.current!.focus()
  }

  const onMenuItemClick = (text: string) => {
    setInputValue(text)
    setClearButtonActive(true)
    setPopoverOpen(false)
  }

  const onPopoverClose = () => setPopoverOpen(false)

  return (
    <sinch-field
      label="Search"
      style={inputWidth}
    >
      <sinch-popover
        slot="input"
        orientation="bottom"
        open={isPopoverOpen}
        aria-label="Search autocomplete"
        on-close={onPopoverClose}
      >
        <sinch-input
          slot="target"
          ref={inputRef}
          aria-label="Search"
          value={inputValue}
          on-change={onInputChange}
        >
          <sinch-icon icons-version="2" name="magnifying-glass" slot="icon"/>
          {!isLoading && isClearButtonActive && (
            <sinch-button slot="right" on-click={onClearClick} aria-label="Clear search">
              <sinch-icon icons-version="2" name="fa-xmark" slot="icon"/>
            </sinch-button>
          )}
          {isLoading && <sinch-spinner slot="right"/>}
        </sinch-input>
        {!isLoading && searchData.length === 0 && <NoResults slot="content"/>}
        {searchData.length > 0 && (
          <sinch-action-menu
            slot="content"
            rows={3}
            aria-label="Search autocomplete"
          >
            {
              searchData.map((text) => (
                <sinch-action-menu-option
                  key={text}
                  text={text}
                  aria-label={text}
                  on-click={() => onMenuItemClick(text)}
                />
              ))
            }
          </sinch-action-menu>
        )}
      </sinch-popover>
    </sinch-field>
  )
}
