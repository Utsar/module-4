import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components-d2/MyNavBar"
import Footer from "./components-d2/Footer"
import Jumbotron from "./components-d2/Jumbotron"
import LatestRelease from './components-d2/LatestRelease';



function App() {
  return (
    <div>
      <MyNavBar/>
      <Jumbotron/>
      <LatestRelease/>
      <Footer/>
  
    </div>
  );
}

export default App;
