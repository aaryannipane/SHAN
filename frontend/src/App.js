import React from "react";
import { createBrowserRouter, Route, Router,RouterProvider,Switch} from "react-router-dom";
import { Home } from "./Componants/pages/Home";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/new",
      element: <div>new</div>,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
};
