import { useState } from 'react'
import { useComponentSearchParams } from '../usePrefixedSearchParams'
import type { TSinchSize } from '@nectary/components/utils/size'
import type { FC } from 'react'
import '@nectary/components/input'
import '@nectary/components/spinner'
import '@nectary/components/select-button'
import '@nectary/components/button'
import '@nectary/components/toggle'
import '@nectary/components/icon'

export const InputSlots: FC = () => {
  const [search] = useComponentSearchParams('input-slots')
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
          <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"/>
          <sinch-input
            style={{ width: '200px' }}
            slot="left"
            aria-label="Input"
            value={value}
            on-change={onChange}
          >
            <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"/>
            <sinch-input
              style={{ width: '75px' }}
              slot="left"
              aria-label="Input"
              value={value}
              on-change={onChange}
            >
              <sinch-icon icons-version="2" name="fa-magnifying-glass" slot="icon"/>
              <sinch-button slot="right" aria-label="button">
                <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
              </sinch-button>
            </sinch-input>
            <sinch-button slot="right" aria-label="button">
              <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
            </sinch-button>
          </sinch-input>
          <sinch-button slot="right" aria-label="button">
            <sinch-spinner slot="icon"/>
          </sinch-button>

        </sinch-input>
        <sinch-button type="primary" size={sizeValue} aria-label="button">
          <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
        </sinch-button>
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
            on-click={() => { }}
            placeholder=""
            text=""
          >
            <sinch-button type="primary" slot="left" aria-label="button">
              <sinch-icon icons-version="2" name="fa-arrow-up-right-from-square" slot="icon"/>
            </sinch-button>
            <sinch-spinner slot="icon"/>
          </sinch-select-button>
          <sinch-button slot="right" type="cta-secondary" text="OK" aria-label="button"/>

        </sinch-input>
        <sinch-button size={sizeValue} text="OK" aria-label="button"/>
        <sinch-spinner slot="icon" size={sizeValue}/>
      </div>
      <div>
        <sinch-toggle checked={sizeValue === 'l'} on-change={onSizeChange} text="Toggle size" aria-label="Toggle size"/>
      </div>
    </div>
  )
}
