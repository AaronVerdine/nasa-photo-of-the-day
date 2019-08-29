import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log('first render')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
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
      <PhotoCard title={data.title}
                            url={data.url}
                            explanation={data.explanation}   />
    </div>
  );
}

export default App;
