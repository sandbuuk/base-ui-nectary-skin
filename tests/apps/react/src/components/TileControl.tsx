import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { FC } from 'react'
import '@nectary/components/tile-control'
import '@nectary/components/tile-control-option'
import '@nectary/components/icon'
import '@nectary/assets/icons-branded/contact'

export const TileControl: FC = () => {
  const [search] = useComponentSearchParams('tile-control')
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-tile-control-change', { detail: value }))
    setValue(value)
  }
  const onFocus = () => window.dispatchEvent(new CustomEvent('sinch-tile-control-focus'))
  const onBlur = () => window.dispatchEvent(new CustomEvent('sinch-tile-control-focus'))
  const isSingleOption = search.get('single') !== null
  const isSmall = search.get('small') !== null
  const isMultiple = search.get('multiple') !== null
  const numCols = (() => {
    const val = search.get('cols')

    return val !== null ? parseInt(val) : 1
  })()

  return (
    <sinch-tile-control
      value={value}
      small={isSmall}
      multiple={isMultiple}
      cols={numCols}
      on-change={onChange}
      aria-label="Tile Control"
    >
      <sinch-tile-control-option
        value="0"
        text="Message"
        aria-label="Message"
        on-focus={onFocus}
        on-blur={onBlur}
      >
        <sinch-icon icons-version="2" name="fa-message" slot="icon"/>
      </sinch-tile-control-option>
      {!isSingleOption && (
        <>
          <sinch-tile-control-option
            value="1"
            text="Title"
            aria-label="Title"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="fa-t" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="2"
            text="Text"
            aria-label="Text"
            disabled
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="fa-align-left" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="3"
            text="QR Code"
            aria-label="qr code"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="fa-qrcode" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="4"
            text="Terms"
            aria-label="terms"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="fa-square-check" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="5"
            text="Button"
            aria-label="button"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="ai" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="6"
            text="Mobile App"
            aria-label="mobile app"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="fa-house-heart" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="7"
            text="Click to call"
            aria-label="click to call"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon icons-version="2" name="camera" slot="icon"/>
          </sinch-tile-control-option>
          <sinch-tile-control-option
            value="8"
            text="Separator"
            aria-label="separator"
            on-focus={onFocus}
            on-blur={onBlur}
          >
            <sinch-icon-branded-contact slot="icon"/>
          </sinch-tile-control-option>
        </>
      )}
    </sinch-tile-control>
  )
}
