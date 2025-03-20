import styles from '@nectary/theme-base/ref.css?stringify'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/table-body'
import '@nectary/components/text'

const cleanedStylesLines = styles.split('\n').slice(1, -2)
const styleRecord = cleanedStylesLines.map((line) => line.replace(';', '').split(':').map((part) => part.trim())) as [string, string][]

const styleToType = (varName: string): 'color' | 'typography' | 'shadow' | undefined => {
  if (varName.startsWith('--sinch-ref-color')) {
    return 'color'
  } else if (varName.startsWith('--sinch-ref-shadow')) {
    return 'shadow'
  } else if (varName.startsWith('--sinch-ref-typography')) {
    return 'typography'
  }
}

type TypographyCategory = 'fontFamily' |
'fontSize' |
'fontWeight' |
'letterSpacing' |
'lineHeight' |
'paragraphSpacing' |
'textTransform' |
'textDecoration'

const getTypographyCategory = (varName: string): TypographyCategory | undefined => {
  if (varName.includes('font-family')) {
    return 'fontFamily'
  } else if (varName.includes('font-size')) {
    return 'fontSize'
  } else if (varName.includes('font-weight')) {
    return 'fontWeight'
  } else if (varName.includes('letter-spacing')) {
    return 'letterSpacing'
  } else if (varName.includes('line-height')) {
    return 'lineHeight'
  } else if (varName.includes('paragraph-spacing')) {
    return 'paragraphSpacing'
  } else if (varName.includes('text-case')) {
    return 'textTransform'
  } else if (varName.includes('text-decoration')) {
    return 'textDecoration'
  }
}

const TextExample = ({ varName }: {varName: string}) => {
  const category = getTypographyCategory(varName)

  if (category === undefined) {
    return null
  }

  return <p style={{ [category]: `var(${varName})` }}>Lorem ipsum dolor,<br/>sit amet</p>
}

const ColorExample = ({ varName }: {varName: string}) => {
  return <div style={{ backgroundColor: `var(${varName})`, width: 40, height: 40, borderRadius: '100%', border: '1px solid black' }}/>
}

const ShadowExample = ({ varName }: {varName: string}) => {
  return <div style={{ boxShadow: `var(${varName})`, width: 40, height: 40, borderRadius: '100%', backgroundColor: 'white' }}/>
}

export const RefExample = () => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell text="Variable Type"/>
          <sinch-table-head-cell text="Variable Name"/>
          <sinch-table-head-cell text="Value (Base theme)"/>
          <sinch-table-head-cell text="Example"/>
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        {styleRecord.map(([varName, value]) => (
          <sinch-table-row key={varName}>
            <sinch-table-cell>
              <sinch-text type="m">{styleToType(varName)}</sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="m">{varName}</sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              <sinch-text type="m">{value}</sinch-text>
            </sinch-table-cell>
            <sinch-table-cell>
              {styleToType(varName) === 'color' ? <ColorExample varName={varName}/> : null}
              {styleToType(varName) === 'typography' ? <TextExample varName={varName}/> : null}
              {styleToType(varName) === 'shadow' ? <ShadowExample varName={varName}/> : null}
            </sinch-table-cell>
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
