import logo from './heartRate.svg';
import './App.css';
import Monitoring from './component/HeartMonitoring';
import { useState, useEffect } from 'react';
import Graphique from './component/Graphique';

function App() {

  const[rate, setRate]=useState([]);

  useEffect(()=> {
    setInterval(()=>{
      const bpm = {
        timestamp: new Date().getTime(),
        heartrate : 40 + Math.floor(Math.random() * 160),
      };
      setRate((prev) => {
        if(prev.length>9) {
          prev = prev.slice(-9);
        }
        const list = [...prev, bpm]
      return (list)
        })},1000);
    },[]);

  let bpm = null;
  if(rate.length>0){
    bpm = rate[rate.length-1]
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Heart Rate :
        </p>
        <Monitoring data = {bpm}/>
        <Graphique data = {rate}/>
      </header>
    </div>
  );
}

export default App;
