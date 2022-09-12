import {Route, Switch} from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

function Routes () {

    return(
        <Switch>
            <Route exact path = "/">
                <Login/>
            </Route>
            <Route exact path = "/user">
                <Dashboard/>
            </Route>
        </Switch>
    )
}
export default Routes;