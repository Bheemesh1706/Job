
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import Menu from './Components/Menu';
import ReactDOM from "react-dom";
import React from 'react';
import Chart from './Components/Chart';
function App() {
  return (
    <html>
      <head>

      </head>
      <body className="body-container">
           <Menu/>
           <Dashboard/>
           <Chart/>
      </body>
    </html>
  );
}

export default App;
