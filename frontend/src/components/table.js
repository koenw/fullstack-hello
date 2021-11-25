import React from "react";
import PropTypes from 'prop-types';
import { useTable, usePagination, useSortBy } from 'react-table';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

SuperTable.propTypes = {
  columns:            PropTypes.array,
  data:               PropTypes.array,
  initialPageSize:    PropTypes.number,
  onChangePageIndex:  PropTypes.func,
  onChangePageSize:   PropTypes.func,
  onHeaderClick:      PropTypes.func,
};

function SuperTable({ columns, data, initialPageSize, onChangePageIndex, onChangePageSize, onHeaderClick }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns,
      data,
      initialState: { pageIndex: 0, pageSize: initialPageSize },
      pageCount: -1,
      manualPagination: true,
      manualSortBy: true,
    },
    useSortBy,
    usePagination
  );

  const handleRowsPerPageChange = event => {
    onChangePageSize(Number(event.target.value));
    setPageSize(Number(event.target.value));
  };

  const handlePageChange = (event, newPage) => {
    onChangePageIndex(newPage);
    gotoPage(newPage);
  };

	return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow key="table-header" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <TableCell key={`column-${i}`} {...column.getHeaderProps()} {...column.getSortByToggleProps()} onClick={() => onHeaderClick(column)}>
                  <span>{column.render('Header')}</span>
                  <span>
                    {column.sortDirection === 'asc' ? (
                      <ArrowDropUpIcon />
                    ) : column.sortDirection === 'desc' ? (
                      <ArrowDropDownIcon />
                    ) : null}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => (
            prepareRow(row),
            <TableRow key={`row-${i}`} {...row.getRowProps()}>
              {row.cells.map((cell, j) => {
                return <TableCell key={`cell-${i}-${j}`} {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
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
	);
}

export default SuperTable;
