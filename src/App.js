import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NewPost from "./pages/NewPost";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/newpost" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
