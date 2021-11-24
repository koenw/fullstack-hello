import React, { useState, useEffect } from "react";
import { Configuration, Brewerie, BreweriesApi } from "./generated";
import SuperTable from "./components/table";
import SuperTabs from "./components/tabs.tsx";

import { Box, Tab, TabPanel } from '@mui/material';

const breweriesApi = new BreweriesApi();

const App = () => {
  const [ breweries, setBreweries ] = useState<Brewerie[]>(null);
  const [ pageIndex, setPageIndex ] = useState<number>(0);
  const [ pageSize, setPageSize ] = useState<number>(10);
  const [ order, setOrder] = useState(null);

  const columnHeaderClick = async (column: any) => {
    switch (column.sortDirection) {
      case 'none':
        setOrder(column.id + '.asc');
        column.sortDirection = 'asc';
        break;
      case 'asc':
        setOrder(column.id + '.desc');
        column.sortDirection = 'desc';
        break;
      case 'desc':
        setOrder(null);
        column.sortDirection = 'none';
        break;
    }
  }

  // TODO: Generate these from the api models to make this entirely generic
  const columns = React.useMemo(
    () =>[
          {
            Header: 'Name',
            accessor: 'name',
            sortDirection: 'none',
          },
          {
            Header: 'City',
            accessor: 'city',
            sortDirection: 'none',
          },
          {
            Header: 'State',
            accessor: 'state',
            sortDirection: 'none',
          },
        ],
  );

  useEffect(() => {
    var args = {'limit': pageSize, 'offset': pageIndex * pageSize};
    if (order) {
      args['order'] = order;
    }
    breweriesApi.breweriesGet(args)
      .then(
        (result) => {
          setBreweries(result);
        },
        (error) => {
          console.log("Failed to get breweries", error);
        }
      );
  }, [pageSize, pageIndex, order]);

  if (!breweries) {
    setBreweries([]);
  }

  return(
  <SuperTabs labels={["Breweries"]}>
    <SuperTable
      columns={columns}
      data={breweries}
      initialPageSize={pageSize}
      onChangePageIndex={setPageIndex}
      onChangePageSize={setPageSize}
      onHeaderClick={columnHeaderClick}
    />
  </SuperTabs>
  );
};

export default App;
