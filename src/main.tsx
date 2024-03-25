import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import './normalize.css'

import { MetaMaskProvider } from '@metamask/sdk-react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaMaskProvider debug={false} sdkOptions={{
      logging:{
          developerMode: false,
        },
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        dappMetadata: {
          name: "Demo React App",
          url: window.location.host,
        }
    }}>
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
