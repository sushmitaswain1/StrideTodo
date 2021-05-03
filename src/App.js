import "./App.sass";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import SearchPage from "./Pages/SearchPage/SearchPage.component";
import Todo from "./components/Todo/Todo.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/allUsers" component={SearchPage} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
