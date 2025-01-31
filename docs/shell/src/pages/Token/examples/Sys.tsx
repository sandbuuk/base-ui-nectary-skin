import styles from '@nectary/theme-base/sys.css?stringify'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/table-body'
import '@nectary/components/text'

const cleanedStylesLines = styles.split('\n').slice(1, -2)
const styleRecord = cleanedStylesLines.map((line) => line.replace(';', '').split(':').map((part) => part.trim())) as [string, string][]

const styleToType = (varName: string): 'color' | 'font' | 'shape' | 'size' | undefined => {
  if (varName.startsWith('--sinch-sys-color')) {
    return 'color'
  } else if (varName.startsWith('--sinch-sys-font')) {
    return 'font'
  } else if (varName.startsWith('--sinch-sys-shape')) {
    return 'shape'
  } else if (varName.startsWith('--sinch-sys-size')) {
    return 'size'
  }
}

const TextExample = ({ varName }: {varName: string}) => {
  return <p style={{ font: `var(${varName})` }}>Lorem ipsum dolor,<br/>sit amet</p>
}

const ColorExample = ({ varName }: {varName: string}) => {
  return <div style={{ backgroundColor: `var(${varName})`, width: 40, height: 40, borderRadius: '100%' }}/>
}

const SizeExample = ({ varName }: {varName: string}) => {
  return <div style={{ width: `var(${varName})`, height: `var(${varName})`, border: '1px solid black' }}/>
}

const ShapeExample = ({ varName }: {varName: string}) => {
  return <div style={{ width: 40, height: 40, border: '1px solid black', borderRadius: `var(${varName})` }}/>
}

export const SysExample = () => {
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
              {styleToType(varName) === 'font' ? <TextExample varName={varName}/> : null}
              {styleToType(varName) === 'size' ? <SizeExample varName={varName}/> : null}
              {styleToType(varName) === 'shape' ? <ShapeExample varName={varName}/> : null}
            </sinch-table-cell>
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
