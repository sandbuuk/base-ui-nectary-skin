import type { FC } from 'react'
import '@nectary/components/rich-text'

const markdownWithTags = `You can use {{tags}} in your text to highlight special items like {{UserName}}, {{ProductName}}, or {{FeatureFlag}}.

Tags are written using double curly braces: {{example}}`

export const TagsExample: FC = () => {
  return (
    <sinch-rich-text text={markdownWithTags}/>
  )
}
