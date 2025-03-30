import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {persistor, store} from "./store.tsx";
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
