import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components-d2/MyNavBar";
import D2Jumbotron from "./components-d2/D2Jumbotron";
import WarningSign from "./m4-d6/WarningSign";
import MyBadge from "./m4-d6/MyBadge";
import SingleBook from "./m4-d6/SingleBook";
import Fantasy from "./assets/fantasy.json";
import BookList from "./m4-d6/BookList";

function App() {
  return (
    <div>
      <MyNavBar title="Kristian's book store" />
      <D2Jumbotron
        title="Hello, welcome to my Book Store"
        description="I have not read all those books but they look awesome!"
      />

      <MyBadge text="Hello" color="warning" />

      <WarningSign text="this is Warning Sign" />
      <SingleBook book={Fantasy[0]} />
      <BookList FantasyBook={Fantasy} />
    </div>
  );
}

export default App;
