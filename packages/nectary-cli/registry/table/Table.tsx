import type { FC, ReactNode } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-row'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-cell'
import '@nectary/components/table-body'
import '@nectary/components/text'

export interface TableColumn {
  key: string,
  header: string,
  align?: 'start' | 'end',
}

export interface TableProps {
  /** Column definitions (key, header, optional align). */
  columns: TableColumn[],
  /** Row data: array of objects keyed by column keys. */
  data: Record<string, unknown>[],
  /** Optional row key for React list (default: index). */
  getRowKey?: (row: Record<string, unknown>, index: number) => string,
}

function formatCell(value: unknown): ReactNode {
  if (value === null || value === undefined) {
    return ''
  }

  if (typeof value === 'object' && typeof (value as { toString?: () => string }).toString === 'function') {
    return String((value as { toString: () => string }).toString())
  }

  return String(value)
}

export const Table: FC<TableProps> = ({
  columns,
  data,
  getRowKey = (_, index) => String(index),
}) => {
  return (
    <sinch-table>
      <sinch-table-head>
        <sinch-table-row>
          {columns.map((col) => (
            <sinch-table-head-cell
              key={col.key}
              text={col.header}
              align={col.align}
            />
          ))}
        </sinch-table-row>
      </sinch-table-head>

      <sinch-table-body>
        {data.map((row, index) => (
          <sinch-table-row key={getRowKey(row, index)}>
            {columns.map((col) => (
              <sinch-table-cell key={col.key} align={col.align}>
                <sinch-text type="s">{formatCell(row[col.key])}</sinch-text>
              </sinch-table-cell>
            ))}
          </sinch-table-row>
        ))}
      </sinch-table-body>
    </sinch-table>
  )
}
