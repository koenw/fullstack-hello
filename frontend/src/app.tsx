import React, { useState, useEffect } from "react";
import { Configuration, Brewerie, BreweriesApi, Beer, BeersApi } from "./generated";
import SuperTable from "./components/table";
import SuperTabs from "./components/tabs.tsx";

import { Box, Tab, TabPanel } from '@mui/material';

const basePath = document.location.hostname == "localhost" ? "http://localhost:3000" : `https://api.${document.location.hostname}/`;

const configuration = new Configuration({basePath: basePath});

const breweriesApi = new BreweriesApi(configuration);
const beersApi = new BeersApi(configuration);

const App = () => {
  const [ breweries, setBreweries ] = useState<Brewerie[]>([]);
  const [ beers, setBeers ] = useState<Beer[]>([]);
  const [ pageIndex, setPageIndex ] = useState<number>(0);
  const [ pageSize, setPageSize ] = useState<number>(10);
  const [ order, setOrder] = useState(null); // asc, desc, none, null
  const [ ordered, setOrdered ] = useState<number>(0); // column the sort applies to
  const [ activeTab, setActiveTab ] = useState<number>(0);

  const columnHeaderClick = (column: any) => {
    if (ordered != column.id) {
      setOrdered(column.id);
      if (order != null) {
        setOrder(null);
        return;
      }
    };

    switch (order) {
      case null:
        setOrder('asc');
        break;
      case 'asc':
        setOrder('desc');
        break;
      case 'desc':
        setOrder(null);
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
              },
              {
                Header: 'City',
                accessor: 'city',
              },
              {
                Header: 'State',
                accessor: 'state',
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
              },
              {
                Header: 'Style',
                accessor: 'style',
              },
              {
                Header: 'abv',
                accessor: 'abv',
              },
              {
                Header: 'ibu',
                accessor: 'ibu',
              },
        ]
      )
    },
  ];

  useEffect(() => {
    var args = {'limit': pageSize, 'offset': pageIndex * pageSize};
    if (order) {
      args['order'] = `${ordered}.${order}`;
    }

    apis[activeTab].getMethod(args)
      .then(
        (result) => {
          apis[activeTab].setMethod(result);
        },
        (error) => {
          console.log(`Failed to get ${apis[activeTab].name}`, error);
        },
      );

  }, [pageSize, pageIndex, order, activeTab]);

  return(
  <SuperTabs
    activeTab={activeTab}
    onChangeTab={setActiveTab}
    labels={apis.map((api) => api.name)}
    >

    {apis.map((api, i) => (
      <SuperTable
        key={`table-${i}`}
        columns={api.columns}
        data={api.data}
        order={order}
        ordered={ordered}
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
