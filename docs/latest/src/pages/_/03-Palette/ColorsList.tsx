import colors from '@sinch-engage/nectary/colors.json'
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'

const colorsMap = Object.entries(colors)

// Had to keep it out of the mdx because webpack wasn't allowing use of nectary elements in `colorsMap.map`
export const ColorsList = () => (
  <sinch-table>
    <sinch-table-head>
      <sinch-table-row>
        <sinch-table-head-cell align="center" text="Color Name"/>
        <sinch-table-head-cell align="center" text="CSS Name"/>
        <sinch-table-head-cell align="center" text="Color Hex"/>
        <sinch-table-head-cell align="center" text="Sample"/>
      </sinch-table-row>
    </sinch-table-head>
    <sinch-table-body>
      {colorsMap.map((color) => {
        const [name, value] = color
        const cssName = `--sinch-${name.replace(/([a-z])([A-Z]|[0-9])/g, '$1-$2').toLowerCase().replace('color-color', 'color')}`

        return (
          <sinch-table-row key={name}>
            <sinch-table-cell>{name}</sinch-table-cell>
            <sinch-table-cell>{cssName}</sinch-table-cell>
            <sinch-table-cell>{value}</sinch-table-cell>
            <sinch-table-cell>
              <div style={{ width: 20, height: 20, backgroundColor: `var(${cssName})`, alignSelf: 'center' }}/>
            </sinch-table-cell>
          </sinch-table-row>
        )
      })}

    </sinch-table-body>
  </sinch-table>
)
