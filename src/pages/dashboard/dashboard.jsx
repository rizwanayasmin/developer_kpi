import React from "react";
import Dashboard from "component/Dashboard";
import { withRouter } from "react-router";

const DashboardPage = () => {
    return(
        <Dashboard />
    )
};

export default withRouter(DashboardPage);
