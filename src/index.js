import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL =
    "http://kwokkieshopbackendnodejs-env.eba-835m3mjm.us-east-2.elasticbeanstalk.com/";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
