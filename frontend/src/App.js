import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./container/HomePage";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./container/ProductDetails";
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiContainer: {
      root: {
        padding: "1em",
      },
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: "0",
        },
      },
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductDetails} />
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
