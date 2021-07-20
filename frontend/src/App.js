import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Cart from "./pages/Cart/Cart";

import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Layout from "./components/Layout";
const theme = createMuiTheme({
    typography: {
        fontFamily: ["Montserrat"].join(","),
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#fff",
                },
                main: {
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#f9f9f8",
                    minHeight: "80vh",
                },
            },
        },
        MuiContainer: {
            root: {
                padding: "1rem",
            },
        },
        MuiCardContent: {
            root: {
                "&:last-child": {
                    paddingBottom: "0",
                },
            },
        },
        MuiCircularProgress: {
            colorPrimary: {
                color: "#000000",
            },
        },
    },
    shadows: [
        "none",
        "0 2px 4px 0px #e5e5e5",
        ...Array(23).fill("0 2px 4px 0px #e5e5e5"),
    ],
});

const App = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/cart" component={Cart} exact />
                        <Route path="/product/:id" component={ProductDetails} />
                    </Switch>
                </Layout>
            </ThemeProvider>
        </Router>
    );
};

export default App;
