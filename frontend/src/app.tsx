import React, { useState, useEffect } from "react";
import { Configuration, Brewerie, BreweriesApi } from "./generated";
import SuperTable from "./components/table";

const breweriesApi = new BreweriesApi();

const App = () => {
  const [ breweries, setBreweries ] = useState<Brewerie[]>(null);
  const [ pageIndex, setPageIndex ] = useState<number>(0);
  const [ pageSize, setPageSize ] = useState<number>(25);

  useEffect(() => {
    breweriesApi.breweriesGet({'limit': pageSize, 'offset': pageIndex * pageSize})
      .then(
        (result) => {
          setBreweries(result);
        },
        (error) => {
          console.log("Failed to get breweries", error);
        }
      );
  }, [pageSize, pageIndex]);

  // TODO: Generate these from the api models to make this entirely generic
  const columns = React.useMemo(
    () => [
      {
        Header: 'Breweries',
        columns: [
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
        ]
      },
    ],
    []
  );

  if (breweries) {
    return(
      <SuperTable columns={columns} data={breweries} initialPageIndex={pageIndex} onChangePageIndex={setPageIndex} onChangePageSize={setPageSize} initialPageSize={pageSize}  />
    );
  } else {
    return(
      <SuperTable columns={columns} data={[]} />
    );
  }
};

export default App;
