import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./component/Head";
import Jyan from "./component/Jyan";
import MainContainer from "./component/MainContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SideBar from "./component/SideBar";
import WatchPage from "./component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Jyan />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
       
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
