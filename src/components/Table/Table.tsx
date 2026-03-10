import type {
  TableRootProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableHeadCellProps,
  TableCellProps,
} from './Table.types'
import styles from './Table.module.css'

function Root({ children, className, style }: TableRootProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')
  return <table className={classes} style={style}>{children}</table>
}

function Head({ children, className, style }: TableHeadProps) {
  const classes = [styles.head, className].filter(Boolean).join(' ')
  return <thead className={classes} style={style}>{children}</thead>
}

function Body({ children, className, style }: TableBodyProps) {
  return <tbody className={className} style={style}>{children}</tbody>
}

function Row({ children, selected, onClick, className, style }: TableRowProps) {
  const classes = [
    styles.row,
    onClick ? styles.rowClickable : undefined,
    selected ? styles.rowSelected : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return <tr className={classes} style={style} onClick={onClick}>{children}</tr>
}

function HeadCell({ children, align = 'left', width, className, style }: TableHeadCellProps) {
  const classes = [styles.headCell, className].filter(Boolean).join(' ')
  return (
    <th className={classes} style={{ textAlign: align, width, ...style }}>
      {children}
    </th>
  )
}

function Cell({ children, align = 'left', className, style }: TableCellProps) {
  const classes = [styles.cell, className].filter(Boolean).join(' ')
  return (
    <td className={classes} style={{ textAlign: align, ...style }}>
      {children}
    </td>
  )
}

export const Table = { Root, Head, Body, Row, HeadCell, Cell }
