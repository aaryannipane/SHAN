import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./store";

// import App from "./App";
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider } from './context/AuthProvider'; 
import { store } from './App';
import { Provider } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    //     <AuthProvider>
    //         <App/>
    //     </AuthProvider>
    // </React.StrictMode>
    <React.StrictMode>
      <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <App/>
        </Routes>
        </BrowserRouter>
    </AuthProvider>
    </Provider>
</React.StrictMode>

);
