import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { TopMenu } from "./navigation";
import { routes } from "../config";

const renderRoutes = () =>
  routes.map((route) => <Route exact key={route.path} {...route} />);

const routeNotFound = () => (
  <Route component={() => <div>Route not found</div>} />
);

const App = () => (
  <Router>
    <CssBaseline />
    <TopMenu />
    <Container maxWidth="md">
      <Switch>
        {renderRoutes()}
        {routeNotFound()}
      </Switch>
    </Container>
  </Router>
);

export default App;
