import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Cart from "./pages/Cart/Cart";

import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#f7f7f7",
                },
            },
        },
        MuiContainer: {
            root: {
                padding: "1rem ",
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
                <Header />
                <main>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Route path="/product/:id" component={ProductDetails} />
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
