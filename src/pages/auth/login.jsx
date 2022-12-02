import React from "react";
import Login from "component/Auth";
import { withRouter } from "react-router";

const LoginPage = () => {
    return(
        <Login />
    )
};

export default withRouter(LoginPage);
