import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from './Component/StateProvider/StateProvider.jsx';
import reducer, { initalState } from './Component/Reducer.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initalState={initalState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
