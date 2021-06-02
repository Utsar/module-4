import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./m4-d3/MyNav";
import Home from "./m4-d3/Home";
import ReservationForm from "./m4-d3/ReservationForm"

function App() {
  return (
    <div>
      <MyNav />
      <Home />
      <ReservationForm />
    </div>
  );
}

export default App;
