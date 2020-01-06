import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badgesRegistration" component={Home} />
          <Route exact path="/badgesRegistration/badges" component={Badges} />
          <Route
            exact
            path="/badgesRegistration/badges/new"
            component={BadgeNew}
          />
          <Route
            exact
            path="/badgesRegistration/badges/:badgeId"
            component={BadgeDetailsContainer}
          />
          <Route
            exact
            path="/badgesRegistration/badges/:badgeId/edit"
            component={BadgeEdit}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
