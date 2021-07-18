import React from "react";
import Chart from "./Dashboard/Chart";
import Dashboard from "./Dashboard/Dashboard";

const Routes = [
  {
    path: "/sales",
    component: Chart,
  },
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/*",
    component: Dashboard,
  },
];

export default Routes;
