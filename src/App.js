import './App.css';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Home from './Components/Home';
import HomeBelow from './Components/HomeBelow';
import MeetTeam from './Components/MeetTeam';



function App() {
  return (
   <div>
    <Header/>
    <Home/>
    <HomeBelow/>
    <About/>
    <MeetTeam/>
    <Gallery/>
   </div>
  );
}

export default App;
