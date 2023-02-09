import reactLogo from './assets/react.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-clock/dist/Clock.css';
import DateTimes from './components/DateTimes'
import { useState, useEffect } from 'react';

function App() {
  //lets setup a state called time, you cant actually change "time" directly but you can using setTime -> this causes components using this to rerender/update
  const [time, setTime] = useState(new Date());
  
  //arbitary set of data
  let testData = [
    {key: 1, title: "Australia", timezone: "Australia/Melbourne", image: ""},
    {key: 2, title: "Kingtronics", timezone: "Asia/Shanghai", image: ""}, 
    {key: 3, title: "Amsterdam", timezone: "Europe/Amsterdam", image: ""},
    {key: 4, title: "Newbury", timezone: "Europe/London", image: ""},
    {key: 5, title: "Indiana", timezone: "America/Indiana/Indianapolis", image: ""},
    {key: 6, title: "California", timezone: "America/Los_Angeles", image: ""}
  ]

  function updateTime() {
    setTime(new Date);
}      

  //on mounting of this component "App" set up a reoccuring function updateTime 
  //which is called every 1 sec , this updates the state of "time" causing 
  //everything using time to reload. -> every Clock component reloads with the new time.
  useEffect(() => {
    const seconds = setInterval(updateTime, 1000);
    //when our dom is unmounted then we need to clean up
    return () =>  {
      clearInterval(seconds);
    };
  //we just return an empty array because there is nothing we want to trigger this use effect on apart from when this component is mounted.
  }, []);


  return (
    <div className = "row m-2">
      {testData.map((tz) => {
        return <DateTimes key = {tz.key} title = {tz.title} timezone = {tz.timezone} time = {time} setTime = {setTime}/>
      })}
    </div>
    
  )
}

export default App
