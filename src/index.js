import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Moralis from "moralis";
import { createRoot } from "react-dom/client";
import { MoralisProvider } from "react-moralis";

const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
const appId = process.env.REACT_APP_MORALIS_APP_ID;
console.log(serverUrl, appId);
Moralis.start({
  serverUrl,
  appId,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <App />
    </MoralisProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
