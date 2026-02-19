import { Button, Icon, Input } from '@nectary/react'
import { type CSSProperties, type FC, useState } from 'react'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  gap: 10,
}

const inputStyles: CSSProperties = {
  width: 200,
}

export const SizeExample: FC = () => {
  const [value, setValue] = useState('')

  return (
    <div style={wrapperStyles}>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        size="l"
        style={inputStyles}
        aria-label="Input"
        icon={<Icon name="fa-magnifying-glass" iconsVersion="2" size="sm"/>}
        rightAddon={(
          <Button
            variant="subtle-secondary"
            size="s"
            icon={<Icon name="fa-face-smile" iconsVersion="2" size="sm"/>}
            aria-label="Click"
            onClick={() => {}}
          />
        )}
      />
      <Input
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        size="m"
        style={inputStyles}
        aria-label="Input"
        icon={<Icon name="fa-magnifying-glass" iconsVersion="2" size="sm"/>}
        rightAddon={(
          <Button
            variant="subtle-secondary"
            size="s"
            icon={<Icon name="fa-face-smile" iconsVersion="2" size="sm"/>}
            aria-label="Click"
            onClick={() => {}}
          />
        )}
      />
      <Input
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        size="s"
        style={inputStyles}
        aria-label="Input"
        icon={<Icon name="fa-magnifying-glass" iconsVersion="2" size="sm"/>}
        rightAddon={(
          <Button
            variant="subtle-secondary"
            size="xs"
            icon={<Icon name="fa-face-smile" iconsVersion="2" size="sm"/>}
            aria-label="Click"
            onClick={() => {}}
          />
        )}
      />
    </div>
  )
}
