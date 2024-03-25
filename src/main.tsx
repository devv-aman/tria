import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./normalize.css";

import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MetaMaskProvider
            debug={false}
            sdkOptions={{
                logging: {
                    developerMode: false,
                },
                checkInstallationImmediately: false,
                dappMetadata: {
                    name: "Tria Demo",
                    url: window.location.host,
                },
            }}
        >
            <App />
        </MetaMaskProvider>
    </React.StrictMode>,
);
