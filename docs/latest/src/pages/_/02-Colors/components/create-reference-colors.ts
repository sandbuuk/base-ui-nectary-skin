import refJson from '@nectary/theme-base/ref.json'

export type TableItem = {
  key: string,
  value: string,
  cssName: string,
  tokenName: string,
  colorName: string,
}

const colorKeys = Object.keys(refJson.color) as (keyof typeof refJson.color)[]

export const sinchColors = colorKeys.reduce((res: TableItem[], name: keyof typeof refJson.color) => {
  for (const variantName of Object.keys(refJson.color[name]) as (keyof typeof refJson.color[typeof name])[]) {
    const value = refJson.color[name][variantName]
    const cssName = `--sinch-ref-color-main-${name}-${variantName}`
    const tokenName = `ref.color.main.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])
