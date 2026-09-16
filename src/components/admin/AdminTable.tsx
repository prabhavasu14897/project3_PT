import type { ReactNode } from "react";

export interface AdminTableColumn<T> {
  header: string;
  cell: (row: T) => ReactNode;
}

interface AdminTableProps<T> {
  columns: AdminTableColumn<T>[];
  rows: T[];
  getRowKey: (row: T) => string;
  emptyMessage?: string;
}

export function AdminTable<T>({
  columns,
  rows,
  getRowKey,
  emptyMessage = "No records found.",
}: AdminTableProps<T>) {
  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center text-body-md text-text-muted">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-surface-elevated">
      <table className="w-full text-left text-body-md">
        <thead>
          <tr className="border-b border-border">
            {columns.map((column) => (
              <th
                key={column.header}
                scope="col"
                className="px-5 py-3 text-label-md text-text-muted uppercase"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getRowKey(row)} className="border-b border-border last:border-0">
              {columns.map((column) => (
                <td key={column.header} className="px-5 py-4 text-text-primary">
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
