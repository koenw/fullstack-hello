import React, { useState, useEffect } from "react";
import { Configuration, Brewerie, BreweriesApi, Beer, BeersApi } from "./generated";
import SuperTable from "./components/table";
import SuperTabs from "./components/tabs.tsx";

import { Box, Tab, TabPanel } from '@mui/material';

const breweriesApi = new BreweriesApi();
const beersApi = new BeersApi();

const App = () => {
  const [ breweries, setBreweries ] = useState<Brewerie[]>([]);
  const [ beers, setBeers ] = useState<Beer[]>([]);
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
  const apis = [
    {
      id: 'breweries',
      name: 'Breweries',
      getMethod: (breweriesApi.breweriesGet).bind(breweriesApi),
      setMethod: setBreweries.bind(this),
      data: breweries,
      columns: React.useMemo(
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
      ),
    },
    {
      id: 'beers',
      name: 'Beers',
      getMethod: (beersApi.beersGet).bind(beersApi),
      setMethod: setBeers.bind(this),
      data: beers,
      columns: React.useMemo(
        () => [
              {
                Header: 'Name',
                accessor: 'name',
                sortDirection: 'none',
              },
              {
                Header: 'Style',
                accessor: 'style',
                sortDirection: 'none',
              },
              {
                Header: 'abv',
                accessor: 'abv',
                sortDirection: 'none',
              },
              {
                Header: 'ibu',
                accessor: 'ibu',
                sortDirection: 'none',
              },
        ]
      )
    },
  ];

  useEffect(() => {
    var args = {'limit': pageSize, 'offset': pageIndex * pageSize};
    if (order) {
      args['order'] = order;
    }

    apis.forEach((api) => {
      api.getMethod(args)
      .then(
        (result) => {
          api.setMethod(result);
        },
        (error) => {
          console.log(`Failed to get ${api.name}`, error);
        },
      )
    });

  }, [pageSize, pageIndex, order]);

  return(
  <SuperTabs
    labels={apis.map((api) => api.name)}
    >

    {apis.map((api, i) => (
      <SuperTable
        key={`table-${i}`}
        columns={api.columns}
        data={api.data}
        initialPageSize={pageSize}
        onChangePageIndex={setPageIndex}
        onChangePageSize={setPageSize}
        onHeaderClick={columnHeaderClick}
      />
    ))}
  </SuperTabs>
  );
};

export default App;
