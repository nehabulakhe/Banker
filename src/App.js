import './App.css';
import About from './Components/About';
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
   </div>
  );
}

export default App;
