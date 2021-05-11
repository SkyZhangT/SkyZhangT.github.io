import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import NewPost from "./pages/gallery/NewPost";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
});

theme.typography.subtitle1 = {
  fontSize: "0.8rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.8rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.7rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3.0rem",
  },
};

theme.typography.h3 = {
  fontSize: "2.3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.9rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3.4rem",
  },
};

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery/newpost" component={NewPost} />
          </Switch>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
}

export default App;
