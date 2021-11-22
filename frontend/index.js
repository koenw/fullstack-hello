import React from "react";
import ReactDOM from "react-dom";
import { BeerApi, BrewerieApi } from './generated';

const root = document.getElementById("root");

export function Hello() { return <h1>Hello!</h1>; }

ReactDOM.render(<Hello />, root);
