import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./container/HomePage";
import { Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
        padding: "12px 24px",
      },
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
