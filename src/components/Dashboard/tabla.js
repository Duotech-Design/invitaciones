/* eslint-disable react-hooks/rules-of-hooks */

import React, { useMemo, useState, useEffect, useCallback, useReducer, useRef } from 'react';
import './index.css'
import {
  Column,
  Table,
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  RowData,
} from '@tanstack/react-table';
import { makeData } from './makeData';

const DefaultColumn = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
      table.options.meta?.updateData(index, id, value);
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        style={{border: '0px solid rgb(229, 231, 235)', backgroundColor: 'transparent', textAlign: 'center', fontSize: '16px'}}
      />
    );
  },
};

function useSkipper() {
  const shouldSkipRef = useRef(true);
  const shouldSkip = shouldSkipRef.current;

  const skip = useCallback(() => {
    shouldSkipRef.current = false;
  }, []);

  useEffect(() => {
    shouldSkipRef.current = true;
  });

  return [shouldSkip, skip];
}

function TablaPrincipal() {
  const rerender = useReducer(() => ({}), {})[1];

  const columns = useMemo(
    () => [
      {
        header: 'Nombre',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'nombre',
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: 'Pases',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'pases',
            header: () => 'Pases',
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: 'Número de Mesa',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'numero_mesa',
            header: () => 'Número de Mesa',
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: 'WhatsApp',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'whatsapp',
            header: () => 'WhatsApp',
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: 'Envío de Invitaciones',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'envioInvitaciones',
            header: () => 'Envío de Invitaciones',
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(1000));
  const refreshData = () => setData(() => makeData(1000));

  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

  const table = useReactTable({
    data: data,
    columns: columns,
    defaultColumn: DefaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: autoResetPageIndex,
    meta: {
      updateData: (rowIndex, columnId, value) => {
        skipAutoResetPageIndex();
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </div>
  );
}

function Filter({ column, table }) {
  const columnFilterValue = column.getFilterValue();

  if (column.id === 'pases' || column.id === 'envioInvitaciones') {
    return null; // No renderizar input de búsqueda para estas columnas
  }

  return (
    <input
      type={typeof columnFilterValue === 'number' ? 'number' : 'text'}
      value={columnFilterValue ?? ''}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className={`w-${typeof columnFilterValue === 'number' ? '24' : '36'} border shadow rounded`}
    />
  );
}



export default TablaPrincipal;

