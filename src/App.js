import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateRoute from "./routes/Create";

export default class App extends React.Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/create" component={CreateRoute} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
