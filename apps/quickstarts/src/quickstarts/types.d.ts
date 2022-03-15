export type QuickStartCard = React.ComponentType<{path?: string}>
export type QuickStartPage = React.ComponentType
export type QuickStart = {
  card: QuickStartCard,
  page?: QuickStartPage,
}
