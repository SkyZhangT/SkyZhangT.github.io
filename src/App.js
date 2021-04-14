import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" exact component={Gallery} />
          <Route exact path="/about" exact component={About} />
          {/*
				<Route path="/" exact component={Gallery} />
			    */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
