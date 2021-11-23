import React, { useState, useEffect } from "react";
import { Configuration, Brewerie, BreweriesApi } from "./generated";
import SuperTable from "./components/table";

const breweriesApi = new BreweriesApi();

const App = () => {
  const [ breweries, setBreweries ] = useState<Brewerie[]>(null);
  const [ offset, setOffset ] = useState<number>(0);
  const [ limit, setLimit ] = useState<number>(25);
  const [ BreweriesDirty, setBreweriesDirty ] = useState<Bool>(false);

  useEffect(() => {
    breweriesApi.breweriesGet({'limit': limit, 'offset': offset})
      .then(
        (result) => {
          setBreweries(result);
          setBreweriesDirty(false);
        },
        (error) => {
          console.log("Failed to get breweries", error);
        }
      );
  }, []);

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
      <SuperTable columns={columns} data={breweries} />
    );
  } else {
    return(
      <SuperTable columns={columns} data={[]} />
    );
  }
};

export default App;
