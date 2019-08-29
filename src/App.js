import React, { useState, useEffect } from "react";
import axios from "axios";
import SpacePics from "./components/SpacePics";
import "./App.css";

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {  data 
                  ? <SpacePics title={data.title}
                                          url={data.url}
                                          explanation={data.explanation} />
                            : <h3>Image Loading...</h3> 
                            } 
      </div>
  );
}

export default App;
