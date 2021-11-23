import React from "react";
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function SuperTable({ columns, data, onChangePageIndex, onChangePageSize, onHeaderClick, initialPageIndex, initialPageSize }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    { columns,
      data,
      initialState: { pageIndex: 0, pageSize: 25 },
      manualPagination: true,
      manualSortBy: true,
    },
    useSortBy,
    usePagination,
  );

  const handleRowsPerPageChange = event => {
    onChangePageSize(Number(event.target.value));
    setPageSize(Number(event.target.value))
  }

  const handlePageChange = (event, newPage) => {
    gotoPage(newPage);
    onChangePageIndex(newPage);
  }

	return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()} {...column.getSortByToggleProps()} onClick={() => onHeaderClick(column)}>
                  <span>{column.render('Header')}</span>
                  <span>
                    {column.sortDirection === 'ASC' ? (
                      <ArrowDropUp />
                    ) : column.sortDirection === 'DESC' ? (
                      <ArrowDropDown />
                    ) : null}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {page.map((row) => (
            prepareRow(row),
            <TableRow key={row.cells.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination rowsPerPage={pageSize} count={-1} page={pageIndex} onPageChange={handlePageChange} onRowsPerPageChange={handleRowsPerPageChange}>
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
            </TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
	)
}

export default SuperTable;
