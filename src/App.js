import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Books from "./recap/Books";
import Hooks from "./recap/Hooks";
import{BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Route exact="/" component={Books}/>
      <Books />
      <Hooks title={}/>
    </div>
    </Router>
  );
}

export default App;
