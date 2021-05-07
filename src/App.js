import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import NewPost from "./pages/gallery/NewPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery/newpost" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
