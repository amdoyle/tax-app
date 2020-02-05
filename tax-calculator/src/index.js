import * as React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./app_routes";

const App = () => {
  return <AppRoutes />;
};

ReactDOM.render(<App />, document.getElementById("app"));
