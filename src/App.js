import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components-d2/MyNavBar";
import D2Footer from "./components-d2/D2Footer";
import D2Jumbotron from "./components-d2/D2Jumbotron";
import LatestRelease from "./components-d2/LatestRelease";

function App() {
  return (
    <div>
      <MyNavBar />
      <D2Jumbotron />
      <LatestRelease />
      <D2Footer />
    </div>
  );
}

export default App;
