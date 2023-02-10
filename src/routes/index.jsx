import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";


export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);