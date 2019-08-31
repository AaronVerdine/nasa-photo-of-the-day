import React, { useState, useEffect } from "react";
import axios from "axios";
import SpacePics from "./components/SpacePics";
import ToggleButton from './components/ToggleButton';
import "./App.scss";


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // console.log('first render ')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      // console.log(res.data);
      setData(res.data)
    
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
   
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <div className="space-pics">
      {  data 
                  ? <SpacePics title={data.title}
                                          url={data.url}
                                          explanation={data.explanation} 
                                          date={data.date} />
                            :  <h3>Image Loading...</h3>
                            } 
                            
        </div>
        <ToggleButton />
      </div>
  );
}

export default App;
