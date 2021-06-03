import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import D4NavBar from "./m4-d4/D4NavBar"
import D2Jumbotron from "./components-d2/D2Jumbotron"
import D4Carousel from "./m4-d4/AllTheBooks";


function App() {
  return (
    <div>
      <D4NavBar title="Kristian's Book Store" />
      <D2Jumbotron title="Welcome to my Book Store!" description="Here you will find all my favourtite books!" />
      <D4Carousel />
    </div>
    
  );
}

export default App;
