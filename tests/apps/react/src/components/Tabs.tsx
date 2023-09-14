import { useState } from 'react'
import type { FC } from 'react'
import '@nectary/components/tabs'
import '@nectary/components/tabs-option'
import '@nectary/components/tabs-icon-option'
import '@nectary/assets/icons/open-in-new'

type TTabs = {
  search: URLSearchParams,
}

export const Tabs: FC<TTabs> = ({ search }) => {
  const [value, setValue] = useState('')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-tabs-change', { detail: value }))
    setValue(value)
  }

  const isDisabled = search.get('disabled') !== null

  if (search.get('example') === 'single-icon') {
    return (
      <sinch-tabs
        value={value}
        on-change={onChange}
        aria-label="Tabs"
      >
        <sinch-tabs-icon-option
          value="1"
          disabled={isDisabled}
          aria-label="Tab"
        >
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-icon-option>
      </sinch-tabs>
    )
  }

  if (search.get('example') === 'icons') {
    return (
      <sinch-tabs
        value={value}
        on-change={onChange}
        aria-label="Tabs"
      >
        <sinch-tabs-icon-option value="1" aria-label="">
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option value="2" disabled aria-label="">
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option value="3" aria-label="">
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-icon-option>
        <sinch-tabs-icon-option value="4" aria-label="">
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-icon-option>
      </sinch-tabs>
    )
  }

  if (search.get('example') === 'single') {
    return (
      <sinch-tabs
        value={value}
        on-change={onChange}
        aria-label="Tabs"
      >
        <sinch-tabs-option
          value="1"
          text="Tab label"
          disabled={isDisabled}
          aria-label="Tab"
        >
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-tabs-option>
      </sinch-tabs>
    )
  }

  return (
    <sinch-tabs value={value} on-change={onChange} aria-label="Tabs">
      <sinch-tabs-option value="1" text="Short" aria-label="">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-tabs-option>
      <sinch-tabs-option value="2" text="Option value 2" disabled aria-label="">
        <sinch-icon-open-in-new slot="icon"/>
      </sinch-tabs-option>
      <sinch-tabs-option value="3" text="Long option text text" aria-label=""/>
      <sinch-tabs-option value="4" text="Option value 4" aria-label=""/>
    </sinch-tabs>
  )
}
