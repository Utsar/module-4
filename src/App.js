import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import D4NavBar from "./m4-d4/D4NavBar";
import D2Jumbotron from "./components-d2/D2Jumbotron";
import FantasyBooks from "./m4-d4/FantasyBooks";
import D4Carousel from "./m4-d4/D4Carousel";

function App() {
  return (
    <div>
      <D4NavBar title="Kristian's Book Store" />
      <D2Jumbotron
        title="Welcome to my Book Store!"
        description="Here you will find all my favourtite books!"
      />
      <D4Carousel />
      <FantasyBooks />
    </div>
  );
}

export default App;
