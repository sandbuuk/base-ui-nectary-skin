interface TableBaseProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface TableRootProps extends TableBaseProps {}
export interface TableHeadProps extends TableBaseProps {}
export interface TableBodyProps extends TableBaseProps {}
export interface TableRowProps extends TableBaseProps {
  selected?: boolean
  onClick?: (e: React.MouseEvent<HTMLTableRowElement>) => void
}
export interface TableHeadCellProps extends TableBaseProps {
  align?: 'left' | 'center' | 'right'
  width?: number | string
}
export interface TableCellProps extends TableBaseProps {
  align?: 'left' | 'center' | 'right'
}
