import { Button, Icon, Tag, Textarea } from '@nectary/react'
import { useState } from 'react'
import type { CSSProperties, FC } from 'react'

const textareaStyles: CSSProperties = {
  width: 500,
}

const tagStyles: CSSProperties = {
  marginLeft: 'auto',
}

export const BottomExample: FC = () => {
  const [value, setValue] = useState('')

  const bottomToolbar = (
    <>
      <Button aria-label="Paperclip" icon={<Icon iconsVersion="2" name="fa-paperclip-vertical"/>}/>
      <Button aria-label="Emoji" icon={<Icon iconsVersion="2" name="fa-face-laugh"/>}/>
      <Button aria-label="Variables" icon={<Icon iconsVersion="2" name="fa-brackets-curly"/>}/>
      <Button aria-label="Comment" icon={<Icon iconsVersion="2" name="fa-comment-plus"/>}/>
      <Button aria-label="More" icon={<Icon iconsVersion="2" name="fa-ellipsis"/>}/>
      <Tag text="400" color="success" style={tagStyles}/>
      <Button variant="primary" aria-label="Send" text="Send"/>
    </>
  )

  return (
    <Textarea
      aria-label="Textarea"
      placeholder="Placeholder"
      value={value}
      onChange={setValue}
      bottomContent={bottomToolbar}
      style={textareaStyles}
    />
  )
}
