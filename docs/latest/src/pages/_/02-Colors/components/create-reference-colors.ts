import refJson from '@sinch-engage/nectary-theme-base/ref.json'

export type TableItem = {
  key: string,
  value: string,
  cssName: string,
  tokenName: string,
  colorName: string,
}

type SinchColors = {
  Main: TableItem[],
  Complementary: TableItem[],
}

const colorMainKeys = Object.keys(refJson.color.main) as (keyof typeof refJson.color.main)[]

const colorComplementaryKeys = Object.keys(refJson.color.complementary) as (keyof typeof refJson.color.complementary)[]

export const colorsMain = colorMainKeys.reduce((res: TableItem[], name: keyof typeof refJson.color.main) => {
  for (const variantName of Object.keys(refJson.color.main[name]) as (keyof typeof refJson.color.main[typeof name])[]) {
    const value = refJson.color.main[name][variantName]
    const cssName = `--sinch-ref-color-main-${name}-${variantName}`
    const tokenName = `ref.color.main.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])

export const colorsComplementary = colorComplementaryKeys.reduce((res: TableItem[], name: keyof typeof refJson.color.complementary) => {
  for (const variantName of Object.keys(refJson.color.complementary[name]) as (keyof typeof refJson.color.complementary[typeof name])[]) {
    const value = refJson.color.complementary[name][variantName]
    const cssName = `--sinch-ref-color-complementary-${name}-${variantName}`
    const tokenName = `ref.color.complementary.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])

export const sinchColors: SinchColors = {
  Main: colorsMain,
  Complementary: colorsComplementary,
}
