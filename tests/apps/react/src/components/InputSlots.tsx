import { useState } from 'react'
import type { TSinchSize } from '@sinch-engage/nectary/utils/size'
import type { FC } from 'react'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/tag'
import '@sinch-engage/nectary/chip'
import '@sinch-engage/nectary/spinner'
import '@sinch-engage/nectary-assets/icons/search'

type TInput = {
  search: URLSearchParams,
}

export const InputSlots: FC<TInput> = ({ search }) => {
  const [value, setValue] = useState(search.get('value') ?? '')
  const onChange = (e: CustomEvent<string>) => {
    const value = e.detail

    window.dispatchEvent(new CustomEvent('sinch-input-change', { detail: value }))
    setValue(value)
  }
  const [sizeValue, setSizeValue] = useState<TSinchSize>('l')
  const onSizeChange = () => setSizeValue((s) => (s === 'l' ? 'm' : 'l'))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>

        <sinch-input
          style={{ width: '410px' }}
          value={value}
          aria-label="Input"
          size={sizeValue}
          on-change={onChange}
        >
          <sinch-icon-search slot="icon"/>
          <sinch-input
            style={{ width: '200px' }}
            slot="left"
            aria-label="Input"
            value={value}
            on-change={onChange}
          >
            <sinch-icon-search slot="icon"/>
            <sinch-input
              style={{ width: '75px' }}
              slot="left"
              aria-label="Input"
              value={value}
              on-change={onChange}
            >
              <sinch-icon-search slot="icon"/>
              <sinch-icon-button slot="right" aria-label="button">
                <sinch-icon-open-in-new slot="icon"/>
              </sinch-icon-button>
            </sinch-input>
            <sinch-icon-button slot="right" aria-label="button">
              <sinch-icon-open-in-new slot="icon"/>
            </sinch-icon-button>
          </sinch-input>
          <sinch-icon-button slot="right" aria-label="button">
            <sinch-spinner slot="icon"/>
          </sinch-icon-button>

        </sinch-input>
        <sinch-icon-button type="primary" size={sizeValue} aria-label="button">
          <sinch-icon-open-in-new slot="icon"/>
        </sinch-icon-button>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <sinch-input
          style={{ width: '410px' }}
          value={value}
          on-change={onChange}
          size={sizeValue}
          aria-label="Input"
        >
          <sinch-spinner slot="icon"/>
          <sinch-input
            style={{ width: '150px' }}
            slot="left"
            aria-label="Input"
            value={value}
            on-change={onChange}
          >
            <sinch-spinner slot="icon"/>
            <sinch-button slot="right" type="cta-secondary" text="OK" aria-label="button"/>
          </sinch-input>
          <sinch-button slot="right" type="cta-secondary" text="OK" aria-label="button"/>

        </sinch-input>
        <sinch-button size={sizeValue} text="OK" aria-label="button"/>
        <sinch-spinner slot="icon" size={sizeValue}/>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <sinch-input
          style={{ width: '410px' }}
          value={value}
          on-change={onChange}
          size={sizeValue}
          aria-label="Input"
        >
          <sinch-spinner slot="icon"/>
          <sinch-select-button
            style={{ width: '150px' }}
            slot="left"
            aria-label="Input"
            on-click={() => {}}
            placeholder=""
            text=""
          >
            <sinch-icon-button type="primary" slot="left" aria-label="button">
              <sinch-icon-open-in-new slot="icon"/>
            </sinch-icon-button>
            <sinch-spinner slot="icon"/>
          </sinch-select-button>
          <sinch-button slot="right" type="cta-secondary" text="OK" aria-label="button"/>

        </sinch-input>
        <sinch-button size={sizeValue} text="OK" aria-label="button"/>
        <sinch-spinner slot="icon" size={sizeValue}/>
      </div>
      <div>
        <sinch-toggle checked={sizeValue === 'l'} onChange={onSizeChange} text="Toggle size" aria-label="Toggle size"/>
      </div>
    </div>
  )
}
