import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
    Router,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { SchoolServiceProvider } from "./components/school-service-context";
import App from "./app";
import store from "./store";
import theme from "./theme";
import SchoolService from "./services/school-service";
import history from "./history";

const schoolService = new SchoolService();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <SchoolServiceProvider value={schoolService}>
                <Router history={history}>
                    <App />
                </Router>
            </SchoolServiceProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
