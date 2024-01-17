/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState, useEffect, useCallback, useReducer, useRef } from 'react';
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import './index.css';
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
import Paper from '@mui/material/Paper';

const DefaultColumn = {
  cell: ({ getValue, row: { index }, column: { id, editable }, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    const onBlur = () => {
      if (editable) {
        table.options.meta?.updateData(index, id, value);
      }
    };

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <>
        {editable ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={onBlur}
            style={{
              border: '0px solid rgb(229, 231, 235)',
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: '16px',
              color: '#4a331c',
              //minWidth:"180px"
            }}
          />
        ) : (
          <Typography
          style={{
            border: '0px solid rgb(229, 231, 235)',
            backgroundColor: 'transparent',
            textAlign: 'center',
            fontSize: '16px',
            color: '#4a331c',
            //minWidth:"180px"
          }}
          >
            {value}
          </Typography>
        )}
      </>
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

function TablaPrincipal({datos, objetoStatus, suma, setLoadOnce}) {
  const [data, setData] = useState(datos);
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();

  const columns = useMemo(() => [
    {
      header: 'Invitado',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'nombre',
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Apellio',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'apellido',
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Lugares',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'size',
          header: () => '/',
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
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Envio',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'notificaciones',
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Confirmación',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'confirmacion',
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Link',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: 'link',
          header: () => '',
          footer: (props) => props.column.id,
        },
      ],
    },
  ], []);

  
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
          old.map((row, index) => (index === rowIndex ? { ...old[rowIndex], [columnId]: value } : row))
        );
      },
    },
    debugTable: true,
  });

  const refreshData = () => {
    setLoadOnce(false);
    setData(datos);
    
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
      <div>
       
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
         <h1 style={{color: '#7D5730'}}> Registro de invitados </h1>
            <Box>
            <Box sx={{ display: "flex"}}>
              <Typography variant="h17">{"Invitados principales:"}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h17">{data.length}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex"}}>
              <Typography variant="h17">{"Invitados principales confirmados:"}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h17">{objetoStatus.principalConfirmados}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex"}}>
              <Typography variant="h17">{"Total lugares:"}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h17">{suma}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex"}}>
              <Typography variant="h17">{"Lugares confirmados:"}</Typography>
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h17">{objetoStatus.totalConfirmados}</Typography>
              </Box>
            </Box>
            </Box>
          </Box>
        <Paper
          sx={{ padding: "10px", backgroundColor: "#FDFBF7", color: "#4a331c" }}
        >
          <table style={{minWidth:'90vw'}}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
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
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center gap-2">
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
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
              style={{ color: "#4a331c" }}
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
            <Button  variant="contained" sx={{ color: "#4a331c",border:"1px solid #4a331c" }} onClick={() => refreshData()}>
              Refresh Data
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

function Filter({ column, table }) {
  const columnFilterValue = column.getFilterValue();

  if (column.id === 'notificaciones' || column.id === 'size' || column.id === 'link' || column.id === 'whatsapp' ) {
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
