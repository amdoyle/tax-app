import * as React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./app_routes";
import "./app.css";

const App = () => {
  return <AppRoutes />;
};

ReactDOM.render(<App />, document.getElementById("app"));
