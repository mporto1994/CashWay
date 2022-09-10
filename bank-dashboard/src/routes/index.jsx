import {Route, Switch} from "react-router";

function Routes () {

    return(
        <Switch>
            <Route exact path = "/">
                {/* login */}
            </Route>
            <Route exact path = "/user">
                {/* Dashboard */}
            </Route>
        </Switch>
    )
}
export default Routes;